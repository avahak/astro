import pako from 'pako';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { MPP02Ephemeris } from "../../astro/ephemeris/mpp02Ephemeris";
import { VSOP87AEphemeris } from "../../astro/ephemeris/vsop87aEphemeris";
import { starsGroup } from './starsGroup';

const StarChart: React.FC = () => {
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
    
    if (!vsop87a || !mpp02 || !astro)
        return <></>;
    
    console.log('astro', astro);
    const g = starsGroup(astro);


    return (<>
        <Box display="flex" flexDirection="column" margin="20px">
            <MUILink component={RouterLink} to="/" variant="body1" color="primary">
                Back
            </MUILink>
        </Box>
    </>)
}

export { StarChart };