import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { planetPosition } from './astro/orbitalElements';
import { earthPosition, moonPosition } from './astro/earth';
import * as math from 'mathjs';
import { horizontalFromGCRS } from './astro/frames';
import { cst } from './astro/constants';
import { clamp, length, rotationMatrix } from './astro/mathTools';
import { jcFromUnix, unixFromJc, unixNow } from './astro/time';
import { EarthScene } from './sceneEarth';
import { PostScene } from './scenePost';
import { SpaceScene } from './sceneSpace';
import { SceneParameters } from './parameters';

function computeTerrainLight(p: number[]): number {
    return clamp(2*p[2]/length(p), 0.1, 1);
}

class MainScene {
    container: HTMLDivElement;
    camera: THREE.Camera;       // Note that this is static orthographic camera
    params: SceneParameters;
    renderer: THREE.WebGLRenderer;
    cleanUpTasks: (() => void)[];
    animationRequestID: number|null = null;
    lastTime: number|null = null;
    gui: any;
    isStopped: boolean = false;
    averageRenderTime: number = 0.0;

    hdrFbo!: THREE.WebGLRenderTarget;
    disposeFbos: () => void = () => {};

    spaceScene: SpaceScene;
    earthScene: EarthScene;
    postScene: PostScene;  

    constructor(container: HTMLDivElement) {
        this.container = container;
        this.cleanUpTasks = [];
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setClearColor(0x000000, 0);
        container.appendChild(this.renderer.domElement);

        this.renderer.getContext().getExtension('EXT_float_blend');

        this.params = new SceneParameters();
        this.spaceScene = new SpaceScene(this);
        this.earthScene = new EarthScene(this);
        this.postScene = new PostScene(this);

        this.camera = this.setupCamera();
        
        this.setupResizeRenderer();
        this.resizeRenderer();

        this.createGUI();

        this.cleanUpTasks.push(() => { 
            if (this.animationRequestID)
                cancelAnimationFrame(this.animationRequestID);
            this.disposeFbos();
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
        this.setupFbos();
        this.spaceScene.onResize();
        this.earthScene.onResize();
        this.postScene.onResize();
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

    setupFbos() {
        this.disposeFbos();
        this.hdrFbo = this.createRenderTarget();
        this.disposeFbos = () => this.hdrFbo.dispose();
    }

    createRenderTarget() {
        const { clientWidth, clientHeight } = this.container;
        const renderTarget = new THREE.WebGLRenderTarget(clientWidth, clientHeight, {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType
        });
        return renderTarget;
    }

    createGUI() {
        this.gui = new GUI();
        const animateButton = () => this.animateStep(false);
        const toggleStop = () => { 
            this.isStopped = !this.isStopped;
        };
        const info = () => { 
            console.log(this.params);
            alert(JSON.stringify(this.params));
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

        // const t = 0.19 + this.lastTime*0.00000005;
        const t = 0.1920 + this.lastTime/36525;
        // const t = jcFromUnix(unixNow());
        // const t = jcFromUnix(Date.UTC(2004, 0, 1, 0, 0, 0)/1000);
        // const t = jcFromUnix(Date.UTC(2004, 0, 1, 4, 21, 0)/1000);
        // console.log(t);
        this.params.setTimeAndOrLocation({ t: t });

        this.spaceScene.render(this.renderer, this.camera);
        this.earthScene.render(this.renderer, this.camera);
        this.postScene.render(this.renderer, this.camera);
    }
}

export { MainScene };