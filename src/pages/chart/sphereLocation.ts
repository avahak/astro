// How does this work with projections?
import * as THREE from 'three';
import { Projection } from './types';
import { cartesianFromSpherical, sphericalFromCartesian } from '../../astro/math/mathTools';
import { Vec } from '../../astro/math/vec';

class SphereLocation {
    rotation!: THREE.Quaternion;
    scale!: number;

    projection!: Projection;
    /**
     * Defines used in three.js shaders
     */
    projectionDefines: any;

    constructor(projection: Projection) {
        this.setProjection(projection);
        this.setLocation(0, 0, 1);
    }

    static getRotation(phi: number, theta: number, projection: Projection): THREE.Quaternion {
        const r1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), theta-Math.PI/2);
        const r3 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI/2-phi);
        return r1.multiply(r3);
    }

    setLocation(phi: number, theta: number, scale: number) {
        this.scale = scale;
        this.rotation = SphereLocation.getRotation(phi, theta, this.projection);
    }

    setProjection(projection: Projection) {
        this.projection = projection;
        this.projectionDefines = {
            PROJECTION_STEREOGRAPHIC: this.projection === "STEREOGRAPHIC",
            PROJECTION_GNOMONIC: this.projection === "GNOMONIC",
            PROJECTION_MOLLWEIDE: this.projection === "MOLLWEIDE",
            PROJECTION_HAMMER: this.projection === "HAMMER",
        };
    }

    transform(x: number, y: number, dx: number, dy: number, scale: number, angle: number, width: number, height: number) {
        // const aspect = width / height;
        const [x1, y1] = [2*(x-width/2)/height, 2*(y-height/2)/height];
        const [x2, y2] = [2*(x+dx-width/2)/height, 2*(y+dy-height/2)/height];
        const sp1 = sphericalFromCartesian(...Vec.yRotate(this.inverseProject([x1, y1]), Math.PI/2) as [number, number, number]);
        const sp2 = sphericalFromCartesian(...Vec.yRotate(this.inverseProject([x2, y2]), Math.PI/2) as [number, number, number]);

        const r1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -sp1[2]);
        const r2 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), sp1[1]-sp2[1]);
        const r3 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), sp2[2]);
        const r = r3.multiply(r2.multiply(r1));

        this.rotation = r.multiply(this.rotation);
        // this.rotation = this.rotation.multiply(r);
        this.rotation.normalize();

        this.scale *= scale;


        // const [x1, y1] = [2*(x-res.x/2)/res.y, 2*(y-res.y/2)/res.y];
        // const [x2, y2] = [2*(x+dx-res.x/2)/res.y, 2*(y+dy-res.y/2)/res.y];
        // const mi1 = MollweideProjection.inverse(x1, y1, 1/this.scale);
        // const mi2 = MollweideProjection.inverse(x2, y2, 1/this.scale);
        // if (mi1 && mi2) {
        //     const [phi1, theta1] = mi1;
        //     const [phi2, theta2] = mi2;
        //     const dTheta = theta2 - theta1;
        //     this.camera.rotateZ(phi1);
        //     this.camera.rotateY(-dTheta);
        //     this.camera.rotateZ(-phi2);
        // }
    }

    inverseProject(p: number[]): number[] {
        switch (this.projection) {
            case "STEREOGRAPHIC": {
                const qx = p[0] / this.scale;
                const qy = p[1] / this.scale;
                const t = 2.0 / (1.0 + qx*qx + qy*qy);
                return [t * qx, t * qy, 1.0 - t];
            }
            case "GNOMONIC": {
                const qx = p[0] / this.scale;
                const qy = p[1] / this.scale;
                return [qx, qy, -1.0];
            }
            case "MOLLWEIDE": {
                const qx = p[0] / this.scale;
                const qy = p[1] / this.scale;
                const tau = Math.asin(qy / Math.SQRT2);
                const el = Math.asin((2.0*tau + Math.sin(2.0*tau)) / Math.PI);
                const az = (Math.PI * qx) / (2.0 * Math.SQRT2 * Math.cos(tau));
                const tp = cartesianFromSpherical(1.0, el, az);
                return [tp[1], tp[2], -tp[0]];
            }
            case "HAMMER": {
                const qx = p[0] / this.scale;
                const qy = p[1] / this.scale;
                const z = Math.sqrt(1.0 - 0.0625*qx*qx - 0.25*qy*qy);
                const az = 2.0 * Math.atan2(z * qx, (4.0*z*z - 2.0));
                const el = Math.asin(z * qy);
                const tp = cartesianFromSpherical(1.0, el, az);
                return [tp[1], tp[2], -tp[0]];
            }
        }
    }
}

export { SphereLocation };