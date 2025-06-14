import * as THREE from 'three';
import { StarsGroup } from "./starsGroup";
import { TextGroup } from '../../tools/primitives/textRender';
import { MCSDFFont } from '../../tools/primitives/font';
import { QuadGroup } from './quadGroup';
import { SphereLocation } from './sphereLocation';
import { SplineGroup } from './splineGroup';
import { MollweideProjection } from './mollweide';

class ChartScene {
    scene: THREE.Scene;
    starsGroup: StarsGroup;
    textGroup: TextGroup;
    quadGroup: QuadGroup;
    splineGroup: SplineGroup;

    mollweide: MollweideProjection;

    loc: SphereLocation;

    needsUpdate: boolean;
    
    constructor(astro: any, fonts: MCSDFFont[]) {
        this.scene = new THREE.Scene();

        this.mollweide = new MollweideProjection();

        // this.loc = new SphereLocation("GNOMONIC");
        // this.loc = new SphereLocation("STEREOGRAPHIC");
        // this.loc = new SphereLocation("MOLLWEIDE");
        this.loc = new SphereLocation("HAMMER");

        // console.log('(0,0)', this.loc.inverseProject([0, 0]));
        // console.log('(0.1,0)', this.loc.inverseProject([0.1, 0]));
        // console.log('(0,0.1)', this.loc.inverseProject([0, 0.1]));

        this.quadGroup = new QuadGroup(this, astro, () => { this.needsUpdate = true; });
        this.starsGroup = new StarsGroup(this, astro);
        this.splineGroup = new SplineGroup(this, astro);
        this.scene.add(this.quadGroup.mesh);
        this.scene.add(this.starsGroup.mesh);
        this.scene.add(this.splineGroup.group);

        // const cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        // const cubeMaterial = new THREE.MeshNormalMaterial();
        // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        // this.scene.add(cube);
        // const light = new THREE.AmbientLight();
        // this.scene.add(light);

        this.textGroup = new TextGroup(fonts[0]);
        this.scene.add(this.textGroup.getObject());
        this.needsUpdate = true;
    }

    dispose() {
        this.quadGroup.dispose();
        this.starsGroup.dispose();
        this.splineGroup.dispose();
        this.mollweide.dispose();
    }

    resize(width: number, height: number) {
        this.quadGroup.resize(width, height);
    }

    preRender() {
        // this.textGroup.addText(`${Math.random().toFixed(3)}`, [0.5, 0.5, 0], [1, 0.5, 0.2], [-1, -1], 0.5);
        // this.scene.setRotationFromQuaternion(loc.getRotation());
        // this.loc.theta += 0.001;
        // this.loc.phi += 0.0005/this.loc.scale;
        this.loc.orientNorth(0.001);

        const m3 = new THREE.Matrix3().setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(this.loc.rotation));
        this.starsGroup.shader.uniforms.rotation.value = m3;
        this.quadGroup.shader.uniforms.rotation.value = m3;
        this.splineGroup.setRotation(m3);

        this.starsGroup.shader.uniforms.focalLength.value = this.loc.scale;
        this.quadGroup.shader.uniforms.focalLength.value = this.loc.scale;
        this.splineGroup.setFocalLength(this.loc.scale);
    }

    postRender() {
        // this.starsGroup.mesh.visible = Math.round(performance.now()/1000) % 2 === 0;
        this.textGroup.reset();
        // this.needsUpdate = false;
    }
}

export { ChartScene };