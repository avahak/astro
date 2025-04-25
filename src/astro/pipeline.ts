import * as math from "mathjs";
import { MPP02Ephemeris } from "./ephemeris/mpp02Ephemeris";
import { VSOP87AEphemeris } from "./ephemeris/vsop87aEphemeris";
import { nutation, nutationMatrix, nutationMatrixFromParameters } from "./nutation";
import { precessionMatrix } from "./precession";
import { Snapshot } from "./snapshot";
import { Time } from "./time/time";
import { ENUBasis, GeoLocation, Trajectory } from "./types";
import { PosVel } from "./math/posvel";
import { cst } from "./constants";
import { Vec } from "./math/vec";
import { oplus } from "./math/mathTools";

/**
 * Pipeline for computing apparent place for stars and other bodies.
 */
class Pipeline {
    snapshot: Snapshot;
    vsop87a: VSOP87AEphemeris;
    mpp02: MPP02Ephemeris;

    constructor(observer: GeoLocation, time: Time, vsop87a: VSOP87AEphemeris, mpp02: MPP02Ephemeris) {
        this.snapshot = new Snapshot(time, observer);
        this.vsop87a = vsop87a;
        this.mpp02 = mpp02;

        this.init();
    }

    private init() {
        const computeBody = (bodyName: string) => this.vsop87a.getPosVel(bodyName, this.snapshot.time.jc_tdb);
        const computeMoon = () => this.mpp02.getPosVel(this.snapshot.time.jc_tdb);

        const emb = this.snapshot.storeOnce('emb', computeBody('EARTH-MOON'));
        const vEarthMoon = this.snapshot.storeOnce('vEarthMoon', computeMoon);
        const c = 1 / (cst.MASS_RATIO_EARTH_MOON + 1);
        const earth = this.snapshot.storeOnce('Earth', PosVel.wSum([emb, vEarthMoon], [1, -c]));
        this.snapshot.storeOnce('Moon', PosVel.wSum([emb, vEarthMoon], [1, 1-c]));

        const pMat = this.snapshot.storeOnce('pMat', precessionMatrix(this.snapshot.time.jc_tdb));
        const nut = this.snapshot.storeOnce('nut', nutation(this.snapshot.time.jc_tdb));
        const nMat = this.snapshot.storeOnce('nMat', nutationMatrixFromParameters(...nut));
        const npMat = math.multiply(nMat, pMat).valueOf() as number[][];
        this.snapshot.storeOnce('npMat', npMat);
        const npMatT = this.snapshot.storeOnce('npMatT', math.transpose(npMat)); // =inverse

        const gast = this.snapshot.storeOnce('gast', this.snapshot.time.GAST(nut));
        const observerGeocentric = Pipeline.geocentricCoordinates(this.snapshot.observer, gast);
        const observerGCRF = PosVel.applyMatrix(npMatT, observerGeocentric);
        this.snapshot.storeOnce('observerICRF', PosVel.add(earth, observerGCRF));

        const enu = Pipeline.computeENUBasis(this.snapshot.observer, gast);
        this.snapshot.storeOnce('enu', enu);
    }
    
    reduce(target: Trajectory, useLightAdjust: boolean) {
        const npMat = this.snapshot.get<number[][]>('npMat')!;
        const enu = this.snapshot.get<ENUBasis>('enu')!;
        const observerICRF = this.snapshot.get<PosVel>('observerICRF')!;
        const gast = this.snapshot.get<number>('gast')!;

        // Light-time corrected target position
        const lightTimeIters = useLightAdjust ? 1 : 0;
        const [lightTargetICRF, lightTime] = Pipeline.lightAdjust(
            observerICRF.pos, 
            target, 
            this.snapshot.time.jc_tdb, 
            lightTimeIters
        );

        // Aberration (annual + diurnal)
        // All directions below are from observer -> target
        const dirICRF = Vec.normalize(
            Vec.sub(lightTargetICRF.pos, observerICRF.pos),
            cst.C
        );
        const apparentDirICRF = oplus(observerICRF.vel, dirICRF);
        // Using -oplus(-v,-w) = oplus(v,w) here to avoid explicit negation of velocities

        // Precession and nutation
        const apparentDirEquatorial = Vec.applyMatrix(npMat, apparentDirICRF);

        const apparentDirENU = [
            Vec.dot(apparentDirEquatorial, enu.e), 
            Vec.dot(apparentDirEquatorial, enu.n), 
            Vec.dot(apparentDirEquatorial, enu.u)
        ];
        // In reference data only light-time adjustment is done
        let [raGCRS, decGCRS] = Pipeline.sphericalFromCartesian(dirICRF);
        const [raDate, decDate] = Pipeline.sphericalFromCartesian(apparentDirEquatorial);
        const [az, alt] = Pipeline.sphericalFromCartesian(apparentDirENU);

        return [this.snapshot.time.jc_ut1*36525+2451545, this.snapshot.time.deltaT*36525*24*3600, raGCRS, decGCRS, raDate, decDate, (cst.TAU+Math.PI/2-az) % cst.TAU, alt, ((gast+this.snapshot.observer.lon) % cst.TAU + cst.TAU) % cst.TAU, ((gast+this.snapshot.observer.lon-raDate) % cst.TAU + cst.TAU) % cst.TAU, (gast+cst.TAU)%cst.TAU, lightTime*36525*24*60*60];
        // return [this.snapshot.time.jc_ut1*36525+2451545, this.snapshot.time.deltaT*36525*24*3600, raGCRS, decGCRS, raDate, decDate, (cst.TAU+Math.PI/2-az) % cst.TAU, alt, ((gast+this.snapshot.observer.lon) % cst.TAU + cst.TAU) % cst.TAU, ((gast+this.snapshot.observer.lon-raDate) % cst.TAU + cst.TAU) % cst.TAU, (this.snapshot.time._GAST())%cst.TAU];
    }

    static sphericalFromCartesian(v: number[]) {
        const r = Vec.norm(v);
        const rxy = Math.hypot(v[0], v[1]);
        const az = Math.atan2(v[1], v[0]);
        const alt = Math.atan2(v[2], rxy);
        return [az < 0 ? az+cst.TAU : az, alt, r];
    }

    /**
     * Computes the ENU (East-North-Up) basis vectors in the true equator/equinox of date frame.
     * 
     * Sources:
     * https://gssc.esa.int/navipedia/index.php/Transformations_between_ECEF_and_ENU_coordinates
     * https://en.wikipedia.org/wiki/Geographic_coordinate_conversion#From_ECEF_to_ENU
     */
    static computeENUBasis(geo: GeoLocation, gast: number): ENUBasis {
        const last = gast + geo.lon;
        const [cl, sl] = [Math.cos(geo.lat), Math.sin(geo.lat)];
        const [ch, sh] = [Math.cos(last), Math.sin(last)];

        // Up: Geodetic normal vector (points from Earth's center to observer)
        // East: Tangent to the local latitude circle (perpendicular to Earth's pole)
        // North: n=u\times e, ensures right-handed system
        // Derivation: take cartesian position written using spherical coordinates 
        // and differentiate w.r.t. each spherical coordinate and normalize.
        const e = [-sh, ch, 0];
        const n = [-sl*ch, -sl*sh, cl];
        const u = [cl*ch, cl*sh, sl];

        return { 'e': e, 'n': n, 'u': u };
    }

    /**
     * Returns observer coordinates in the true equator/equinox of date frame.
     */
    static geocentricCoordinates(geo: GeoLocation, gast: number): PosVel {
        const pos = Pipeline.rectangularFromGeodetic(geo);
        const dGast = 1.00273781191135448*36525*cst.TAU;    // ignoring tiny terms here
        // const dGast = 1.00273781191135448*cst.TAU/(24*3600*cst.S);
        const rPos = Vec.zRotate(pos, gast);
        return new PosVel(rPos, [-dGast*rPos[1], dGast*rPos[0], 0]);
    }

    /**
     * Returns geocentric rectangular coordinates from geodetic coordinates.
     * 
     * Source: IAUCircular179.pdf, p.63
     */
    static rectangularFromGeodetic(geo: GeoLocation): number[] {
        const f = cst.RADIUS_EARTH_F;
        const s = (1-f)**2;
        const c = 1 / Math.sqrt(Math.cos(geo.lat)**2 + s*Math.sin(geo.lat)**2);
        return [
            (cst.RADIUS_EARTH_E*c + geo.h)*Math.cos(geo.lat)*Math.cos(geo.lon),
            (cst.RADIUS_EARTH_E*c + geo.h)*Math.cos(geo.lat)*Math.sin(geo.lon),
            (cst.RADIUS_EARTH_E*s*c + geo.h)*Math.sin(geo.lat)
        ];
    }

    /**
     * Adjusts perceived position of the target for light travel time. The equation
     * ```text
     *      |T(t) - O| = (t0-t)*C
     * ```
     * tells that the distance the light travelled (left) is equal to its travel time 
     * times its speed (right). Writing S(t)=T(t)-O, it can be written as
     * ```text
     *      f(t) = t, where
     *      f(t) = t0 - |S(t)|/C.
     * ``` 
     * Then f is v_max/C-Lipschitz so fixed-point iteration is guaranteed to converge quickly.
     * Another way to write this is to denote g(t) = C*(t-f(t)) and solve g(t)=0 with 
     * Newton's method
     * ```text
     *      t_{k+1} = t_k - g(t_k)/g'(t_k)
     *      t_{k+1} = t_k - (C*(t_k-t0) + |S(t_k)|)) / (C + <S(t_k),S'(t_k)>/|S(t_k)|).
     * ```
     */
    static lightAdjust(origin: number[], target: Trajectory, t0: number, iterNum: number=1): [PosVel, number] {
        let t = t0;

        for (let iter = 0; iter < iterNum; iter++) {
            const current = target(t);
            const diff = Vec.sub(current.pos, origin);
            const dist = Vec.norm(diff);
            const dDist = dist > 0 ? Vec.dot(diff, current.vel)/dist : 0;

            t = t - ((t-t0)*cst.C + dist) / (cst.C + dDist);
            // NOTE If we set dDist=0 above, we get back fixed-point iteration
        }
        return [target(t), t0-t];
    }
}

export { Pipeline };