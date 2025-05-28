import * as THREE from 'three';
import { Constellations } from '../../constellations/precompute';
import sCommon from './shaders/sCommon.glsl?raw';
import vsQuad from './shaders/vsQuad.glsl?raw';
import fsQuad from './shaders/fsQuad.glsl?raw';
import { precessionMatrix } from '../../astro/precession';
import * as math from 'mathjs';
import { SphereLocation } from './sphereLocation';
import { ChartScene } from './chartScene';

class QuadGroup {
    chartScene: ChartScene;

    cubeTexture: THREE.CubeTexture;
    shader: THREE.ShaderMaterial;

    constellations!: Constellations;

    mesh: THREE.Mesh;

    constructor(chartScene: ChartScene, astro: any, onLoad: () => void) {
        this.chartScene = chartScene;
        
        const loader = new THREE.CubeTextureLoader();
        // Careful here, lots of flipping
        // this.cubeTexture = loader.load([
        //     '/astro/celestial_sphere/posx.jpg',
        //     '/astro/celestial_sphere/negx.jpg',
        //     '/astro/celestial_sphere/posy.jpg',        // flipped!
        //     '/astro/celestial_sphere/negy.jpg',        // flipped!
        //     '/astro/celestial_sphere/posz.jpg',
        //     '/astro/celestial_sphere/negz.jpg',
        // ]);
        this.cubeTexture = loader.load([
            '/astro/posx.jpg',
            '/astro/negx.jpg',
            '/astro/posy.jpg',        // flipped!
            '/astro/negy.jpg',        // flipped!
            '/astro/posz.jpg',
            '/astro/negz.jpg',
        ], () => onLoad());
        this.cubeTexture.colorSpace = THREE.LinearSRGBColorSpace;
        // this.cubeTexture.colorSpace = THREE.SRGBColorSpace;
        // this.cubeTexture.flipY = true;       // flipped!

        this.constellations = new Constellations(astro, onLoad);

        this.shader = new THREE.ShaderMaterial({
            defines: this.chartScene.loc.projectionDefines,
            uniforms: {
                mollweideTexture: { value: this.chartScene.mollweide.texture },
                
                raTexture: { value: this.constellations.raTexture },
                deTexture: { value: this.constellations.deTexture },
                conTexture: { value: this.constellations.conTexture },
                size: { value: this.constellations.size },
                conMatrix: { value: new THREE.Matrix3().fromArray(Constellations.PRECESSION_MATRIX_T.flat()) },

                focalLength: { value: null },
                cubeTexture: { value: this.cubeTexture },
                rotation: { value: null },
            },
            vertexShader: sCommon + '\n' + vsQuad,
            fragmentShader: sCommon + '\n' + fsQuad,
            transparent: true,
        });

        const quadGeometry = new THREE.PlaneGeometry(2, 2);
        
        this.mesh = new THREE.Mesh(quadGeometry, this.shader);
        this.mesh.frustumCulled = false;
    }

    resize(width: number, height: number) {
        const aspect = width / height;
        this.mesh.geometry.dispose();
        const newGeometry = new THREE.PlaneGeometry(2*aspect, 2);
        this.mesh.geometry = newGeometry;
    }

    dispose() {
        this.constellations.dispose();
        this.mesh.geometry.dispose();
        this.cubeTexture.dispose();
        this.shader.dispose();
    }
}


export { QuadGroup };