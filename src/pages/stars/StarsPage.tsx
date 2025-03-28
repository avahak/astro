import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { StarsScene } from './sceneStars';
import { VSOP87AEphemeris } from "../../astro/ephemeris/json87aEphemeris";
import { MPP02Ephemeris } from "../../astro/ephemeris/mpp02Ephemeris";
import pako from 'pako';

const SceneComponent: React.FC = () => { 
    const containerRef = useRef<HTMLDivElement>(null);
    const [vsop87a, setVSOP87A] = useState<VSOP87AEphemeris|null>(null);
    const [mpp02, setMPP02] = useState<MPP02Ephemeris|null>(null);
    const [astro, setAstro] = useState<any>(null);

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

    useEffect(() => {
        console.log("useEffect: ", containerRef.current);
        const scene = new StarsScene(containerRef.current!);
        const controller = new AbortController();

        const processVSOP87A = (data: any) => setVSOP87A(new VSOP87AEphemeris(data));
        const processMPP02 = (data: any) => setMPP02(new MPP02Ephemeris(data));
        const processAstro = (data: any) => setAstro(data);
        loadData('vsop87a_truncated_medium.json.gz', processVSOP87A, controller);
        loadData('mpp02_llr_truncated_medium.json.gz', processMPP02, controller);
        loadData('astro.json.gz', processAstro, controller);

        return () => {
            controller.abort();
            scene.cleanUp();
        };
    }, []);

    console.log(vsop87a);
    console.log(mpp02);
    console.log(astro);

    return (
        <Box style={{ width: "100%", height: "600px" }}>
            <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
        </Box>
    );
};

const StarsPage: React.FC = () => {
    return (
        <Container maxWidth="xl">
            <Box display="flex" justifyContent="center" sx={{py: 2}}>
                <Typography variant="h2">
                    Stars
                </Typography>
            </Box>
            <SceneComponent />
            <Box display="flex" justifyContent="center" sx={{py: 2}}>
                <Typography>
                    Text here
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <MUILink component={RouterLink} to="/" variant="body1" color="primary">
                    Back
                </MUILink>
            </Box>
        </Container>
    );
}

export { StarsPage };