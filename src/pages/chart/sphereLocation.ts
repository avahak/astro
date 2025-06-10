// How does this work with projections?
import * as THREE from 'three';
import * as math from 'mathjs';
import { Projection } from './types';
import { cartesianFromSpherical, clamp, sphericalFromCartesian } from '../../astro/math/mathTools';
import { Vec } from '../../astro/math/vec';

// function quaternionDistance(q1: THREE.Quaternion, q2: THREE.Quaternion) {
//     const dx = q1.x - q2.x;
//     const dy = q1.y - q2.y;
//     const dz = q1.z - q2.z;
//     const dw = q1.w - q2.w;
//     return Math.sqrt(dx*dx + dy*dy + dz*dz + dw*dw);
// }

function quaternionDistance(q1: THREE.Quaternion, q2: THREE.Quaternion): number {
    const relative = new THREE.Quaternion();
    relative.copy(q1).invert().multiply(q2);
    const w = THREE.MathUtils.clamp(relative.w, -1, 1);
    return 2 * Math.acos(w);
}

function quaternionAngle(q1: THREE.Quaternion, q2: THREE.Quaternion): number {
    q1 = q1.clone().normalize();
    q2 = q2.clone().normalize();

    const q = q1.invert().multiply(q2);
    return Math.min(quaternionDistance(q, new THREE.Quaternion(0, 0, 0, 1)), quaternionDistance(q, new THREE.Quaternion(0, 0, 0, -1)));
}

/**
 * Extrapolates from quaternion q1 toward q2 by scalar t using quaternion log-exp mapping.
 */
function extrapolateQuaternions(q1: THREE.Quaternion, q2: THREE.Quaternion, t: number): THREE.Quaternion {
    const result = new THREE.Quaternion();

    const relative = new THREE.Quaternion();
    relative.copy(q1).invert().multiply(q2).normalize();

    const w = THREE.MathUtils.clamp(relative.w, -1, 1);
    const angle = 2 * Math.acos(w);
    const sinHalfAngle = Math.sqrt(1 - w*w);

    const axis = new THREE.Vector3(relative.x, relative.y, relative.z);

    if (sinHalfAngle < 1e-6) {
        if (axis.lengthSq() > 0) {
            axis.normalize();
        } else {
            return q1.clone();
        }
    } else {
        axis.divideScalar(sinHalfAngle);
    }

    result.setFromAxisAngle(axis, angle * t);
    result.premultiply(q1);

    return result;
}

function clampQuaternionDistance(q: THREE.Quaternion, q2: THREE.Quaternion, maxAngle: number): THREE.Quaternion {
    const delta = new THREE.Quaternion();
    delta.copy(q).invert().multiply(q2);

    const w = THREE.MathUtils.clamp(delta.w, -1, 1);
    const angle = 2 * Math.acos(w);

    if (angle <= maxAngle) {
        return q2.clone();
    }

    const sinHalfAngle = Math.sqrt(1 - w*w);
    const axis = new THREE.Vector3();

    if (sinHalfAngle < 1e-6) {
        // angle very small, no meaningful axis, return original q
        return q.clone();
    }

    axis.set(delta.x / sinHalfAngle, delta.y / sinHalfAngle, delta.z / sinHalfAngle);

    const clampedHalfAngle = maxAngle / 2;
    const clampedSinHalf = Math.sin(clampedHalfAngle);

    const clampedDelta = new THREE.Quaternion(
        axis.x * clampedSinHalf,
        axis.y * clampedSinHalf,
        axis.z * clampedSinHalf,
        Math.cos(clampedHalfAngle)
    );

    return new THREE.Quaternion().copy(q).multiply(clampedDelta);
}


class SphereLocation {
    rotation!: THREE.Quaternion;
    phi: number = 0;
    theta: number = 0;

    scale!: number;

    projection!: Projection;
    /**
     * Defines used in three.js shaders
     */
    projectionDefines: any;

    tempData: Map<number, number> = new Map();

    constructor(projection: Projection) {
        this.setProjection(projection);
        this.setLocation(0, 0, 1);
    }

    static getRotation(phi: number, theta: number, projection: Projection): THREE.Quaternion {
        const r1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), theta-Math.PI/2);
        const r3 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI/2-phi);
        return r1.multiply(r3);
    }

    recomputeRotation() {
        const rx = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), this.phi);
        const rz = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(-1, 0, 0), this.theta);
        const r = rz.clone().multiply(rx);
        this.rotation = r;
        this.rotation.normalize();
    }

    computeCenterAngle(rot: THREE.Quaternion) {
        const m3 = new THREE.Matrix3().setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(rot));
        const m3t = m3.clone().transpose();
        const ip0 = new THREE.Vector3(...this.inverseProject([0, -0.01])).applyMatrix3(m3t).normalize();
        const ip1 = new THREE.Vector3(...this.inverseProject([0, 0.01])).applyMatrix3(m3t).normalize();
        const v = ip1.clone().sub(ip0).normalize();
        const e3 = new THREE.Vector3(0, 0, 1);
        const north = e3.clone().sub(ip0.clone().multiplyScalar(ip0.dot(e3))).normalize();
        const ew = north.clone().cross(ip0).normalize();
        const vEnu = [v.dot(ew), v.dot(north), v.dot(ip0)];
        return Math.atan2(vEnu[0], vEnu[1]);
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

    orientNorth(delta: number) {
        const m3 = new THREE.Matrix3().setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(this.rotation));
        const m3t = m3.clone().transpose();
        const ip0 = new THREE.Vector3(...this.inverseProject([0, -0.01])).applyMatrix3(m3t).normalize();
        const ip1 = new THREE.Vector3(...this.inverseProject([0, 0.01])).applyMatrix3(m3t).normalize();
        const v = ip1.clone().sub(ip0).normalize();
        const e3 = new THREE.Vector3(0, 0, 1);
        const north = e3.clone().sub(ip0.clone().multiplyScalar(ip0.dot(e3))).normalize();
        const ew = north.clone().cross(ip0).normalize();
        const vEnu = [v.dot(ew), v.dot(north), v.dot(ip0)];
        const phi = clamp(Math.atan2(vEnu[0], vEnu[1]), -delta, delta);
        // const phi = Math.atan2(vEnu[0], vEnu[1]);
        // console.log('ip0', ip0);
        // console.log('ip1', ip1);
        // console.log('v', v);
        // console.log('phi', phi);
        const rot = new THREE.Quaternion().setFromAxisAngle(ip0, -phi);
        // this.rotation = rot.multiply(this.rotation);
        this.rotation = this.rotation.multiply(rot);
    }

    transform(x: number, y: number, dx: number, dy: number, scale: number, angle: number, width: number, height: number) {
        const method: number = 4;

        const [x1, y1] = [2*(x-width/2)/height, 2*(y-height/2)/height];
        const [x2, y2] = [2*(x+dx-width/2)/height, 2*(y+dy-height/2)/height];

        if (method === 0) {
            // const aspect = width / height;
            const sp1 = sphericalFromCartesian(...Vec.yRotate(this.inverseProject([x1, y1]), Math.PI/2) as [number, number, number]);
            const sp2 = sphericalFromCartesian(...Vec.yRotate(this.inverseProject([x2, y2]), Math.PI/2) as [number, number, number]);

            const r1 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -sp1[2]);
            const r2 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), sp1[1]-sp2[1]);
            const r3 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), sp2[2]);
            const r = r3.multiply(r2.multiply(r1));

            this.rotation = r.multiply(this.rotation);
            this.rotation.normalize();


            const m3 = new THREE.Matrix3().setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(this.rotation));
            const m3t = m3.clone().transpose();
            const ip0 = new THREE.Vector3(...this.inverseProject([0, 0])).applyMatrix3(m3t).normalize();
            const ip1 = new THREE.Vector3(...this.inverseProject([0, 0.01])).applyMatrix3(m3t).normalize();
            const v = ip1.clone().sub(ip0).normalize();
            const e3 = new THREE.Vector3(0, 0, 1);
            const north = e3.clone().sub(ip0.clone().multiplyScalar(ip0.dot(e3))).normalize();
            const ew = north.clone().cross(ip0).normalize();
            const vEnu = [v.dot(ew), v.dot(north), v.dot(ip0)];
            // const phi = clamp(Math.atan2(vEnu[0], vEnu[1]), -0.01, 0.01);
            const phi = Math.atan2(vEnu[0], vEnu[1]);
            // console.log('ip0', ip0);
            // console.log('ip1', ip1);
            // console.log('v', v);
            // console.log('phi', phi);
            const rot = new THREE.Quaternion().setFromAxisAngle(ip0, -phi);
            // this.rotation = rot.multiply(this.rotation);
            // this.rotation = this.rotation.multiply(rot);
            this.rotation.normalize();
        }

        if (method === 1) {
            const m3 = new THREE.Matrix3().setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(this.rotation));
            const m3t = m3.clone().transpose();
            const world1 = new THREE.Vector3(...this.inverseProject([x1, -y1])).applyMatrix3(m3t).normalize();
            const ip2 = new THREE.Vector3(...this.inverseProject([x2, -y2])).normalize();

            // now the wanted transposed rotation takes ip2 to world1
            const q = new THREE.Quaternion().setFromUnitVectors(world1, ip2);

            const saveRotation = this.rotation.clone();
            const saveQ = q.clone();

            let [bestPhi, bestAngle, bestRotation] = [0.0, Number.MAX_VALUE, new THREE.Quaternion()];
            const data = new Map<number, number>();
            for (let k = 0; k < 2000; k++) {
                // This leaves open rotation around the moving point
                this.rotation.copy(saveRotation);
                q.copy(saveQ);

                const phi = Math.PI*(2.0*Math.random()-1.0);
                const rot = new THREE.Quaternion().setFromAxisAngle(ip2, phi);
                q.premultiply(rot);
                this.rotation = q;
                this.rotation.normalize();
                // What is the angle at (0,0)?
                const angle = this.computeCenterAngle(this.rotation);
                data.set(phi, angle);

                // if (Math.abs(phi) > 0.3)
                //     continue;
                const diff = Math.min(Math.abs(angle), Math.abs(angle-2.0*Math.PI), Math.abs(angle+2.0*Math.PI));
                if (bestPhi === null || diff < bestAngle) {
                    bestPhi = phi;
                    bestAngle = diff;
                    bestRotation = this.rotation.clone();
                }
            }
            this.rotation.copy(saveRotation);
            this.tempData = data;

            // console.log(bestRotation, quaternionDistance(saveRotation, bestRotation), bestAngle);
            // if ((quaternionDistance(saveRotation, bestRotation) > 1.95 || quaternionDistance(saveRotation, bestRotation) < 0.05) && bestAngle < 0.1) {
            //     this.rotation = bestRotation.clone();
            // }
            console.log(quaternionAngle(saveRotation, bestRotation), bestAngle);
            if ((quaternionAngle(saveRotation, bestRotation) < 0.1) && bestAngle < 0.2) {
                this.rotation = bestRotation.clone();
            }


            // this.rotation = q;
            this.rotation.normalize();
        }

        if (method === 2) {
            // R_old^{-1} proj^{-1} pointer_start = R_new^{-1} proj^{-1} pointer_end
            // Therefore R_new R_old^{-1} proj^{-1} pointer_start = proj^{-1} pointer_end

            // diff eq / numerical integration approach
            const m3 = new THREE.Matrix3().setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(this.rotation));
            const m3t = m3.clone().transpose();
            const w1 = new THREE.Vector3(...this.inverseProject([x1, -y1])).applyMatrix3(m3t).normalize();
            const ip2 = new THREE.Vector3(...this.inverseProject([x2, -y2])).normalize();

            const originalRotation = this.rotation.clone();

            for (let iter = 0; iter < 20; iter++) {
                const vecs = [          // nondegenerate since this.rotation always has w-component
                    this.rotation.toArray(),
                    [1, 0, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 1, 0]
                ];

                const A = math.transpose(vecs) as number[][];
                const { Q, R } = math.qr(A);
                const Qt = math.transpose(Q) as number[][];

                // Now Qt[0] is q and Qt[k], k>0, are orthogonal directions. 
                // We can use Vec.normalize(Qt[0]+t*Qt[k]) as paths in the space of unit quaternions
                // leading to orthogonal directions from Qt[0].

                // Now the wanted transposed rotation takes ip2 to w1, 
                // and the wanted rotation takes w1 to ip2.
                const t = 0.01;
                const q0 = new THREE.Quaternion().fromArray(Vec.normalize(Qt[0]));
                const q1t = new THREE.Quaternion().fromArray(Vec.normalize(Vec.wSum([Qt[0], Qt[1]], [1, t])));
                const q2t = new THREE.Quaternion().fromArray(Vec.normalize(Vec.wSum([Qt[0], Qt[2]], [1, t])));
                const q3t = new THREE.Quaternion().fromArray(Vec.normalize(Vec.wSum([Qt[0], Qt[3]], [1, t])));
                const q0w1 = w1.clone().applyQuaternion(q0);
                const dir = ip2.clone().sub(q0w1);
                const q1tw1 = w1.clone().applyQuaternion(q1t).sub(q0w1);
                const q2tw1 = w1.clone().applyQuaternion(q2t).sub(q0w1);
                const q3tw1 = w1.clone().applyQuaternion(q3t).sub(q0w1);
                const dirVec = Vec.normalize([q1tw1.dot(dir), q2tw1.dot(dir), q3tw1.dot(dir)]);

                const northDev0 = Math.sin(this.computeCenterAngle(q0));
                const northDev1 = Math.sin(this.computeCenterAngle(q1t));
                const northDev2 = Math.sin(this.computeCenterAngle(q2t));
                const northDev3 = Math.sin(this.computeCenterAngle(q3t));
                const northVec = Vec.normalize([northDev1-northDev0, northDev2-northDev0, northDev3-northDev0]);

                // We need to keep north bearing at (0,0) the same so we have to move in the plane
                // perpendicular to northVec. The direction that maximizes apprach 
                // to ip2 is dirVec. Therefore we should move in 
                // direction dirVec-(its northVec component).
                const vec = Vec.normalize(Vec.wSum([dirVec, northVec], [1, -Vec.dot(dirVec, northVec)]), 0.1*t);

                const dirQ = new THREE.Quaternion();
                dirQ.x = q0.x + vec[0]*Qt[1][0] + vec[1]*Qt[2][0] + vec[2]*Qt[3][0];
                dirQ.y = q0.y + vec[0]*Qt[1][1] + vec[1]*Qt[2][1] + vec[2]*Qt[3][1];
                dirQ.z = q0.z + vec[0]*Qt[1][2] + vec[1]*Qt[2][2] + vec[2]*Qt[3][2];
                dirQ.w = q0.w + vec[0]*Qt[1][3] + vec[1]*Qt[2][3] + vec[2]*Qt[3][3];
                dirQ.normalize();

                // Now dirQ is the direction we want to move to from this.rotation
                // const alignment = Vec.dot(dirVec, northVec);
                // const stepSize = 3 * Math.max(0, 1 - Math.abs(alignment));
                this.rotation.copy(extrapolateQuaternions(this.rotation, dirQ, 3));
            }
            this.orientNorth(1000);
            this.rotation.copy(clampQuaternionDistance(originalRotation, this.rotation, 0.2));
        }

        if (method === 3) {
            // R_old^{-1} proj^{-1} pointer_start = R_new^{-1} proj^{-1} pointer_end
            // Therefore R_new R_old^{-1} proj^{-1} pointer_start = proj^{-1} pointer_end

            // diff eq / numerical integration approach
            const m3 = new THREE.Matrix3().setFromMatrix4(
                new THREE.Matrix4().makeRotationFromQuaternion(this.rotation)
            );
            const m3t = m3.clone().transpose();
            const w1 = new THREE.Vector3(...this.inverseProject([x1, -y1])).applyMatrix3(m3t).normalize();
            const ip2 = new THREE.Vector3(...this.inverseProject([x2, -y2])).normalize();

            const originalRotation = this.rotation.clone();

            for (let iter = 0; iter < 20; iter++) {
                const q0 = this.rotation.clone();

                const w1q0 = w1.clone().applyQuaternion(q0);

                const omega = new THREE.Vector3().crossVectors(w1q0, ip2);

                const angularStep = 0.0001;
                const e1q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), angularStep);
                const e2q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), angularStep);
                const e3q = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), angularStep);
                const q1t = q0.clone().premultiply(e1q).normalize();
                const q2t = q0.clone().premultiply(e2q).normalize();
                const q3t = q0.clone().premultiply(e3q).normalize();

                const northDev0 = Math.sin(this.computeCenterAngle(q0));
                const northDev1 = Math.sin(this.computeCenterAngle(q1t));
                const northDev2 = Math.sin(this.computeCenterAngle(q2t));
                const northDev3 = Math.sin(this.computeCenterAngle(q3t));
                const northVec = new THREE.Vector3().fromArray(Vec.normalize([northDev1-northDev0, northDev2-northDev0, northDev3-northDev0])).normalize();

                const rotationVector = new THREE.Vector3(q0.x, q0.y, q0.z)
                    .normalize().multiplyScalar(2 * Math.acos(q0.w));
                const world0 = new THREE.Vector3().fromArray(this.inverseProject([0, 0])).applyQuaternion(q0.clone().invert()).normalize();
                const e3 = new THREE.Vector3(0, 0, 1);
                const worldNorth = e3.clone().sub(world0.clone().multiplyScalar(e3.dot(world0))).normalize();
                const northVec2 = worldNorth.applyQuaternion(q0);
                // console.log('1', northVec);
                // console.log('21', rotationVector);
                // console.log('22', centerWorld);
                console.log('2', northVec2);
                // console.log(q0, new THREE.Quaternion().setFromAxisAngle(rotationVector.clone().normalize(), rotationVector.length()));

                // Project omega onto the plane orthogonal to northVec to preserve north-up
                const omegaNorthComp = omega.clone().dot(northVec) * northVec.lengthSq();
                const omegaConstrained = omega.clone().sub(northVec.clone().multiplyScalar(omegaNorthComp));

                const angle = Math.min(Math.max(1.0*omegaConstrained.length(), 0.0001), 0.02);

                const worldDeltaQ = new THREE.Quaternion().setFromAxisAngle(omegaConstrained.normalize(), angle);

                this.rotation.premultiply(worldDeltaQ).normalize();
            }
            // this.orientNorth(1000);
            // this.rotation.copy(clampQuaternionDistance(originalRotation, this.rotation, 0.2));
        }

        if (method === 4) {
            // R_old^{-1} proj^{-1} pointer_start = R_new^{-1} proj^{-1} pointer_end
            // Therefore R_new R_old^{-1} proj^{-1} pointer_start = proj^{-1} pointer_end
            const m3 = new THREE.Matrix3().setFromMatrix4(
                new THREE.Matrix4().makeRotationFromQuaternion(this.rotation)
            );
            const m3t = m3.clone().transpose();
            const w1 = new THREE.Vector3(...this.inverseProject([x1, -y1])).applyMatrix3(m3t).normalize();
            const ip2 = new THREE.Vector3(...this.inverseProject([x2, -y2])).normalize();
            // We want this.rotation w1 = ip2

            for (let iter = 0; iter < 10; iter++) {
                const rx = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), this.phi);
                const rz = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(-1, 0, 0), this.theta);
                const r = rz.clone().multiply(rx);
                const p = w1.clone().applyQuaternion(r);
                this.rotation = r;
                this.rotation.normalize();

                // Derivative with respect to phi
                const v = w1.clone().applyQuaternion(rx);
                const dp_dphi = new THREE.Vector3(0, 0, 1).cross(v).applyQuaternion(rz);
                
                // Derivative with respect to theta
                const dp_dtheta = new THREE.Vector3(-1, 0, 0).cross(p);

                // We want r_new w1 = ip2
                const dir = ip2.clone().sub(p);
                const dPhi = 0.5 * dir.dot(dp_dphi) / dp_dphi.lengthSq();
                const dTheta = 0.5 * dir.dot(dp_dtheta) / dp_dtheta.lengthSq();
                this.phi += dPhi;
                this.theta = clamp(this.theta+dTheta, 0, Math.PI);
            }

            this.recomputeRotation();
        }


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