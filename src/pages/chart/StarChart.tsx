import pako from 'pako';
import { useEffect, useRef, useState } from "react";
import { ChartController, StarChartProps } from "./types";
import { MCSDFFont } from "../../tools/primitives/font";
import { VSOP87AEphemeris } from "../../astro/ephemeris/vsop87aEphemeris";
import { MPP02Ephemeris } from "../../astro/ephemeris/mpp02Ephemeris";
import { ChartScene } from './chartScene';
import { Box } from '@mui/material';
import { ChartRenderer } from './renderer';
import { InputListener, InputMapper } from '../../inputListener';

/**
 * Create an InputMapper that feeds transformations into the given GraphController.
 */
function inputConnection(gc: ChartController): InputMapper {
    return (
        {
            mouse: {
                drag: (args) => {
                    if ((args.buttons & 1) !== 0)
                        gc.transform(args.x, args.y, args.dx, args.dy, 1, 0);
                },
                down: (args) => {
                    // (args.button === 0) && setTooltipState(null);
                    // (args.button === 2) && setTooltipState({ x: args.x, y: args.y, isVisible: true });
                },
                // move: (args) => gc.transform(args.x, args.y, 0, 0, 1, 0),
            },
            wheel: {
                zoom: (args) => {
                    gc.transform(args.x, args.y, 0, 0, 1-0.001*args.delta, 0);
                    // setTooltipState(null);
                },
                pan: (args) => {
                    gc.transform(args.x, args.y, 0, 0, 1, 0);
                },
            },
            touch: {
                // start: (x, y) => scene.inputAction(x, y),
                dragSingle: (args) => {
                    gc.transform(args.x, args.y, args.dx, args.dy, 1, 0);
                    // setTooltipState(null);
                },
                dragPair: (args) => gc.transform(args.x, args.y, args.dx, args.dy, 1/args.scale, args.angle),
            },
            keyboard: {
                keydown: (args) => { 
                    if (args.key === "-") 
                        gc.transform(0, 0, 0, 0, 1.0/1.2, 0); 
                    if (args.key === "+") 
                        gc.transform(0, 0, 0, 0, 1.2, 0); 
                },
            },
            safariGesture: {
                change: (args) => gc.transform(0, 0, 0, 0, args.scale, args.angle),
            },
        }
    );
}

const StarChart: React.FC<StarChartProps> = ({ x }) => {
    const [fonts, setFonts] = useState<[MCSDFFont, MCSDFFont]|null>(null);
    const [vsop87a, setVSOP87A] = useState<VSOP87AEphemeris|null>(null);
    const [mpp02, setMPP02] = useState<MPP02Ephemeris|null>(null);
    const [astro, setAstro] = useState<any>(null);
    const containerRef = useRef<HTMLDivElement|null>(null);

    
    const loadData = async (fileName: string, process: (data: any) => void, controller: AbortController) => {
        console.log(`loadData, ${fileName}`);
        try {
            const response = await fetch(`/astro/${fileName}`, { signal: controller.signal });
            if (!response.ok) {
                throw new Error('Failed to fetch file');
            }
            const contentType = response.headers.get('Content-Type');
            console.log('contentType', contentType);
            if (contentType?.includes('application/json')) {
                // Data is in JSON format (decompressed)
                const jsonData = await response.json();
                process(jsonData);
            } else {
                // Assume the content is gzipped and needs decompression
                const blob = await response.blob();
                const arrayBuffer = await blob.arrayBuffer();
                
                const data = pako.inflate(new Uint8Array(arrayBuffer), { to: 'string' });
                process(JSON.parse(data));
            }
        } catch (error: any) {
            if (error.name === 'AbortError') 
                console.log(`Fetch request for ${fileName} was aborted.`);
            else
                console.error('Error loading data:', error);
        }
    };
    
    // Load astro and planet, moon ephemeris
    useEffect(() => {
        console.log('useEffect');
        const controller = new AbortController();
        
        const processVSOP87A = (data: any) => setVSOP87A(new VSOP87AEphemeris(data));
        const processMPP02 = (data: any) => setMPP02(new MPP02Ephemeris(data));
        loadData('ephemeris/vsop87a_truncated_medium.json.gz', processVSOP87A, controller);
        loadData('ephemeris/mpp02_llr_truncated_medium.json.gz', processMPP02, controller);
        
        const processAstro = (data: any) => setAstro(data);
        loadData('astro.json.gz', processAstro, controller);

        return () => {
            controller.abort();
        };
    }, []);

    // Load fonts
    useEffect(() => {
        console.log("useEffect loading fonts");

        const font1 = new MCSDFFont();
        const font2 = new MCSDFFont();
        let loadedCount = 0;

        const checkIfFontsReady = () => {
            if (loadedCount === 2)
                setFonts([font1, font2]);
        };

        font1.load('times64', () => {
            loadedCount++;
            checkIfFontsReady();
        });
        font2.load('consola64', () => {
            loadedCount++;
            checkIfFontsReady();
        });

        return () => {
            font1.dispose();
            font2.dispose();
        };
    }, []);

    // Create scene
    useEffect(() => {
        if (!astro || !fonts || !containerRef.current)
            return;

        const scene = new ChartScene(astro, fonts);
        const renderer = new ChartRenderer(containerRef.current, scene);

        const controller = renderer.getController();
        const inputHandler = new InputListener(containerRef.current, inputConnection(controller));

        renderer.requestRender();

        return () => {
            inputHandler.cleanup();
            renderer.dispose();
        }
    }, [astro, fonts, containerRef.current]);

    
    if (!vsop87a || !mpp02 || !astro || !fonts)
        return <></>;
    
    console.log('astro', astro);
    
    return (
        <Box ref={containerRef} width="100%" height="750px">
        </Box>    
    );
};

export { StarChart };   