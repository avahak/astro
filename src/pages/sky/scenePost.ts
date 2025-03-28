import * as THREE from 'three';
import vsGeneric from '../../shaders/vsGeneric.glsl?raw';
import fsPost from '../../shaders/fsPost.glsl?raw';
import { MainScene } from './sceneMain';

class PostScene {
    mainScene: MainScene;
    scene: THREE.Scene;
    cleanUpTasks: (() => void)[];
    shader!: THREE.ShaderMaterial;

    constructor(mainScene: MainScene) {
        this.mainScene = mainScene;
        this.cleanUpTasks = [];

        this.scene = this.setupScene();
    }

    onResize() {
    }

    setupScene() {
        const scene = new THREE.Scene();

        this.shader = new THREE.ShaderMaterial({
            uniforms: {
                hdrTexture: { value: null },
            },
            vertexShader: vsGeneric,
            fragmentShader: fsPost,
            transparent: true,
        });
        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, this.shader);
        scene.add(mesh);

        return scene;
    }

    render(renderer: THREE.WebGLRenderer, camera: THREE.Camera) {
        this.shader.uniforms.hdrTexture.value = this.mainScene.hdrFbo.texture;
        renderer.setRenderTarget(null);
        renderer.render(this.scene, camera);
    }
}

export { PostScene };