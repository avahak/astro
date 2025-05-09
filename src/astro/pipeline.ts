import * as math from "mathjs";
import { MPP02Ephemeris } from "./ephemeris/mpp02Ephemeris";
import { VSOP87AEphemeris } from "./ephemeris/vsop87aEphemeris";
import { nutation, nutationMatrix, nutationMatrixFromParameters } from "./nutation";
import { precessionMatrix, precessionMatrixOwen } from "./precession";
import { Snapshot } from "./snapshot";
import { Time } from "./time/time";
import { ENUBasis, GeoLocation, Trajectory } from "./types";
import { PosVel } from "./math/posvel";
import { cst } from "./constants";
import { Vec } from "./math/vec";
import { oplus } from "./math/mathTools";
import { cioMatrix } from "./cio/cioLocator";

/**
 * Pipeline for computing apparent place for stars and other bodies.
 */
class Pipeline {
    snapshot: Snapshot;
    vsop87a: VSOP87AEphemeris;
    mpp02: MPP02Ephemeris;
    teteInitialized: boolean;
    cioInitialized: boolean;
    gmstFormula: 0|1;

    constructor(observer: GeoLocation, time: Time, vsop87a: VSOP87AEphemeris, mpp02: MPP02Ephemeris, gmstFormula: 0|1=0) {
        this.snapshot = new Snapshot(time, observer);
        this.vsop87a = vsop87a;
        this.mpp02 = mpp02;
        this.gmstFormula = gmstFormula;
        this.teteInitialized = false;
        this.cioInitialized = false;

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
        // const pMat = this.snapshot.storeOnce('pMat', precessionMatrixOwen(this.snapshot.time.jc_tdb));
        const nut = this.snapshot.storeOnce('nut', nutation(this.snapshot.time.jc_tdb));
        const nMat = this.snapshot.storeOnce('nMat', nutationMatrixFromParameters(...nut));
        const npMat = math.multiply(nMat, pMat).valueOf() as number[][];
        this.snapshot.storeOnce('npMat', npMat);
    }

    private initCIO() {
        const npMat = this.snapshot.get<number[][]>('npMat')!;
        const earth = this.snapshot.get<PosVel>('Earth')!;

        const era = this.snapshot.time.ERA();

        const cioMat = cioMatrix(this.snapshot.time.jc_tdb, npMat[2][0], npMat[2][1]);
        this.snapshot.storeOnce('cioMat', cioMat);

        const observerCIRF = Pipeline.rotateFromITRF(this.snapshot.observer, era);
        const observerGCRF = PosVel.applyMatrix(math.transpose(cioMat), observerCIRF);
        const observerICRF = PosVel.add(earth, observerGCRF);
        this.snapshot.storeOnce('observerICRF', observerICRF);

        this.snapshot.storeOnce('enuCIRF', Pipeline.computeENUBasis(
                this.snapshot.observer.lat, this.snapshot.observer.lon + era));

        this.cioInitialized = true;
    }

    private initTETE() {
        const npMatT = math.transpose(this.snapshot.get<number[][]>('npMat')!);
        const nut = this.snapshot.get<[number, number, number]>('nut')!;
        const earth = this.snapshot.get<PosVel>('Earth')!;

        const gast = this.snapshot.storeOnce('gast', this.snapshot.time.GAST(nut, this.gmstFormula));

        const observerTETE = Pipeline.rotateFromITRF(this.snapshot.observer, gast);
        const observerGCRF = PosVel.applyMatrix(npMatT, observerTETE);
        const observerICRF = PosVel.add(earth, observerGCRF);
        this.snapshot.storeOnce('observerICRF', observerICRF);

        this.snapshot.storeOnce('enuTETE', Pipeline.computeENUBasis(
            this.snapshot.observer.lat, this.snapshot.observer.lon + gast));

        this.teteInitialized = true;
    }

    /**
     * Computes apparent topocentric position of the target using CIO-based transformation.
     */
    transformWithCIO(target: Trajectory, applyLightTimeCorrection: boolean) {
        if (!this.cioInitialized)
            this.initCIO();

        const cioMat = this.snapshot.get<number[][]>('cioMat')!;
        const enuCIRF = this.snapshot.get<ENUBasis>('enuCIRF')!;
        const observerICRF = this.snapshot.get<PosVel>('observerICRF')!;

        // Light-time corrected target position
        const [lightTargetICRF, lightTime] = Pipeline.lightAdjust(
            observerICRF.pos, 
            target, 
            this.snapshot.time.jc_tdb, 
            applyLightTimeCorrection ? 1 : 0
        );

        // All directions below are from observer to target
        // Aberration (annual + diurnal)
        const posICRF = Vec.sub(lightTargetICRF.pos, observerICRF.pos);
        const apparentDirICRF = oplus(observerICRF.vel, Vec.normalize(posICRF, cst.C));
        // Above we used -oplus(-v,-w) = oplus(v,w) to avoid explicit negation of velocities
        const apparentPosICRF = Vec.normalize(apparentDirICRF, 
            (applyLightTimeCorrection && lightTime > 0) ? lightTime*cst.C : Vec.norm(posICRF));

        const apparentPosCIRF = Vec.applyMatrix(cioMat, apparentPosICRF);

        const apparentPosTopocentric = [
            Vec.dot(apparentPosCIRF, enuCIRF.e), 
            Vec.dot(apparentPosCIRF, enuCIRF.n), 
            Vec.dot(apparentPosCIRF, enuCIRF.u)
        ];

        return {
            posICRF: posICRF,
            // apparentPosTETE: Vec.applyMatrix(this.snapshot.get<number[][]>('npMat')!, apparentPosICRF),
            apparentPosCIRF: apparentPosCIRF,
            apparentPosTopocentric: apparentPosTopocentric,
            lightTime: lightTime
        };
    }
    
    /**
     * Computes apparent topocentric position of the target using equinox-based transformation.
     */
    transformWithTETE(target: Trajectory, applyLightTimeCorrection: boolean) {
        if (!this.teteInitialized)
            this.initTETE();

        const npMat = this.snapshot.get<number[][]>('npMat')!;
        const enuTETE = this.snapshot.get<ENUBasis>('enuTETE')!;
        const observerICRF = this.snapshot.get<PosVel>('observerICRF')!;

        // Light-time corrected target position
        const [lightTargetICRF, lightTime] = Pipeline.lightAdjust(
            observerICRF.pos, 
            target, 
            this.snapshot.time.jc_tdb, 
            applyLightTimeCorrection ? 1 : 0
        );

        // All directions below are from observer to target
        // Aberration (annual + diurnal)
        const posICRF = Vec.sub(lightTargetICRF.pos, observerICRF.pos);
        const apparentDirICRF = oplus(observerICRF.vel, Vec.normalize(posICRF, cst.C));
        // Above we used -oplus(-v,-w) = oplus(v,w) to avoid explicit negation of velocities
        const apparentPosICRF = Vec.normalize(apparentDirICRF, 
            (applyLightTimeCorrection && lightTime > 0) ? lightTime*cst.C : Vec.norm(posICRF));

        const apparentPosTETE = Vec.applyMatrix(npMat, apparentPosICRF);

        const apparentPosTopocentric = [
            Vec.dot(apparentPosTETE, enuTETE.e), 
            Vec.dot(apparentPosTETE, enuTETE.n), 
            Vec.dot(apparentPosTETE, enuTETE.u)
        ];

        return {
            posICRF: posICRF,
            apparentPosTETE: apparentPosTETE,
            // apparentPosCIRF: Vec.applyMatrix(this.snapshot.get<number[][]>('cioMat')!, apparentPosICRF),
            apparentPosTopocentric: apparentPosTopocentric,
            lightTime: lightTime
        };
    }

    /**
     * Computes the ENU (East-North-Up) basis vectors at given location.
     * 
     * Sources:
     * https://gssc.esa.int/navipedia/index.php/Transformations_between_ECEF_and_ENU_coordinates
     * https://en.wikipedia.org/wiki/Geographic_coordinate_conversion#From_ECEF_to_ENU
     */
    static computeENUBasis(lat: number, lon: number): ENUBasis {
        const [cl, sl] = [Math.cos(lat), Math.sin(lat)];
        const [ch, sh] = [Math.cos(lon), Math.sin(lon)];

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
     * Transforms a GeoLocation in ITRF to 
     * 1) TETE if GAST is used as rotationAngle, or
     * 2) CIRF if ERA is used as rotationAngle.
     */
    static rotateFromITRF(geo: GeoLocation, rotationAngle: number): PosVel {
        const pos = Pipeline.rectangularFromGeodetic(geo);
        const dRot = 1.00273781191135448*36525*cst.TAU;    // approximation in case of TETE
        const rPos = Vec.zRotate(pos, rotationAngle);
        return new PosVel(rPos, [-dRot*rPos[1], dRot*rPos[0], 0]);
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
     * @returns `[p, s]` where p is light-adjusted target pos and s is light-time
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