// How does this work with projections?
import * as THREE from 'three';

class SphereLocation {
    phi!: number;
    theta!: number;
    scale!: number;

    constructor() {
        this.setLocation(0, 0, 1);
    }

    setLocation(phi: number, theta: number, scale: number) {
        this.phi = phi;
        this.theta = theta;
        this.scale = scale;
    }

    transform(x: number, y: number, dx: number, dy: number, scale: number, angle: number) {
        this.phi += 0.005*dx;
        this.theta += -0.005*dy;
        this.scale *= scale;
    }

    getRotation(): THREE.Quaternion {
        const r1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), this.theta-Math.PI/2);
        const r3 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI/2-this.phi);
        return r1.multiply(r3);
    }
}

export { SphereLocation };