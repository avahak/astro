import * as math from "mathjs";
import React, { Suspense, useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { jcFromUnix } from "../../astro/time/time";
import { precessionMatrix } from "../../astro/precession";
import { nutationMatrix } from "../../astro/nutation";
const ThreeScene = React.lazy(() => import('./ThreeScene'));

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

const ThreeSceneSuspense: React.FC = () => {
    return (
        <Box style={{ width: "100%", height: "600px" }}>
            <Suspense fallback={<Box display="flex" justifyContent="center"><Typography>Loading..</Typography></Box>}>
                <ThreeScene />
            </Suspense>
        </Box>
    );
};

const SkyPage: React.FC = () => {
    return (
        <Container maxWidth="xl">
            <Box display="flex" justifyContent="center" sx={{py: 2}}>
                <Typography variant="h2">
                    Sky
                </Typography>
            </Box>
            <ThreeSceneSuspense />
            <Box display="flex" justifyContent="center" sx={{py: 2}}>
                <Typography>
                    Text here
                </Typography>
            </Box>
            <MUILink component={RouterLink} to="/" variant="body1" color="primary">
                Back
            </MUILink>
        </Container>
    );
};

export { SkyPage };