// Compare with
// https://en.wikipedia.org/wiki/File:Planets_and_dwarf_planets%27_tilt_and_rotation_speed.webm

import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { matrixFromRotationalElements, rotationalElements } from '../../astro/ephemeris/rotationalElements';
import * as math from 'mathjs';
import { rotationMatrix } from '../../astro/mathTools';
import { cst } from '../../astro/constants';

const naifIds = [301, 199, 299, 399, 499, 599, 699, 799, 899];

class RotationScene {
    container: HTMLDivElement;
    camera: THREE.Camera;
    scene!: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    cleanUpTasks: (() => void)[];
    animationRequestID: number|null = null;
    lastTime: number|null = null;
    gui: any;
    isStopped: boolean = false;
    objects!: THREE.Group[];

    constructor(container: HTMLDivElement) {
        this.container = container;
        this.cleanUpTasks = [];
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setClearColor(0x000000, 0);
        container.appendChild(this.renderer.domElement);

        this.renderer.getContext().getExtension('EXT_float_blend');

        this.camera = this.setupCamera();
        
        this.setupResizeRenderer();
        this.resizeRenderer();
        this.setupScene();

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
        if (this.camera instanceof THREE.OrthographicCamera) {
            const aspect = clientWidth / clientHeight;
            const frustumHeight = this.camera.top - this.camera.bottom;
            this.camera.left = -frustumHeight * aspect / 2;
            this.camera.right = frustumHeight * aspect / 2;
            this.camera.updateProjectionMatrix();
        }
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
        const animateButton = () => this.animateStep();
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
    }

    setupCamera() {
        const camera = new THREE.OrthographicCamera(-1, 1, -1, 1, 0.1, 1000);

        camera.position.set(1, 0, 0);
        camera.up.set(0, 0, -1);    // sign to account for pixel y vs math y discrepancy
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        return camera;
    }

    setupScene() {
        this.scene = new THREE.Scene();

        const light = new THREE.AmbientLight(0xffffff, 2.0);
        this.scene.add(light);

        const textureLoader = new THREE.TextureLoader();

        this.objects = [];
        for (let k = 0; k < 9; k++) {
            const naifId = naifIds[k];
            const texture = textureLoader.load(`/astro/lowres_textures/${naifId}.jpg`);
            texture.colorSpace = THREE.SRGBColorSpace;
            texture.generateMipmaps = false;

            const axisGeometry = new THREE.CylinderGeometry(0.005, 0.005, 0.6); 
            const axisMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const axis = new THREE.Mesh(axisGeometry, axisMaterial);

            const geometry = new THREE.SphereGeometry(0.25, 64, 32, 0, Math.PI*2);
            const material = new THREE.MeshStandardMaterial({ map: texture });
            const cube = new THREE.Mesh(geometry, material);
            const group = new THREE.Group();
            group.add(cube);
            group.add(axis);
            const x = k % 3 - 1;
            const y = Math.trunc(k / 3) - 1;
            group.position.set(0, x*0.7, y*0.7);
            this.objects.push(group);
            this.scene.add(group);
        }
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
        if (this.isStopped)
            return;
        const currentTime = (this.lastTime ?? 0.0) + 1.0;
        this.lastTime = currentTime;

        const t = 0.25 + this.lastTime*0.0000002;

        for (const [k, obj] of this.objects.entries()) {
            const naifId = naifIds[k];
            const [ra, de, W] = rotationalElements(naifId, t);
            const mat = math.multiply(
                rotationMatrix(0, -23.44*cst.DEG), 
                matrixFromRotationalElements(ra, de, W),
                rotationMatrix(0, Math.PI/2),           // fix orientation of three.js coordinate system
            ).valueOf() as number[][];

            const m4 = new THREE.Matrix4().set(
                mat[0][0], mat[0][1], mat[0][2], 0,
                mat[1][0], mat[1][1], mat[1][2], 0,
                mat[2][0], mat[2][1], mat[2][2], 0,
                0, 0, 0, 1
            );
            obj.setRotationFromAxisAngle(new THREE.Vector3(-k, k%3, k%3).normalize(), t);
            obj.setRotationFromMatrix(m4);
        }

        this.renderer.render(this.scene, this.camera);
    }
}

export { RotationScene };