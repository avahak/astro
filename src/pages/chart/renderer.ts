import * as THREE from 'three';
import { TextGroup } from '../../tools/primitives/textRender';
import { MCSDFFont } from '../../tools/primitives/font';
import { SharedResource } from '../../tools/graph/sharedResource';
import { GraphController } from './types';
import { SphereLocation } from './sphereLocation';

class GraphRenderer {
    container: HTMLDivElement;
    canvas: HTMLCanvasElement;
    canvasContext: CanvasRenderingContext2D;

    lastWidth: number;
    lastHeight: number;
    lastDpr: number;
    
    renderer: THREE.WebGLRenderer;

    camera: THREE.OrthographicCamera;
    scene: THREE.Scene;
    cleanupTasks: (() => void)[];
    controller!: GraphController;
    loc: SphereLocation;

    textGroup: TextGroup;               // this pool of text is redrawn every time
    animationFrameHandle: number = 0;


    constructor(container: HTMLDivElement, fonts: MCSDFFont[]) {
        this.container = container;
        this.cleanupTasks = [];
        this.renderer = SharedResource.acquire('webgl-renderer', () => new THREE.WebGLRenderer({ antialias: true, alpha: true }));

        this.canvas = document.createElement('canvas');
        this.canvas.style.display = 'block';
        this.canvasContext = this.canvas.getContext("2d", { willReadFrequently: false })!;
        container.appendChild(this.canvas);
        this.lastDpr = -1;
        this.lastWidth = -1;
        this.lastHeight = -1;

        this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
        this.camera.position.set(0, 0, 1);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        this.scene = new THREE.Scene();

        this.textGroup = new TextGroup(fonts[0]);
        this.scene.add(this.textGroup.getObject());

        this.loc = new SphereLocation();

        this.setupResize();
        this.setupController();
        this.resize();
    }

    resize() {
        const [clientWidth, clientHeight] = this.getResolution();
        const dpr = Math.min(window.devicePixelRatio, 2);

        if (clientWidth === 0 || clientHeight === 0)
            return;
        if (this.lastWidth === clientWidth && this.lastHeight === clientHeight && this.lastDpr === dpr) 
            return;

        this.lastDpr = dpr;
        this.lastWidth = clientWidth;
        this.lastHeight = clientHeight;

        this.canvas.width = clientWidth * dpr;
        this.canvas.height = clientHeight * dpr;
        this.canvas.style.width = `${clientWidth}px`;
        this.canvas.style.height = `${clientHeight}px`;

        const aspect = clientWidth / clientHeight;
        this.camera.left = -aspect;
        this.camera.right = aspect;
        this.camera.updateProjectionMatrix();

        console.log('Resize', clientWidth, clientHeight);
        this.controller.update();
    }

    setupResize() {
        const resizeObserver = new ResizeObserver(() => this.resize());
        resizeObserver.observe(this.container);
        this.cleanupTasks.push(() => resizeObserver.disconnect());
    }

    getResolution(): number[] {
        return [this.container.clientWidth, this.container.clientHeight];
    }

    setupController() {
        const renderer = this;
        this.controller = {
            transform(x: number, y: number, dx: number, dy: number, scale: number, angle: number) {
                // renderer.loc.transform(x, y, dx, dy, scale, angle);
                renderer.requestRender();
            },
            setLocation(x: number, y: number, scale: number) {
                // renderer.loc.setLocation(x, y, scale, scale);
                renderer.requestRender();
            },
            update() {
                renderer.requestRender();
            },
        }
    }

    getController(): GraphController {
        return this.controller;
    }

    dispose() {
        if (this.animationFrameHandle)
            cancelAnimationFrame(this.animationFrameHandle);
        this.textGroup.dispose();
        for (const task of this.cleanupTasks)
            task();
        this.cleanupTasks = [];
        this.container.removeChild(this.canvas);
        this.canvas.width = 1;
        this.canvas.height = 1;
        SharedResource.release('webgl-renderer');
    }

    render() {
        // console.log('GraphRenderer.render()', Math.random());
        const [width, height] = this.getResolution();

        if (this.renderer.domElement.width !== width || this.renderer.domElement.height !== height)
            this.renderer.setSize(width, height);
        if (this.renderer.pixelRatio !== this.lastDpr)
            this.renderer.setPixelRatio(this.lastDpr);
        this.renderer.render(this.scene, this.camera);
        this.canvasContext.globalCompositeOperation = 'copy';
        this.canvasContext.drawImage(this.renderer.domElement, 0, 0);
        this.canvasContext.globalCompositeOperation = 'source-over';    // back to default

        this.textGroup.reset();
    }

    requestRender() {
        if (!this.animationFrameHandle) {
            this.animationFrameHandle = requestAnimationFrame(() => {
                this.render();
                this.animationFrameHandle = 0;
            });
        }
    }

    setIsVisible(groupName: string, value: boolean) {
        this.scene.traverse((object) => {
            if (object.userData.groupName === groupName)
                object.visible = value;
        });
        this.requestRender();
    }
}

export { GraphRenderer };