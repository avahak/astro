import * as THREE from 'three';

/**
 * Mollweide projection. Here phi is azimuth and theta is elevation angle.
 */
class MollweideProjection {
    private static readonly TOLERANCE = 1e-14;
    theta: Float32Array;
    texture: THREE.DataTexture;

    constructor(size: number=1024) {
        this.theta = MollweideProjection.precomputeMollweideTheta(size);

        this.texture = new THREE.DataTexture(
            this.theta, this.theta.length, 1,
            THREE.RedFormat, THREE.FloatType
        );
        this.texture.minFilter = THREE.LinearFilter;
        this.texture.magFilter = THREE.LinearFilter;
        this.texture.needsUpdate = true;
    }

    /**
     * Solving 2*tau+sin(2*tau)=pi*sin(pi/2*x) for all x in [0,1]
     */
    static precomputeMollweideTheta(size: number) {
        const values = new Float32Array(size);
        for (let k = 0; k < size; k++) {
            const x = (k+0.5) / size;
            const theta = x * Math.PI/2;
            values[k] = MollweideProjection.solveTau(theta);
        }
        return values;
    }
    
    /**
     * Solve 2*tau + sin(2*tau) = PI*sin(theta) using Newton's method.
     */
    static solveTau(theta: number): number {
        const rhs = Math.PI * Math.sin(theta);
        let tau = theta; // Initial guess
        
        while (true) {
            const delta = 2*tau + Math.sin(2*tau) - rhs;
            if (Math.abs(delta) < MollweideProjection.TOLERANCE)
                break;
            tau -= delta / (2*Math.cos(tau))**2;
        }
        return tau;
    }

    /**
     * Mollweide mapping taking in azimuth and elevation angle.
     */
    static map(phi: number, theta: number, r: number=1): [number, number]|null {
        phi = ((phi + Math.PI) % (2*Math.PI) + (2*Math.PI)) % (2*Math.PI) - Math.PI;
        if ((Math.abs(theta) > Math.PI/2) || (r < 0))
            return null;

        const tau = MollweideProjection.solveTau(theta);
        const x = r * 2 * Math.SQRT2 / Math.PI * phi * Math.cos(tau);
        const y = r * Math.SQRT2 * Math.sin(tau);
        return [x, y];
    }

    /**
     * Inverse function of MollweideProjection.map.
     */
    static inverse(x: number, y: number, r: number=1): [number, number]|null {
        if (Math.hypot(x/2, y) >= Math.SQRT2*r)
            return null;
        
        const tau = Math.asin(y / (r * Math.SQRT2));
        const phi = (Math.PI * x) / (2 * r * Math.SQRT2 * Math.cos(tau));
        const theta = Math.asin((2*tau + Math.sin(2*tau)) / Math.PI);
        return [phi, theta];
    }

    dispose() {
        this.texture.dispose();
    }
}

export { MollweideProjection };