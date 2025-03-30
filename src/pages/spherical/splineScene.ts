import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { UCBSplineGroup } from './UCBSpline';
import vsCons from './shaders/vsCons.glsl?raw';
import fsCons from './shaders/fsCons.glsl?raw';
import { Constellations } from '../../constellations/precompute';

function randomColor(k: number) {
    const f = (j: number) => 1 - Math.sin(j)**2;
    return [f(3*k+42), f(2*k+51), f(k+73)];
}

class SplineScene {
    container: HTMLDivElement;
    astro: any;
    camera!: THREE.OrthographicCamera;
    scene!: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    cleanUpTasks: (() => void)[];
    animationRequestID: number|null = null;
    lastTime: number = 0;
    gui: any;
    isStopped: boolean = false;

    constellations!: Constellations;
    shader!: THREE.ShaderMaterial;

    splineGroup!: UCBSplineGroup;
    splineObject!: THREE.Object3D;

    constructor(container: HTMLDivElement, astro: any) {
        this.container = container;
        this.astro = astro;
        this.cleanUpTasks = [];
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setClearColor(0x000000, 0);
        container.appendChild(this.renderer.domElement);

        this.renderer.getContext().getExtension('EXT_float_blend');

        this.setupCamera();
        this.setupScene();
        this.setupResizeRenderer();
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
        if (this.camera instanceof THREE.OrthographicCamera) {
            this.camera.left = -aspect;
            this.camera.right = aspect;
            this.camera.updateProjectionMatrix();
        }
        this.shader.uniforms.resolution.value = new THREE.Vector2(clientWidth, clientHeight);
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
        this.shader.dispose();

        this.gui.destroy();
    }

    setupCamera() {
        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);

        this.camera.position.set(0, 0, 0);
        this.camera.lookAt(new THREE.Vector3(0, 0, -1));
    }

    fillSplineGroup() {
        for (const [abbr, con] of Object.entries<any>(this.astro.constellations)) {
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
                this.splineGroup.addInterpolatingSpline(pList, (k) => [1, 1, 1]);
            }
        }
    }

    setupScene() {
        this.scene = new THREE.Scene();

        this.splineGroup = new UCBSplineGroup(32);
        this.fillSplineGroup();

        this.splineObject = this.splineGroup.getObject();
        // this.splineObject.setRotationFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI/2);
        this.scene.add(this.splineObject);

        this.constellations = new Constellations(this.astro);
        this.shader = new THREE.ShaderMaterial({
            uniforms: {
                raTexture: { value: this.constellations.raTexture },
                deTexture: { value: this.constellations.deTexture },
                conTexture: { value: this.constellations.conTexture },
                size: { value: this.constellations.size },
                resolution: { value: null },
                time: { value: 0 }
            },
            vertexShader: vsCons,
            fragmentShader: fsCons,
            transparent: true,
        });
        const geometry = new THREE.PlaneGeometry(2, 2);
        let mesh = new THREE.Mesh(geometry, this.shader);
        this.scene.add(mesh);
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
        this.shader.uniforms.time.value = currentTime;

        // this.splineObject.setRotationFromEuler(new THREE.Euler(0, 0, 0));
        // this.splineObject.setRotationFromEuler(new THREE.Euler(0, 0, 1.0+5.0*t));
        // this.scene.setRotationFromEuler(new THREE.Euler(0.2*Math.sin(31*t), 0.2*Math.cos(29*t), 15*t));
        this.camera.lookAt(new THREE.Vector3(Math.cos(31*t), Math.sin(29*t), -1.0))

        this.renderer.render(this.scene, this.camera);
    }
}

export { SplineScene };