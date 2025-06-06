import { PosVel } from '../math/posvel';

/**
 * Computes planet positions and velocities w.r.t. the Sun using VSOP87A series.
 */
class VSOP87AEphemeris {
    bodies: any;
    matrix: number[][];

    /**
     * Here source has to be object containing the (possibly truncated) VSOP87A series
     * loaded from one of the json files.
     */
    constructor(source: any) {
        this.bodies = source['bodies'];
        this.matrix = source['matrix'];
    }

    /**
     * Returns position and velocity for given body and time in Julian centuries since J2000.0. 
     * Units are km, Julian day.
     */
    getPosVel(bodyName: string, t: number): PosVel {
        const tPow = Array.from({ length: 6 }, (_, k) => Math.pow(t, k));
        const tPowP = Array.from({ length: 6 }, (_, k) => k > 0 ? k * Math.pow(t, k-1) : 0);
        
        const pos = [0, 0, 0];
        const vel = [0, 0, 0];
        this.bodies[bodyName].forEach((group: any) => {
            const coord = group['coord'];
            const alpha = group['alpha'];
            const coeffs = group['coeffs'];

            let sumPos = 0;
            let sumVel = 0;
            for (let k3 = 0; k3 < coeffs.length; k3 += 3) {
                const a = coeffs[k3 + 0];
                const b = coeffs[k3 + 1];
                const c = coeffs[k3 + 2];
                sumPos += a * Math.cos(b + c*t);
                sumVel -= a * c * Math.sin(b + c*t);
            }

            pos[coord] += tPow[alpha] * sumPos;
            vel[coord] += tPowP[alpha] * sumPos + tPow[alpha] * sumVel;
        });

        // Units are already AU/Julian century, just apply the matrix
        return PosVel.applyMatrix(this.matrix, new PosVel(pos, vel));
    }
}

export { VSOP87AEphemeris };