import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import vsGeneric from './shaders/vsGeneric.glsl?raw';
import fs from './shaders/fs.glsl?raw';
import { planetPosition } from './astro/orbital-elements';
import { earthPosition, moonPosition } from './astro/earth';
import * as math from 'mathjs';
import { horizontalFromGCRS } from './astro/frames';
import { cst } from './astro/constants';
import { rotationMatrix } from './astro/math-tools';

type ViewDirection = {
    phi: number;        // azimuthal angle on the xy-plane
    theta: number;      // signed angle from xy-plane
};

class BaseScene {
    container: HTMLDivElement;
    scene: THREE.Scene;
    camera: THREE.Camera;       // Note that this is static orthographic camera
    viewDirection: ViewDirection = { phi: 0, theta: Math.PI/2 };
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
        const info = () => { 
            alert(JSON.stringify({ 
                pSun: this.shader!.uniforms.pSun.value, 
                pMoon: this.shader!.uniforms.pMoon.value,
                mat: this.camera.matrixWorldInverse,
                viewDirection: this.viewDirection,
            }));
        };
        const myObject = {
            animateButton,
            toggleStop,
            info,
        };
        this.gui.add(myObject, 'animateButton').name("Animate step");
        this.gui.add(myObject, 'toggleStop').name("Toggle stop/play");
        this.gui.add(myObject, 'info').name("Info");
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
                pSun: { value: null },
                pMoon: { value: null },
                resolution: { value: null },
                vDir: { value: null },
                mDir: { value: null },
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
        const camera = new THREE.OrthographicCamera(-1, 1, -1, 1, 0.1, 1000);

        camera.position.set(0, 0, 1);
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
        const currentTime = (this.lastTime ?? 0.0) + (isStopped ? 0.0 : 1.0);
        this.lastTime = currentTime;

        const t = 0.2 + this.lastTime*0.0000001;
        const m = horizontalFromGCRS(cst.EARTH_LOC_DICT["Helsinki"], t);
        const pEarth = math.multiply(m, earthPosition(t)).valueOf();
        const pSun = math.multiply(pEarth, -1);
        const pMoon = math.multiply(m, planetPosition(301, t)!).valueOf();

        this.shader!.uniforms.pSun.value = pSun;
        this.shader!.uniforms.pMoon.value = pMoon;
        this.shader!.uniforms.vDir.value = [this.viewDirection.phi, this.viewDirection.theta];
        this.shader!.uniforms.mDir.value = math.transpose(math.multiply(rotationMatrix(1, this.viewDirection.phi), rotationMatrix(0, this.viewDirection.theta-Math.PI/2))).valueOf().flat();
        
        this.renderer.render(this.scene, this.camera);
    }
}

export { BaseScene };