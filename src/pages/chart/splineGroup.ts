import * as THREE from 'three';
import vsSpline from './shaders/vsSpline.glsl?raw';
import fsSpline from './shaders/fsSpline.glsl?raw';
import { UCBSplineGroup } from './UCBSpline';
import { Constellations } from '../../constellations/precompute';
import { ChartScene } from './chartScene';

class SplineGroup {
    chartScene: ChartScene;

    constellationSplines: UCBSplineGroup;
    group: THREE.Group;

    constructor(chartScene: ChartScene, astro: any) {
        this.chartScene = chartScene;
        
        this.constellationSplines = new UCBSplineGroup(chartScene, 16);
        this.createConstellationSplines(astro);

        this.group = new THREE.Group();
        this.group.add(this.constellationSplines.mesh);
    }

    createConstellationSplines(astro: any) {
        for (const [abbr, con] of Object.entries<any>(astro.constellations)) {
            // if (abbr != 'AND')
            //     continue;
            if (!con.boundary_1875)
                continue;
            for (const [k, q1] of con.boundary_1875.entries()) {
                const pList = [];
                const q2 = con.boundary_1875[(k+1) % con.boundary_1875.length];
                for (let j = 0; j < 4; j++) {
                    const t = j / 3;
                    let dq = [q2[0]-q1[0], q2[1]-q1[1]];
                    if (dq[0] > Math.PI)
                        dq[0] -= 2.0*Math.PI;
                    if (dq[0] < -Math.PI)
                        dq[0] += 2.0*Math.PI;
                    const q = [q1[0] + t*dq[0], q1[1] + t*dq[1]];
                    const p = new THREE.Vector3(
                        Math.cos(q[1])*Math.cos(q[0]),
                        Math.cos(q[1])*Math.sin(q[0]),
                        Math.sin(q[1])
                    );
                    pList.push(p);
                }
                this.constellationSplines.addInterpolatingSpline(pList, (k) => [1, 1, 1]);
            }
        }
    }

    setRotation(m3: THREE.Matrix3) {
        const mp3 = new THREE.Matrix3().multiplyMatrices(m3, new THREE.Matrix3().fromArray(Constellations.PRECESSION_MATRIX.flat()));
        this.constellationSplines.shader.uniforms.rotation.value = mp3;
    }

    setFocalLength(focalLength: number) {
        this.constellationSplines.shader.uniforms.focalLength.value = focalLength;
    }

    dispose() {
        this.constellationSplines.dispose();
    }
}


export { SplineGroup };