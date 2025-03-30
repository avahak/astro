import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { SplineScene } from './splineScene';
import pako from 'pako';

const SplineSceneComponent: React.FC = () => { 
    const containerRef = useRef<HTMLDivElement>(null);
    const [astro, setAstro] = useState(null);
    
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
        console.log("useEffect1: ", containerRef.current);
        const controller = new AbortController();

        const processAstro = (data: any) => setAstro(data);
        loadData('astro.json.gz', processAstro, controller);

        return () => {
            controller.abort();
        };
    }, []);

    useEffect(() => {
        console.log("useEffect2: ", astro);
        if (!astro) 
            return;

        const scene = new SplineScene(containerRef.current!, astro);
        return () => {
            scene.dispose();
        };
    }, [astro]);

    return (
        <Box style={{ width: "100%", height: "600px" }}>
            <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
        </Box>
    );
};

const SphericalPage: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Box display="flex" justifyContent="center" sx={{py: 2}}>
                <Typography variant="h2">
                    Rendering tools
                </Typography>
            </Box>
            <Box sx={{ width: "100%", height: "100%" }}>
                <SplineSceneComponent />
            </Box>
            <Box>
                <Typography sx={{my: 2}}>
                    Text
                </Typography>
            </Box>
            <Box>
                <MUILink component={RouterLink} to="/" variant="body1" color="primary">
                    Back
                </MUILink>
            </Box>
        </Container>
    );
};

export { SphericalPage };