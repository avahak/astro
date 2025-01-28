import React, { useEffect, useRef } from 'react';
import { BaseScene } from './base-scene';
import { InputListener } from './inputListener';
import { clamp } from './astro/math-tools';
import { cst } from './astro/constants';

const SceneComponent: React.FC = () => { 
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("useEffect: ", containerRef.current);
        const scene = new BaseScene(containerRef.current!);

        const handler = new InputListener(containerRef.current!, {
            mouse: {
                drag: (x, y, dx, dy, buttons) => { 
                    scene.viewDirection.phi = (scene.viewDirection.phi + 0.01*dx) % cst.TAU;
                    scene.viewDirection.theta = clamp(scene.viewDirection.theta - 0.01*dy, 0, Math.PI);
                },
                wheel: (x, y, delta) => {
                    scene.focalLength = clamp(scene.focalLength/delta, 0.1, 10.0);
                },
                down: (x, y, button) => {},
            },
            touch: {
                start: (x, y) => {},
                dragSingle: (x, y, dx, dy) => {
                    scene.viewDirection.phi = (scene.viewDirection.phi + 0.01*dx) % cst.TAU;
                    scene.viewDirection.theta = clamp(scene.viewDirection.theta - 0.01*dy, 0, Math.PI);
                },
                dragPair: (_x, _y, dx, dy, scale, angle) => {},
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