import * as math from 'mathjs';

/**
 * Stores position and velocity as 3-vectors.
 */
class PosVel {
    private p: number[];
    private v: number[];

    constructor(p: number[], v: number[]) {
        if (p.length !== 3 || v.length !== 3)
            throw new Error('PosVel only works with 3-vectors');
        this.p = [...p];
        this.v = [...v];
    }

    // Getters
    get pos(): number[] { 
        return [...this.p]; 
    }
    get vel(): number[] { 
        return [...this.v]; 
    }

    /**
     * Computes the weighted sum of multiple PosVel objects.
     */
    static wSum(pvs: PosVel[], scalars: number[]): PosVel {
        if (pvs.length !== scalars.length)
            throw new Error("pvs and scalars must have the same length");

        const sumP = [0, 0, 0];
        const sumV = [0, 0, 0];

        for (let k = 0; k < pvs.length; k++) {
            const pv = pvs[k];
            const scalar = scalars[k];
            for (let j = 0; j < 3; j++) {
                sumP[j] += scalar * pv.pos[j];
                sumV[j] += scalar * pv.vel[j];
            }
        }

        return new PosVel(sumP, sumV);
    }

    static add(pv1: PosVel, pv2: PosVel): PosVel {
        return PosVel.wSum([pv1, pv2], [1, 1]);
    }

    static sub(pv1: PosVel, pv2: PosVel): PosVel {
        return PosVel.wSum([pv1, pv2], [1, -1]);
    }

    /** 
     * Static method for pv*c
     */
    static scale(pv: PosVel, c: number): PosVel {
        const newP = pv.p.map(val => c*val);
        const newV = pv.v.map(val => c*val);
        return new PosVel(newP, newV);
    }

    /**
     * Applies 3x3 matrix to both position and velocity
     */
    static applyMatrix(matrix: number[][], pv: PosVel): PosVel {
        const newP = math.multiply(matrix, pv.p).valueOf() as number[];
        const newV = math.multiply(matrix, pv.v).valueOf() as number[];
        return new PosVel(newP, newV);
    }

    /**
     * Custom formatting
     */
    toString(): string {
        return `PosVel({p: [${this.p.join(', ')}], v: [${this.v.join(', ')}]})`;
    }
}

export { PosVel };