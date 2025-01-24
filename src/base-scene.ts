import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import vsGeneric from './shaders/vsGeneric.glsl?raw';
import fs from './shaders/fs.glsl?raw';

class BaseScene {
    container: HTMLDivElement;
    scene: THREE.Scene;
    camera: THREE.Camera;
    renderer: THREE.WebGLRenderer;
    cleanUpTasks: (() => void)[];
    animationRequestID: number|null = null;
    lastTime: number|null = null;
    gui: any;
    isStopped: boolean = false;

    shader!: THREE.ShaderMaterial;

    constructor(container: HTMLDivElement) {
        this.container = container;
        this.cleanUpTasks = [];
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setClearColor(0x000000, 0);
        container.appendChild(this.renderer.domElement);

        this.scene = this.setupScene();
        this.camera = this.setupCamera();
        
        this.setupResizeRenderer();
        this.resizeRenderer();

        this.createGUI();

        this.cleanUpTasks.push(() => { 
            if (this.animationRequestID)
                cancelAnimationFrame(this.animationRequestID);
        });
        this.animate = this.animate.bind(this);
        this.animate();
    }

    resizeRenderer() {
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        const { clientWidth, clientHeight } = this.container;
        console.log(`Resize! (${clientWidth}, ${clientHeight})`);
        this.renderer.setSize(clientWidth, clientHeight);
        if (this.camera instanceof THREE.PerspectiveCamera) {
            this.camera.aspect = clientWidth / clientHeight;
            this.camera.updateProjectionMatrix();
        }
        this.shader!.uniforms.resolution.value = this.getResolution();
    }

    setupResizeRenderer() {
        // Create a ResizeObserver to monitor the container's size
        const resizeObserver = new ResizeObserver(() => {
            this.resizeRenderer();
        });
        resizeObserver.observe(this.container);
        this.cleanUpTasks.push(() => resizeObserver.unobserve(this.container));
        this.resizeRenderer();
    }

    createGUI() {
        this.gui = new GUI();
        const animateButton = () => this.animateStep(false);
        const toggleStop = () => { 
            this.isStopped = !this.isStopped;
        };
        const myObject = {
            animateButton,
            toggleStop,
        };
        this.gui.add(myObject, 'animateButton').name("Animate step");
        this.gui.add(myObject, 'toggleStop').name("Toggle stop/play");
        this.gui.close();
    }

    cleanUp() {
        this.container.removeChild(this.renderer.domElement);
        for (const task of this.cleanUpTasks)
            task();
        this.renderer.dispose();

        this.gui.destroy();

        // Should dispose a lot here: 
        // https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects
        // https://discourse.threejs.org/t/when-to-dispose-how-to-completely-clean-up-a-three-js-scene/1549/24
    }

    setupScene() {
        const scene = new THREE.Scene();

        // const axesHelper = new THREE.AxesHelper(5);
        // scene.add(axesHelper);

        const light = new THREE.PointLight(0xffffff, 200, 0);
        light.position.set(0, 50, 0);
        scene.add(new THREE.AmbientLight(0xddeeff, 0.8));
        scene.add(light);

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('/astro/klippad_sunrise_2_4k.webp');
        // const texture = textureLoader.load('/astro/klippad_sunrise_2_4k.png');
        texture.generateMipmaps = false;

        this.shader = new THREE.ShaderMaterial({
            uniforms: {
                terrain: { value: texture },
                resolution: { value: null },
            },
            vertexShader: vsGeneric,
            fragmentShader: fs,
            transparent: true,
        });
        const geometry = new THREE.PlaneGeometry(2, 2);
        let mesh = new THREE.Mesh(geometry, this.shader);
        scene.add(mesh);

        // scene.rotateOnAxis(new THREE.Vector3(1, 0, 0), -Math.PI/2.0);   // just for camera angles

        return scene;
    }

    setupCamera() {
        const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
        const controls = new OrbitControls(camera, this.container);
        this.cleanUpTasks.push(() => controls.dispose());

        camera.position.set(1, 0, 1);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        return camera;
    }

    getResolution() {
        const { clientWidth, clientHeight } = this.container;
        return new THREE.Vector2(clientWidth, clientHeight);
    }

    animate() {
        this.animationRequestID = requestAnimationFrame(this.animate);
        this.animateStep(this.isStopped);
    }

    animateStep(isStopped: boolean) {
        const currentTime = (this.lastTime ?? 0.0) + (isStopped ? 0.0 : 0.002);
        this.lastTime = currentTime;

        if (!isStopped) {
            if (Math.random() < 0.01) {
                // console.log(unixFromJc(0.0));
                // const x = math.multiply(rotationMatrix(0, 0.5), [1, 2, 3]).valueOf();
                // console.log("0", x);
            }
        }
        
        this.renderer.render(this.scene, this.camera);
    }
}

export { BaseScene };