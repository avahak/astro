import * as THREE from 'three';
import { SharedResource } from '../../tools/graph/sharedResource';
import { SphereLocation } from './sphereLocation';
import { ChartScene } from './chartScene';
import { ChartController } from './types';

class ChartRenderer {
    container: HTMLDivElement;
    canvas: HTMLCanvasElement;
    canvasContext: CanvasRenderingContext2D;

    lastWidth: number;
    lastHeight: number;
    lastDpr: number;
    
    renderer: THREE.WebGLRenderer;

    camera: THREE.OrthographicCamera;
    cleanupTasks: (() => void)[];

    animationFrameHandle: number = 0;

    controller!: ChartController;

    chartScene: ChartScene;


    constructor(container: HTMLDivElement, chartScene: ChartScene) {
        this.container = container;
        this.chartScene = chartScene;
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

        this.chartScene.resize(clientWidth, clientHeight);
        this.controller.update();

        console.log('Resize', clientWidth, clientHeight);
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
                const [width, height] = renderer.getResolution();
                renderer.chartScene.loc.transform(x, y, dx, dy, scale, angle, width, height);
                renderer.chartScene.needsUpdate = true;
                renderer.requestRender();
            },
            setLocation(phi: number, theta: number, scale: number) {
                renderer.chartScene.loc.setLocation(phi, theta, scale);
                renderer.chartScene.needsUpdate = true;
                renderer.requestRender();
            },
            update() {
                renderer.chartScene.needsUpdate = true;
                renderer.requestRender();
            },
        }
    }

    getController(): ChartController {
        return this.controller;
    }

    dispose() {
        console.log("dispose 1");
        if (this.animationFrameHandle)
            cancelAnimationFrame(this.animationFrameHandle);
        console.log("dispose 2");
        this.chartScene.dispose();
        for (const task of this.cleanupTasks)
            task();
        this.cleanupTasks = [];
        this.container.removeChild(this.canvas);
        this.canvas.width = 1;
        this.canvas.height = 1;
        SharedResource.release('webgl-renderer');
        console.log("dispose 3");
    }

    render() {
        if (!this.chartScene.needsUpdate)
            return;
        const [width, height] = this.getResolution();
        if (!width || !height)      // Can happen when component is unmounted
            return;
        console.log('GraphRenderer.render()', width, height);

        if (this.renderer.domElement.width !== width || this.renderer.domElement.height !== height)
            this.renderer.setSize(width, height);
        if (this.renderer.pixelRatio !== this.lastDpr)
            this.renderer.setPixelRatio(this.lastDpr);

        this.chartScene.preRender();

        this.renderer.render(this.chartScene.scene, this.camera);
        this.canvasContext.globalCompositeOperation = 'copy';
        this.canvasContext.drawImage(this.renderer.domElement, 0, 0);
        this.canvasContext.globalCompositeOperation = 'source-over';    // back to default

        this.chartScene.postRender();
        this.requestRender();
    }

    requestRender() {
        if (!this.animationFrameHandle) {
            this.animationFrameHandle = requestAnimationFrame(() => {
                this.animationFrameHandle = 0;
                this.render();
            });
        }
    }
}

export { ChartRenderer };