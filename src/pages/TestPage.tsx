import * as math from "mathjs";
import pako from 'pako';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { VSOP87AEphemeris } from "../astro/ephemeris/vsop87aEphemeris";
import { MPP02Ephemeris } from "../astro/ephemeris/mpp02Ephemeris";
import { applySavitzkyGolayFilter, uniformlySpacedResample } from '../tools/savitzkyGolayFilter';
import { Vec } from '../astro/math/vec';
import { DataSet, GraphText, Point } from '../tools/graph/types';
import { Graph } from '../tools/graph/Graph';
import { Time } from '../astro/time/time';
import { cst } from '../astro/constants';
import { precessionMatrix } from "../astro/precession";
import { nutation, nutationMatrix, nutationMatrixFromParameters } from "../astro/nutation";
import { equationOfTheOrigins } from "../astro/cio";

function adjust(x: number) {
    x = x % cst.TAU;
    if (x <= -Math.PI)
        x += cst.TAU;
    if (x > Math.PI)
        x -= cst.TAU;
    return x;
}

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

    const n = 100000;
    const m = 2000;
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

    const sg = applySavitzkyGolayFilter(xs, ys, 50, 3, m);
    // console.log(sg);

    const sList: { x: number, y: number }[] = Array(n).fill(0).map((_v: any, k) => {
        return { x: xs[k], y: ys[k] };
    });
    const sPoints: DataSet = { 
        points: sList, 
        label: 'Raw datapoints', 
        scale: 5, 
        drawPoints: true, 
        drawLines: false, 
        color: 'rgba(225, 202, 29)',
        opacity: 0.2,
    };

    const iList: { x: number, y: number }[] = Array(m).fill(0).map((_v: any, k) => {
        return { x: xi[k], y: yi[k] };
    });
    const iPoints: DataSet = { 
        points: iList, 
        label: 'Interpolated', 
        scale: 3.5, 
        drawPoints: false, 
        drawLines: true, 
        color: 'rgba(74, 133, 233)',
        // opacity: 0.5,
    };

    const sgList: { x: number, y: number }[] = Array(m).fill(0).map((_v: any, k) => {
        return { x: sg[0][k], y: sg[1][k] };
    });
    const sgPoints: DataSet = {
        points: sgList, 
        label: 'Filtered', 
        scale: 2, 
        drawPoints: false, 
        drawLines: true, 
        color: 'red' 
    };

    const texts: GraphText[] = Array.from({ length: 1000 }).map((_, k) => ({ 
        p: { x: 2000+Vec.randomGaussian(1, 2000)[0], y: Vec.randomGaussian(1, 10)[0] },
        size: 1, 
        color: [1, 1, 1], 
        text: `Text_${k}`,
        visibleScaleX: 10+Math.random()*Math.random()*(2000-10),
    }));

    const SCALE = 1 / cst.ARCSEC;
    const num = 10000;
    const points0: Point[] = [];
    const points1: Point[] = [];
    const points2: Point[] = [];
    for (let k = 0; k < num; k++) {
        const t = -50 + 100*k/num;
        const iJd = Math.floor(t*36525*1.00273781191135448);
        const time = Time.fromUt1(iJd/36525/1.00273781191135448, astro);
        const year = 2000 + t*100;

        const nut = nutation(time.jc_tdb);
        const pMat = precessionMatrix(time.jc_tdb).valueOf() as number[][];
        const nMat = nutationMatrixFromParameters(...nut);
        const npMat = math.multiply(nMat, pMat).valueOf() as number[][];

        const gastCIO = time.ERA() - equationOfTheOrigins(time.jc_tdb, npMat);

        points0.push({ x: year, y: SCALE*adjust(time.GAST(nut, 1)-time.GAST(nut, 0)) });
        points1.push({ x: year, y: SCALE*adjust(time.GAST(nut, 0)-gastCIO) });
        points2.push({ x: year, y: SCALE*adjust(time.GAST(nut, 1)-gastCIO) });
    }
    const dsPoints0: DataSet = {
        points: points0, 
        label: 'GAST poly2 - GAST poly1', 
        scale: 2, 
        drawPoints: false, 
        drawLines: true, 
        color: 'orange', 
        // groupName: 'Poly-poly',
    };
    const dsPoints1: DataSet = {
        points: points1, 
        label: 'GAST CIO - GAST poly1', 
        scale: 3, 
        drawPoints: false, 
        drawLines: true, 
        color: 'white',
        groupName: 'CIO-poly',
    };
    const dsPoints2: DataSet = {
        points: points2, 
        label: 'GAST CIO - GAST poly2', 
        scale: 1, 
        drawPoints: false, 
        drawLines: true, 
        color: 'red',
        groupName: 'CIO-poly',
    };

    return (<>
        <Box display="flex" flexDirection="column" margin="20px">
            <Graph 
                data={[dsPoints0, dsPoints1, dsPoints2]} 
                // texts={texts}
                width="95%"
                height="800px" 
                title={"GAST comparsion"}
                xLabel="Year"
                yLabel={"Error in \""}
                location={{ x: 2000, y: 0, scaleX: 2000, scaleY: 10 }}
            />
            {/* <Graph 
                data={[sPoints, iPoints, sgPoints]} 
                texts={texts}
                width="100%"
                height="600px" 
                title={"Savitzky-Golay filter"}
                location={{ x: 10, y: 0, scale: 5 }}
            /> */}
            <MUILink component={RouterLink} to="/" variant="body1" color="primary">
                Back
            </MUILink>
        </Box>
    </>)
}

export { TestPage };