import * as THREE from 'three';
import vsGeneric from '../../shaders/vsGeneric.glsl?raw';
import fsEarth from '../../shaders/fsEarth.glsl?raw';
import { planetPosition } from '../../astro/ephemeris/orbitalElements';
import * as math from 'mathjs';
import { cst } from '../../astro/constants';
import { clamp } from '../../astro/math/mathTools';
import { MainScene } from './sceneMain';
import { Vec } from '../../astro/math/vec';

function computeTerrainLight(p: number[]): number {
    return clamp(2*p[2]/Vec.norm(p), 0.1, 1);
}

class EarthScene {
    scene: THREE.Scene;
    mainScene: MainScene;
    cleanUpTasks: (() => void)[];

    shader!: THREE.ShaderMaterial;

    constructor(mainScene: MainScene) {
        this.mainScene = mainScene;
        this.cleanUpTasks = [];

        this.scene = this.setupScene();
    }

    onResize() {
        this.shader!.uniforms.resolution.value = this.mainScene.getResolution();
    }

    setupScene() {
        const scene = new THREE.Scene();

        const textureLoader = new THREE.TextureLoader();
        const textureTerrain = textureLoader.load('/astro/klippad_sunrise_2_4k.webp');
        // const textureTerrain = textureLoader.load('/astro/klippad_sunrise_2_4k.png');
        textureTerrain.colorSpace = THREE.SRGBColorSpace;
        textureTerrain.generateMipmaps = false;
        const textureDepth = textureLoader.load('/astro/depth.png');
        textureDepth.wrapS = THREE.ClampToEdgeWrapping;
        textureDepth.wrapT = THREE.ClampToEdgeWrapping;
        textureDepth.generateMipmaps = false;

        this.shader = new THREE.ShaderMaterial({
            uniforms: {
                terrain: { value: textureTerrain },
                depthTexture: { value: textureDepth },
                pSun: { value: null },
                pMoon: { value: null },
                pJupiter: { value: null },
                resolution: { value: null },
                vDir: { value: null },
                vMat: { value: null },
                focalLength: { value: null },
                terrainLight: { value: null },

                radii: { value: null },
                scatterCoeff: { value: [Math.pow(500/700, 4), Math.pow(500/530, 4), Math.pow(500/440, 4)] },
            },
            vertexShader: vsGeneric,
            fragmentShader: fsEarth,
            transparent: true,
        });
        const geometry = new THREE.PlaneGeometry(2, 2);
        let mesh = new THREE.Mesh(geometry, this.shader);
        scene.add(mesh);

        return scene;
    }

    render(renderer: THREE.WebGLRenderer, camera: THREE.Camera) {

        this.shader!.uniforms.pSun.value = this.mainScene.params.pSun;
        this.shader!.uniforms.pMoon.value = this.mainScene.params.pMoon;
        this.shader!.uniforms.pJupiter.value = this.mainScene.params.pJupiter;
        this.shader!.uniforms.vDir.value = [this.mainScene.params.viewDirection.phi, this.mainScene.params.viewDirection.theta];
        this.shader!.uniforms.vMat.value = this.mainScene.params.viewMatrix;
        this.shader!.uniforms.focalLength.value = this.mainScene.params.focalLength;
        this.shader!.uniforms.terrainLight.value = computeTerrainLight(this.mainScene.params.pSun);

        this.shader!.uniforms.radii.value = [1, 1.002, 1.0001];
        // this.shader!.uniforms.radii.value = [1, 1.025, 1.001];
        // this.shader!.uniforms.radii.value = [1, 1.01, 1.001];
        // this.shader!.uniforms.radii.value = [1, 1.5, 1.2];
        
        renderer.setRenderTarget(this.mainScene.hdrFbo);
        renderer.render(this.scene, camera);
        renderer.setRenderTarget(null);
    }
}

export { EarthScene };