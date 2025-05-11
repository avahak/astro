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
import { enuBasisFromSpherical, oplus, rectangularFromGeodetic } from "./math/mathTools";
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

        const emb = this.snapshot.set('emb', computeBody('EARTH-MOON'));
        const vEarthMoon = this.snapshot.set('vEarthMoon', computeMoon);
        const c = 1 / (cst.MASS_RATIO_EARTH_MOON + 1);
        const earth = this.snapshot.set('Earth', PosVel.wSum([emb, vEarthMoon], [1, -c]));
        this.snapshot.set('Moon', PosVel.wSum([emb, vEarthMoon], [1, 1-c]));

        const pMat = this.snapshot.set('pMat', precessionMatrix(this.snapshot.time.jc_tdb));
        // const pMat = this.snapshot.set('pMat', precessionMatrixOwen(this.snapshot.time.jc_tdb));
        const nut = this.snapshot.set('nut', nutation(this.snapshot.time.jc_tdb));
        const nMat = this.snapshot.set('nMat', nutationMatrixFromParameters(...nut));
        const npMat = math.multiply(nMat, pMat).valueOf() as number[][];
        this.snapshot.set('npMat', npMat);
    }

    private initCIO() {
        const npMat = this.snapshot.get<number[][]>('npMat')!;
        const earth = this.snapshot.get<PosVel>('Earth')!;

        const era = this.snapshot.time.ERA();

        const cioMat = cioMatrix(this.snapshot.time.jc_tdb, npMat);
        this.snapshot.set('cioMat', cioMat);

        const observerCIRF = Pipeline.rotateFromITRF(this.snapshot.observer, era);
        const observerGCRF = PosVel.applyMatrix(math.transpose(cioMat), observerCIRF);
        const observerICRF = PosVel.add(earth, observerGCRF);
        this.snapshot.set('observerICRF', observerICRF);

        this.snapshot.set('enuCIRF', enuBasisFromSpherical(
                this.snapshot.observer.lat, this.snapshot.observer.lon + era));

        this.cioInitialized = true;
    }

    private initTETE() {
        const npMatT = math.transpose(this.snapshot.get<number[][]>('npMat')!);
        const nut = this.snapshot.get<[number, number, number]>('nut')!;
        const earth = this.snapshot.get<PosVel>('Earth')!;

        const gast = this.snapshot.set('gast', this.snapshot.time.GAST(nut, this.gmstFormula));

        const observerTETE = Pipeline.rotateFromITRF(this.snapshot.observer, gast);
        const observerGCRF = PosVel.applyMatrix(npMatT, observerTETE);
        const observerICRF = PosVel.add(earth, observerGCRF);
        this.snapshot.set('observerICRF', observerICRF);

        this.snapshot.set('enuTETE', enuBasisFromSpherical(
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

        // All vectors below are from observer to target
        // Aberration (annual + diurnal)
        const vecICRF = Vec.sub(lightTargetICRF.pos, observerICRF.pos);
        const apparentDirICRF = oplus(observerICRF.vel, Vec.normalize(vecICRF, cst.C));
        // Above we used -oplus(-v,-w) = oplus(v,w) to avoid explicit negation of velocities
        const apparentVecICRF = Vec.normalize(apparentDirICRF, 
            (applyLightTimeCorrection && lightTime > 0) ? lightTime*cst.C : Vec.norm(vecICRF));

        const apparentVecCIRF = Vec.applyMatrix(cioMat, apparentVecICRF);

        const apparentPosTopocentric = [
            Vec.dot(apparentVecCIRF, enuCIRF.e), 
            Vec.dot(apparentVecCIRF, enuCIRF.n), 
            Vec.dot(apparentVecCIRF, enuCIRF.u)
        ];

        return {
            vecICRF,
            // apparentVecTETE: Vec.applyMatrix(this.snapshot.get<number[][]>('npMat')!, apparentVecICRF),
            apparentVecCIRF,
            apparentPosTopocentric,
            lightTime
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

        // All vectors below are from observer to target
        // Aberration (annual + diurnal)
        const vecICRF = Vec.sub(lightTargetICRF.pos, observerICRF.pos);
        const apparentDirICRF = oplus(observerICRF.vel, Vec.normalize(vecICRF, cst.C));
        // Above we used -oplus(-v,-w) = oplus(v,w) to avoid explicit negation of velocities
        const apparentVecICRF = Vec.normalize(apparentDirICRF, 
            (applyLightTimeCorrection && lightTime > 0) ? lightTime*cst.C : Vec.norm(vecICRF));

        const apparentVecTETE = Vec.applyMatrix(npMat, apparentVecICRF);

        const apparentPosTopocentric = [
            Vec.dot(apparentVecTETE, enuTETE.e), 
            Vec.dot(apparentVecTETE, enuTETE.n), 
            Vec.dot(apparentVecTETE, enuTETE.u)
        ];

        return {
            vecICRF,
            apparentVecTETE,
            // apparentVecCIRF: Vec.applyMatrix(this.snapshot.get<number[][]>('cioMat')!, apparentVecICRF),
            apparentPosTopocentric,
            lightTime
        };
    }

    /**
     * Transforms a GeoLocation in ITRF to 
     * 1) TETE if GAST is used as rotationAngle, or
     * 2) CIRF if ERA is used as rotationAngle.
     */
    static rotateFromITRF(geo: GeoLocation, rotationAngle: number): PosVel {
        const pos = rectangularFromGeodetic(
                { lat: geo.lat, lon: geo.lon+rotationAngle, h: geo.h });
        const dRot = 1.00273781191135448*36525*cst.TAU;    // approximation in case of TETE
        return new PosVel(pos, [-dRot*pos[1], dRot*pos[0], 0]);
    }

    /**
     * Adjusts perceived position of the target for light travel time. The equation
     * ```text
     *      |T(t) - O| = (t0-t)*C
     * ```
     * tells that the distance the light travelled (left) is equal to its travel time 
     * times its speed (right). It can be written as f(t)=t, where
     * ```text
     *      f(t) = t0 - |S(t)|/C, and
     *      S(t) = T(t) - O.
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
            // If we set dDist=0 above, we get back fixed-point iteration
        }
        return [target(t), t0-t];
    }
}

export { Pipeline };