import React, { useEffect, useRef } from 'react';
import vsGeneric from './shaders/vsGeneric.glsl?raw';
import fs from './shaders/fs.glsl?raw';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const ThreeScene: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current)
            return;
        // Create a basic scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
        const controls = new OrbitControls(camera, containerRef.current!);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0);
        let requestID: number|null = null;
        let lastTime: number|null = null;

        const q = new THREE.Quaternion(1.0, 0.0, 0.0, 1).normalize();

        // Append renderer to the DOM
        containerRef.current!.appendChild(renderer.domElement);

        const light = new THREE.PointLight(0xffffff, 200, 0);
        light.position.set(0, 50, 0);
        scene.add(new THREE.AmbientLight(0xddeeff, 0.8));
        scene.add(light);

        camera.position.set(1, 0, 1);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        // const loader = new THREE.CubeTextureLoader();
        // const cubeTexture = loader.load([
        //     '/astro/posx.jpg',
        //     '/astro/negx.jpg',
        //     '/astro/negy.jpg',        // flipped!
        //     '/astro/posy.jpg',        // flipped!
        //     '/astro/posz.jpg',
        //     '/astro/negz.jpg',
        // ]);
        // cubeTexture.flipY = true;       // flipped!
        // scene.background = cubeTexture;

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('/astro/klippad_sunrise_2_4k.webp');
        // const texture = textureLoader.load('/astro/klippad_sunrise_2_4k.png');
        texture.generateMipmaps = false;

        let shader: THREE.ShaderMaterial = new THREE.ShaderMaterial({
            uniforms: {
                terrain: { value: texture },
                resolution: { value: null },
            },
            vertexShader: vsGeneric,
            fragmentShader: fs,
            transparent: true,
        });
        const geometry = new THREE.PlaneGeometry(2, 2);
        let mesh = new THREE.Mesh(geometry, shader);
        scene.add(mesh);

        // Resize handler
        const resizeRenderer = () => {
            if (!containerRef?.current)
                return;
            const { clientWidth, clientHeight } = containerRef.current;
            renderer.setSize(clientWidth, clientHeight);
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
        };
        // Initial resize
        resizeRenderer();

        // Create a ResizeObserver to monitor the container's size
        const resizeObserver = new ResizeObserver(() => {
            resizeRenderer();
        });
        resizeObserver.observe(containerRef.current!);

        // const axesHelper = new THREE.AxesHelper(5);
        // scene.add(axesHelper);

        // Animation loop
        const animate = () => {
            requestID = requestAnimationFrame(animate);

            const currentTime = performance.now();
            const dt = lastTime ? Math.max(Math.min((currentTime-lastTime)/1000, 0.1), 0.0) : 0;
            lastTime = currentTime;

            renderer.render(scene, camera);
        };
        animate();

        // Cleanup on unmount
        return () => {
            if (containerRef.current)
                resizeObserver.unobserve(containerRef.current);
            containerRef.current?.removeChild(renderer.domElement);
            controls.dispose();
            if (requestID)
                cancelAnimationFrame(requestID);
            // Should dispose a lot more here: 
            // https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects
        };
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeScene;