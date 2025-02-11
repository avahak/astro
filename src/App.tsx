import * as math from "mathjs";
import React, { Suspense } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { test } from './astro-tests/test';
import { Graph } from './Graph';
import { ltpPBMAT } from './astro/precessionLong';
import { nutationMatrix2000B } from './astro/nutation2000b';
import { jcFromUnix, unixFromJc } from "./astro/time";
const ThreeScene = React.lazy(() => import('./ThreeScene'));

const tNow = jcFromUnix(Date.now()/1000);

function getPoint(t: number, precession: boolean, nutation: boolean) {
    let m = nutation ? nutationMatrix2000B(t) : math.diag([1, 1, 1]);
    if (precession)
        m = math.multiply(m, ltpPBMAT(t)).valueOf() as number[][];
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

const App: React.FC = () => {
    test();

    const dataTest = (s: number) => Array.from({ length: 1000 }, (_, k) => ({ x: k/10, y: Math.sin(s*k/10) }));
    // const data10 = getData(true, false, 1000, 200);
    // const data01 = getData(false, true, 0.1, 5000);
    // const data111 = getData(true, true, 1, 10000);
    // const data112 = getData(true, true, 0.1, 10000);
    const g1 = { points: dataTest(-10.0), color: 'red', legendText: 'Graph', showPoints: true, smoothenCurve: true, strokeScale: 2 };
    const g2 = { points: dataTest(5.0), legendText: 'Graph too', color: 'white', strokeScale: 0.5 };
    const g3 = { points: dataTest(-100.0), legendText: 'Graph1', showPoints: true, smoothenCurve: true, strokeScale: 1 };
    const g4 = { points: dataTest(0.05) };

    const pNow = getPoint(tNow, true, true);
    const pm2000 = getPoint(jcFromUnix(Date.UTC(-2000)/1000), true, true);
    const p1900 = getPoint(jcFromUnix(Date.UTC(1900)/1000), true, true);
    const p2000 = getPoint(jcFromUnix(Date.UTC(2000)/1000), true, true);
    const p2100 = getPoint(jcFromUnix(Date.UTC(2100)/1000), true, true);
    const p5000 = getPoint(jcFromUnix(Date.UTC(5000)/1000), true, true);
    const p50k = getPoint(480, true, true);
    const poiNow = { x: pNow.x, y: pNow.y, text: "Now", color: 'red' };
    const poim2000 = { x: pm2000.x, y: pm2000.y, text: "year -2000", color: 'steelblue' };
    const poi1900 = { x: p1900.x, y: p1900.y, text: "year 1900", color: 'steelblue' };
    const poi2000 = { x: p2000.x, y: p2000.y, text: "year 2000", color: 'steelblue' };
    const poi2100 = { x: p2100.x, y: p2100.y, text: "year 2100", color: 'steelblue' };
    const poi5000 = { x: p5000.x, y: p5000.y, text: "year 5000", color: 'steelblue' };
    const poi50k = { x: p50k.x, y: p50k.y, text: "year 50000", color: 'steelblue' };

    const q2020 = getPoint(jcFromUnix(Date.UTC(2020)/1000), false, true);
    const q2025 = getPoint(jcFromUnix(Date.UTC(2025)/1000), false, true);
    const q2026 = getPoint(jcFromUnix(Date.UTC(2026)/1000), false, true);
    const q2030 = getPoint(jcFromUnix(Date.UTC(2030)/1000), false, true);
    const qNow = getPoint(tNow, false, true);
    const qpoi2020 = { x: q2020.x, y: q2020.y, text: "year 2020", color: 'steelblue' };
    const qpoi2025 = { x: q2025.x, y: q2025.y, text: "1.1.2025", color: 'steelblue' };
    const qpoi2026 = { x: q2026.x, y: q2026.y, text: "1.1.2026", color: 'steelblue' };
    const qpoi2030 = { x: q2030.x, y: q2030.y, text: "year 2030", color: 'steelblue' };
    const qpoiNow = { x: qNow.x, y: qNow.y, text: "Now", color: 'red' };

    const gnp1 = { points: getData(true, false, 960, 1000), legendText: 'Precession', smoothenCurve: true, color: 'brown' };
    const gnp2 = { points: getData(false, true, 0.15, 5000), legendText: 'Nutation', smoothenCurve: true };
    const gnp3 = { points: getData(true, true, 0.15, 5000), legendText: 'Precession and Nutation', smoothenCurve: true, strokeScale: 1 };

    const pois = [{ x: 0.1, y: 0.1, text: "One" }, { x: 0.1, y: 0, text: "Two" }, { x: -0.1, y: 0, text: "Three" }];

    return (
        <Container maxWidth="xl">
            <Box display="flex" justifyContent="center" sx={{py: 2}}>
                <Typography variant="h2">
                    Astro
                </Typography>
            </Box>
            <Box style={{ width: "100%", height: "600px" }}>
            <Suspense fallback={<Box display="flex" justifyContent="center"><Typography>Loading..</Typography></Box>}>
                <ThreeScene />
            </Suspense>
            </Box>
            <Box style={{ width: "100%" }}>
                <Graph 
                    data={[gnp1, gnp3]} 
                    pointsOfInterest={[poim2000, poi1900, poi2000, poi2100, poi5000, poi50k, poiNow]}
                    width={1000} 
                    height={700} 
                    coordCenter={[pNow.x, pNow.y]}
                    coordRange={0.00008}
                    // titleText="Precession vs both"
                />
                <Graph 
                    data={[gnp1]} 
                    pointsOfInterest={[poim2000, poi1900, poi2000, poi2100, poi5000, poi50k, poiNow]}
                    width={600} 
                    height={400} 
                    coordCenter={[0, -0.35]}
                    coordRange={0.5}
                    titleText="Precession only"
                />
                <Graph 
                    data={[gnp2]} 
                    pointsOfInterest={[qpoi2020, qpoi2025, qpoi2026, qpoi2030, qpoiNow]}
                    width={600} 
                    height={400} 
                    coordRange={0.00005}
                    titleText="Nutation only"
                />
            </Box>
            <Box display="flex" justifyContent="center" sx={{py: 2}}>
                <Typography>
                    Text here
                </Typography>
            </Box>
            {/* <MUILink component={RouterLink} to="/" variant="body1" color="primary">
                Back
            </MUILink> */}
        </Container>
    );
};

export { App };