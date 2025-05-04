import pako from 'pako';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { VSOP87AEphemeris } from "../astro/ephemeris/vsop87aEphemeris";
import { MPP02Ephemeris } from "../astro/ephemeris/mpp02Ephemeris";
import { applySavitzkyGolayFilter, uniformlySpacedResample } from '../tools/savitzkyGolayFilter';
import { Vec } from '../astro/math/vec';
import { DataSetD3, GraphD3 } from '../GraphD3';

const TestPage: React.FC = () => {
    const [vsop87a, setVSOP87A] = useState<VSOP87AEphemeris|null>(null);
    const [mpp02, setMPP02] = useState<MPP02Ephemeris|null>(null);
    const [astro, setAstro] = useState<any>(null);
    const [horizons, setHorizons] = useState<any>(null);
    const [astropyStars, setAstropyStars] = useState<any>(null);
    
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

        const processHorizons = (data: any) => setHorizons(data);
        loadData('ephemeris/horizons_reference.json', processHorizons, controller);

        const processAstropyStars = (data: any) => setAstropyStars(data);
        loadData('ephemeris/astropy_star_reference.json', processAstropyStars, controller);
        
        return () => {
            controller.abort();
        };
    }, []);
    
    if (!vsop87a || !mpp02 || !astro || !horizons || !astropyStars)
        return <></>;
    
    console.log('astro', astro);

    // const kernels = computeSgKernels(5, 1);
    // console.log(kernels);

    const n = 50000;
    const m = 5000;
    const xs: number[] = [];
    const ys: number[] = [];
    for (let k = 0; k < n; k++) {
        const r = Vec.randomGaussian(2);
        // const x = 10*(Math.random()-0.5);
        const x = 5*r[0];
        xs.push(x);
        ys.push(Math.sin(x) + 0.5*r[1]);
    }
    // console.log('xs, ys', xs, ys);

    const order = xs.map((_, i) => i).sort((a, b) => xs[a]-xs[b]);
    const xsSorted = order.map(i => xs[i]);
    const ysSorted = order.map(i => ys[i]);

    // Uniform interpolation
    // const xi = Array.from({ length: m }, (_, i) => xsSorted[0] + (xsSorted[n-1]-xsSorted[0])*i/(m-1));
    // const yi = xi.map(x => linearInterpolation(x, xsSorted, ysSorted));

    const [xi, yi] = uniformlySpacedResample(xsSorted, ysSorted, m);

    const sg = applySavitzkyGolayFilter(xs, ys, 20, 3, m);
    // console.log(sg);

    const sList: { x: number, y: number }[] = Array(n).fill(0).map((_v: any, k) => {
        return { x: xs[k], y: ys[k] };
    });
    const sPoints: DataSetD3 = { points: sList, legendText: 'Raw datapoints', smoothenCurve: false, strokeScale: 1, showPoints: true, showLines: false, color: 'rgba(225, 202, 29, 0.3)' };

    const iList: { x: number, y: number }[] = Array(m).fill(0).map((_v: any, k) => {
        return { x: xi[k], y: yi[k] };
    });
    const iPoints: DataSetD3 = { points: iList, legendText: 'Interpolated', smoothenCurve: false, strokeScale: 1, showPoints: true, color: 'rgba(74, 33, 133, 0.5)' };

    const sgList: { x: number, y: number }[] = Array(m).fill(0).map((_v: any, k) => {
        return { x: sg[0][k], y: sg[1][k] };
    });
    const sgPoints: DataSetD3 = { points: sgList, legendText: 'Smoothed', smoothenCurve: false, strokeScale: 2, showPoints: false, color: 'red' };

    return (<>
        <Box display="flex">
            <MUILink component={RouterLink} to="/" variant="body1" color="primary">
                Back
            </MUILink>
            <GraphD3 
                data={[sPoints, iPoints, sgPoints]} 
                // pointsOfInterest={pois}
                width={1200} 
                height={700} 
                coordCenter={[0, 0]}
                coordRange={10}
                titleText="Savitzky-Golay filter"
            />
        </Box>
    </>)
}

export { TestPage };