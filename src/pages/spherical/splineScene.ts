import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { UCBSplineGroup } from './UCBSpline';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

function randomColor(k: number) {
    const f = (j: number) => 1 - Math.sin(Math.PI*2*j)**2;
    return [f(3*k+42), f(2*k+51), f(k+73)];
}

class SplineScene {
    container: HTMLDivElement;
    camera!: THREE.Camera;
    scene!: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    cleanUpTasks: (() => void)[];
    animationRequestID: number|null = null;
    lastTime: number = 0;
    gui: any;
    isStopped: boolean = false;
    controls!: OrbitControls;

    splineGroup!: UCBSplineGroup;
    splineObject!: THREE.Object3D;

    constructor(container: HTMLDivElement) {
        this.container = container;
        this.cleanUpTasks = [];
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setClearColor(0x000000, 0);
        container.appendChild(this.renderer.domElement);

        this.renderer.getContext().getExtension('EXT_float_blend');

        this.setupCamera();
        this.setupScene();
        this.setupResizeRenderer();
        this.resizeRenderer();
        this.createGUI();

        this.cleanUpTasks.push(() => { 
            if (this.animationRequestID)
                cancelAnimationFrame(this.animationRequestID);
            this.splineGroup.dispose();
        });
        this.animate = this.animate.bind(this);
        this.animate();
    }

    resizeRenderer() {
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        const { clientWidth, clientHeight } = this.container;
        console.log(`Resize! (${clientWidth}, ${clientHeight})`);
        this.renderer.setSize(clientWidth, clientHeight);
        const aspect = clientWidth / clientHeight;
        if (this.camera instanceof THREE.PerspectiveCamera) {
            this.camera.aspect = aspect;
            this.camera.updateProjectionMatrix();
        }
        // this.shader.uniforms.resolution.value = new THREE.Vector2(clientWidth, clientHeight);
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
        this.gui = new GUI({ container: this.container });
        this.container.style.position = 'relative';
        this.gui.domElement.style.position = 'absolute';
        this.gui.domElement.style.top = '0px';
        this.gui.domElement.style.right = '0px';
        const animateButton = () => {
            const temp = this.isStopped;
            this.isStopped = false;
            this.animateStep();
            this.isStopped = temp;
        }
        const toggleStop = () => { 
            this.isStopped = !this.isStopped;
        };
        const myObject = {
            animateButton,
            toggleStop,
        };
        this.gui.add(myObject, 'animateButton').name('Animate step');
        this.gui.add(myObject, 'toggleStop').name('Toggle stop/play');
        this.gui.close();
    }

    dispose() {
        this.container.removeChild(this.renderer.domElement);
        for (const task of this.cleanUpTasks)
            task();
        this.renderer.dispose();

        this.gui.destroy();
    }

    setupCamera() {
        this.camera = new THREE.PerspectiveCamera();

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.camera.position.set(0, 0.2, 3.0);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.controls.update();
    }

    fillSplineGroup() {
        const pList = [];
        const cList: any = [];
        const scale = 21.9;
        for (let k = 0; k < 20000; k++) {
            const col = [0.5*Math.random(), 0.5*Math.random(), 0.5+0.5*Math.random()];
            // const col = [1, 1, 1];
            cList.push(col);
            const p = [Math.random()-0.5, Math.random()-0.5, Math.random()-0.5];
            const c = 20.0;
            // const p = [Math.cos(0.001*c*k)+0.4*Math.cos(0.1*c*k), Math.sin(0.001*c*k)+0.4*Math.sin(0.1*c*k), 0.2*Math.sin(0.31*c*k)];
            pList.push(new THREE.Vector3(2*scale*p[0], 2*scale*p[1], 2*scale*p[2]));
        }
        this.splineGroup.addSpline(pList, (j) => cList[j], false);
    }

    setupScene() {
        this.scene = new THREE.Scene();

        this.splineGroup = new UCBSplineGroup(32);
        this.fillSplineGroup();

        this.splineObject = this.splineGroup.getObject();
        this.splineObject.setRotationFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI/2);
        this.scene.add(this.splineObject);
    }

    getResolution() {
        const { clientWidth, clientHeight } = this.container;
        return new THREE.Vector2(clientWidth, clientHeight);
    }

    animate() {
        this.animationRequestID = requestAnimationFrame(this.animate);
        this.animateStep();
    }

    animateStep() {
        const currentTime = (this.lastTime ?? 0.0) + (this.isStopped ? 0.0 : 1.0);
        this.lastTime = currentTime;

        const t = this.lastTime*0.0002;

        // this.splineObject.setRotationFromEuler(new THREE.Euler(0, 0, 1.0+5.0*t));
        this.splineObject.setRotationFromEuler(new THREE.Euler(0.5*Math.sin(31*t), 0.5*Math.cos(29*t), 15*t));

        this.renderer.render(this.scene, this.camera);
    }
}

export { SplineScene };