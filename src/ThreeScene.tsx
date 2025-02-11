import React, { useEffect, useRef } from 'react';
import { MainScene } from './sceneMain';
import { InputListener } from './inputListener';
import { clamp } from './astro/mathTools';
import { cst } from './astro/constants';

const SceneComponent: React.FC = () => { 
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("useEffect: ", containerRef.current);
        const scene = new MainScene(containerRef.current!);

        const handler = new InputListener(containerRef.current!, {
            mouse: {
                drag: (x, y, dx, dy, buttons) => { 
                    const newPhi = (scene.params.viewDirection.phi + 0.01*dx) % cst.TAU;
                    const newTheta = clamp(scene.params.viewDirection.theta - 0.01*dy, 0, Math.PI);
                    scene.params.setView({ viewDirection: { phi: newPhi, theta: newTheta } });
                },
                wheel: (x, y, delta) => {
                    scene.params.setView({ focalLength: clamp(scene.params.focalLength/delta, 0.1, 10.0) });
                },
                down: (x, y, button) => {},
            },
            touch: {
                start: (x, y) => {},
                dragSingle: (x, y, dx, dy) => {
                    const newPhi = (scene.params.viewDirection.phi + 0.01*dx) % cst.TAU;
                    const newTheta = clamp(scene.params.viewDirection.theta - 0.01*dy, 0, Math.PI);
                    scene.params.setView({ viewDirection: { phi: newPhi, theta: newTheta } });
                },
                dragPair: (_x, _y, dx, dy, scale, angle) => {
                    scene.params.setView({ focalLength: clamp(scene.params.focalLength/scale, 0.1, 10.0) });
                },
            },
            keyboard: {
                keydown: (params) => { 
                    if (params.key.toUpperCase() === "T") 
                        console.log("TEST");
                },
            },
        });

        return () => {
            scene.cleanUp();
            handler.cleanup();
        };
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default SceneComponent;