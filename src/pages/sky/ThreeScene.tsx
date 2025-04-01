import React, { useEffect, useRef } from 'react';
import { MainScene } from './sceneMain';
import { InputListener } from '../../inputListener';
import { clamp } from '../../astro/mathTools';
import { cst } from '../../astro/constants';

const SceneComponent: React.FC = () => { 
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("useEffect: ", containerRef.current);
        const scene = new MainScene(containerRef.current!);

        const handler = new InputListener(containerRef.current!, {
            mouse: {
                drag: (args) => { 
                    const newPhi = (scene.params.viewDirection.phi + 0.01*args.dx) % cst.TAU;
                    const newTheta = clamp(scene.params.viewDirection.theta - 0.01*args.dy, 0, Math.PI);
                    scene.params.setView({ viewDirection: { phi: newPhi, theta: newTheta } });
                },
                down: (args) => {},
            },
            wheel: {
                zoom: (args) => scene.params.setView({ focalLength: clamp(scene.params.focalLength/(1.0+0.001*args.delta), 0.1, 10.0) }),
                pan: (args) => {},
            },
            touch: {
                start: (args) => {},
                dragSingle: (args) => {
                    const newPhi = (scene.params.viewDirection.phi + 0.01*args.dx) % cst.TAU;
                    const newTheta = clamp(scene.params.viewDirection.theta - 0.01*args.dy, 0, Math.PI);
                    scene.params.setView({ viewDirection: { phi: newPhi, theta: newTheta } });
                },
                dragPair: (args) => {
                    scene.params.setView({ focalLength: clamp(scene.params.focalLength/args.scale, 0.1, 10.0) });
                },
            },
            keyboard: {
                keydown: (args) => { 
                    if (args.key.toUpperCase() === "T") 
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