import * as math from "mathjs";
import React, { Suspense, useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { test } from '../astro-tests/test';
import { Graph } from '../Graph';
import { jcFromUnix } from "../astro/time";
import { precessionMatrix } from "../astro/precession";
import { nutationMatrix } from "../astro/nutation";
import { rotationalElements } from "../astro/ephemeris/rotationalElements";
import { VSOP87AEphemeris } from "../astro/ephemeris/json87aEphemeris";
import { MPP02Ephemeris } from "../astro/ephemeris/mpp02Ephemeris";

const tNow = jcFromUnix(Date.now()/1000);

function getPoint(t: number, precession: boolean, nutation: boolean) {
    let m = nutation ? nutationMatrix(t) : math.diag([1, 1, 1]);
    if (precession)
        m = math.multiply(m, precessionMatrix(t)).valueOf() as number[][];
    m = math.transpose(m);
    const v = math.multiply(m, [0, 0, 1]).valueOf() as number[];
    return { x: v[0], y: v[1] };
}

function getData(precession: boolean, nutation: boolean, timeScale: number, n: number) {
    const data = [];
    for (let k = 0; k <= n; k++) {
        const t = tNow + timeScale*(k / n - 0.5);
        // console.log("data t", t);
        const p = getPoint(t, precession, nutation);
        data.push(p);
    }
    return data;
}

const TestPage: React.FC = () => {
    const [vsop87a, setVSOP87A] = useState<VSOP87AEphemeris|null>(null);
    const [mpp02, setMPP02] = useState<MPP02Ephemeris|null>(null);

    const loadData = async (fileName: string, process: (data: any) => void) => {
        console.log("loadData()");
        try {
            const response = await fetch(`/astro/${fileName}`);
            if (!response.ok) {
                throw new Error('Failed to fetch JSON file');
            }
            const data = await response.json();
            process(data);
        } catch (error) {
            console.error('Error loading JSON:', error);
        }
    };

    useEffect(() => {
        const processVSOP87A = (data: any) => setVSOP87A(new VSOP87AEphemeris(data));
        const processMPP02 = (data: any) => setMPP02(new MPP02Ephemeris(data));
        loadData('vsop87a_truncated_medium.json', processVSOP87A);
        loadData('mpp02_llr_truncated_medium.json', processMPP02);
    }, []);
    
    if (!vsop87a || !mpp02)
        return <></>;

    // test();
    console.log('---');
    for (let t = -100.0; t < 100.0; t += 18.35) {
        const p = rotationalElements(301, t);
        console.log(t, p);
        console.log(vsop87a.getPosVel('JUPITER', t));
        console.log(mpp02.getPosVel(t));
    }

    return (
        <Container maxWidth="xl">
            <Box display="flex" justifyContent="center" sx={{py: 2}}>
                <Typography variant="h2">
                    Astro
                </Typography>
            </Box>
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

export { TestPage };