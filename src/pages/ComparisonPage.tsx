/**
 * Maybe transform this into page explaining errors and assumptions in coordinate tranformation.
 * 
 * NOTE the error with Astropy data is mainly (for couple thousand years) from different
 * formula of GMST. This is clear from the graphs.
 * However, JPL Horizons explicitly states it uses the older GMST formula.
 * https://ssd.jpl.nasa.gov/horizons/manual.html
 */
import pako from 'pako';
import React, { useEffect, useState } from 'react';
import { Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { Time } from "../astro/time/time";
import { VSOP87AEphemeris } from "../astro/ephemeris/vsop87aEphemeris";
import { MPP02Ephemeris } from "../astro/ephemeris/mpp02Ephemeris";
import { Pipeline } from '../astro/pipeline';
import { PosVel } from '../astro/math/posvel';
import { Vec, VecStats } from '../astro/math/vec';
import { cst } from '../astro/constants';
import { GeoLocation, Trajectory } from '../astro/types';
import { DataPoint, DataSet, Graph } from '../Graph';
import { destructureStarData, StarData } from '../astro/stars';
import { cartesianFromSpherical, trueMotionSphericalToCartesian } from '../astro/math/mathTools';
import { applySavitzkyGolayFilter } from '../astro/tools/savitzkyGolayFilter';

const YEAR_RANGE = [-2000, 5000];
const HEADERS = ["JD", "Delta T", "raJ2000", "decJ2000", "raDate", "decDate", "Az", "Alt", "Sidereal time", "HA", "GAST", "lightTime"];
const HEADER_UNITS = ["JD", "S", "RAD", "RAD", "RAD", "RAD", "RAD", "RAD", "RAD", "RAD", "RAD", "S"];

type Result = {
    body: string;
    date: string;
    index: number;
    row1: number[];
    row2: number[];
    rowDiff12: number[];
};

type StarResult = {
    star: StarData;
    lat: number;
    lon: number;
    jd_ut1: number;
    row1: number[];
    row2: number[];
    rowDiff: number[];
};

type AstropyStar = {
    hip: number;
    datetime_ut1: string;
    jd_ut1: number;
    lon: number;
    lat: number;
    h: number;
    ra: number;
    dec: number;
    ra_date: number;
    dec_date: number;
    az: number;
    alt: number;
};

type Stats = { n: number, mean: number, std: number, min: number, max: number };


function formatField(format: string) {
    if (format === "RAD_TO_HA")
        return haString;
    if (format === "RAD")
        return dmsString;
    if (format === "JD")
        return timeString;
    return (val: number|null, digits: number=0) => val === null || val === undefined ? "null" : val.toFixed(digits);
}

function haString(x: number|null, secondsDigits: number=0): string {
    if (x === null)
        return "null";
    if (x < 0.0)
        x = (x % cst.TAU + cst.TAU) % cst.TAU;
    
    const totalHours = x*24/cst.TAU;
    const hours = Math.floor(totalHours);
    const remainderMinutes = (totalHours - hours) * 60;
    const minutes = Math.floor(remainderMinutes);
    const seconds = (remainderMinutes - minutes) * 60;
    
    const hoursStr = (hours !== 0) ? `${hours}h` : '';
    const minutesStr = (minutes !== 0 || hours !== 0) ? `${minutes}m` : '';
    const secondsStr = seconds.toFixed(secondsDigits) + 's';
    
    return (hoursStr + minutesStr + secondsStr).trim();
}

function timeString(days: number|null, secondsDigits: number=0): string {
    if (days === null)
        return "null";
    if (days < 0.0)
        return `-${timeString(-days, secondsDigits)}`;
    
    const totalDays = days;
    const daysInt = Math.floor(totalDays);
    const remainderHours = (totalDays - daysInt) * 24;
    const hours = Math.floor(remainderHours);
    const remainderMinutes = (remainderHours - hours) * 60;
    const minutes = Math.floor(remainderMinutes);
    const seconds = (remainderMinutes - minutes) * 60;
    
    const daysStr = daysInt !== 0 ? `${daysInt}d` : '';
    const hoursStr = (hours !== 0 || daysInt !== 0) ? `${hours}h` : '';
    const minutesStr = (minutes !== 0 || hours !== 0 || daysInt !== 0) ? `${minutes}m` : '';
    const secondsStr = seconds.toFixed(secondsDigits) + 's';
    
    return (daysStr + hoursStr + minutesStr + secondsStr).trim();
}

function dmsString(x: number|null, arcsecDigits: number = 0): string {
    if (x === null)
        return "null";
    if (x < 0.0)
        return `-${dmsString(-x, arcsecDigits)}`;
    
    const totalDegrees = x * 180.0 / Math.PI;
    const degrees = Math.floor(totalDegrees);
    const remainder = (totalDegrees - degrees) * 60;
    const arcminutes = Math.floor(remainder);
    const arcseconds = (remainder - arcminutes) * 60;
    
    const degStr = degrees !== 0 ? `${degrees}\u00B0` : '';
    const arcminStr = (arcminutes !== 0 || degrees !== 0) ? `${arcminutes}'` : '';
    const arcsecStr = arcseconds.toFixed(arcsecDigits) + '"';
    
    return degStr + arcminStr + arcsecStr;
}

function computeStats(results: Result[]): Map<string, Stats[]> {
    const bodyMap = new Map<string, Result[]>();
    const allResults: Result[] = [];
    
    for (const result of results) {
        if (!bodyMap.has(result.body))
            bodyMap.set(result.body, []);
        bodyMap.get(result.body)!.push(result);
        allResults.push(result);
    }

    const statsMap = new Map<string, Stats[]>();
    
    // Compute stats for each body
    for (const [body, bodyResults] of bodyMap) {
        const bodyStats: Stats[] = [];
        for (let k = 0; k < HEADERS.length; k++) {
            const values = bodyResults.map(r => r.rowDiff12[k]);
            bodyStats.push(Vec.stats(values));
        }
        statsMap.set(body, bodyStats);
    }

    // Compute stats for "All" group
    const allStats: Stats[] = [];
    for (let k = 0; k < HEADERS.length; k++) {
        const values = allResults.map(r => r.rowDiff12[k]);
        allStats.push(Vec.stats(values));
    }
    statsMap.set("All", allStats);

    return statsMap;
}

const ResultTable: React.FC<{ data: Result }> = ({ data }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={7} align="center">
                            <Typography variant="subtitle1" fontWeight="bold">
                                {data.index}: {data.body}, {data.date}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{background: "#333333"}}>
                        {HEADERS.map((s, index) => (
                            <TableCell key={`headerRow-${data.body}-${index}`} align="center" sx={{border: `2px solid gray`}}>
                                <Typography fontWeight="bold">{s}</Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {data.row1.map((num, index) => (
                            <TableCell key={`row1-${data.body}-${index}`} align="center" sx={{border: `2px solid gray`}}>
                                {`${formatField(HEADER_UNITS[index])(num, 2)}`}
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {data.row2.map((num, index) => (
                            <TableCell key={`row2-${data.body}-${index}`} align="center" sx={{border: `2px solid gray`}}>
                                {`${formatField(HEADER_UNITS[index])(num, 2)}`}
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {data.rowDiff12.map((num, index) => (
                            <TableCell key={`row-diff12-${data.body}-${index}`} align="center" sx={{border: `2px solid gray`}}>
                                {`${formatField(HEADER_UNITS[index])(num, 2)}`}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const MajorBodyStatsTable: React.FC<{ body: string, stats: Stats[] }> = ({ body, stats }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={7} align="center">
                            <Typography variant="subtitle1" fontWeight="bold">
                                {body}, n={stats[0].n}, time span={YEAR_RANGE[0]}-{YEAR_RANGE[1]}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{background: "#333333"}}>
                        {HEADERS.map((s, index) => (
                            <TableCell key={`stats-header-${body}-${index}`} align="center" sx={{border: `2px solid gray`}}>
                                <Typography fontWeight="bold">{s}</Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {stats.map((stat, index) => (
                            <TableCell key={`stats12-${body}-${index}`} align="center" sx={{border: `2px solid gray`}}>
                                {`${formatField(HEADER_UNITS[index])(stat.mean, 2)} ± ${formatField(HEADER_UNITS[index])(stat.std, 2)}`}
                                <br />
                                {`max ${formatField(HEADER_UNITS[index])(stat.max, 1)}`}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const StarStatsTable: React.FC<{ results: StarResult[] }> = ({ results }) => {
    const headers = ["raJ2000*", "deJ2000", "raDate*", "deDate", "az*", "alt"];
    const headerUnits = ["RAD", "RAD", "RAD", "RAD", "RAD", "RAD"];
    const stats: VecStats[] = [];
    for (let k = 0; k < headers.length; k++) {
        const diffs: number[] = [];
        for (const result of results)
            diffs.push(result.rowDiff[k]);
        stats.push(Vec.stats(diffs));
    }
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={7} align="center">
                            <Typography variant="subtitle1" fontWeight="bold">
                                n={results.length}, * means scaling with cos(dec), time span={YEAR_RANGE[0]}-{YEAR_RANGE[1]}
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{background: "#333333"}}>
                        {headers.map((s, index) => (
                            <TableCell key={`star-header-${index}`} align="center" sx={{border: `2px solid gray`}}>
                                <Typography fontWeight="bold">{s}</Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        {stats.map((stat, index) => (
                            <TableCell key={`starDiff-${index}`} align="center" sx={{border: `2px solid gray`}}>
                                {`${formatField(headerUnits[index])(stat.mean, 2)} ± ${formatField(headerUnits[index])(stat.std, 2)}`}
                                <br />
                                {`max ${formatField(headerUnits[index])(stat.max, 2)}`}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const MajorBodyTest: React.FC<{ vsop87a: VSOP87AEphemeris, mpp02: MPP02Ephemeris, astro: any, horizons: any, astropyStars: any }> = ({ vsop87a, mpp02, astro, horizons, astropyStars }) => {
    const c = 1 / (cst.MASS_RATIO_EARTH_MOON + 1);
    const BODIES: { [key: number]: [string, (t: number) => PosVel] } = {
        10: ['Sun', (t: number) => new PosVel([0, 0, 0], [0, 0, 0])],
        301: ['Moon', (t: number) => PosVel.wSum([vsop87a.getPosVel('EARTH-MOON', t), mpp02.getPosVel(t)], [1, 1-c])],
        199: ['Mercury', (t: number) => vsop87a.getPosVel('MERCURY', t)],
        299: ['Venus', (t: number) => vsop87a.getPosVel('VENUS', t)],
        // 399: ['Earth', (t: number) => PosVel.wSum([vsop87a.getPosVel('EARTH-MOON', t), mpp02.getPosVel(t)], [1, -c])],
        499: ['Mars', (t: number) => vsop87a.getPosVel('MARS', t)],
        599: ['Jupiter', (t: number) => vsop87a.getPosVel('JUPITER', t)],
        699: ['Saturn', (t: number) => vsop87a.getPosVel('SATURN', t)],
        799: ['Uranus', (t: number) => vsop87a.getPosVel('URANUS', t)],
        899: ['Neptune', (t: number) => vsop87a.getPosVel('NEPTUNE', t)],
    };

    const results: Result[] = [];
    const HA = Math.PI / 12;

    let count = 0;
    const reference = Array.from(horizons.entries);
    const gastList: { x: number, y: number}[] = [];
    const dtList: { x: number, y: number}[] = [];
    [...reference].sort(() => Math.random()-0.5).forEach((test: any) => {
        if (count > 500)
            return;
        // Horizons reference data FIELDS ["body_id","lat","lon","elevation","datetime_str","datetime_jd","RA","DEC","RA_app","DEC_app","AZ","EL","siderealtime","hour_angle","TDB-UT","lighttime"]

        let [body, lat, lon, , , date, jd, raJ2000, decJ2000, raDate, decDate, az, alt, siderealTime, hourAngle, deltaT, lightTime] = test;
        
        if (jd < Time.jdFromGregorian(YEAR_RANGE[0], 1, 1) || jd > Time.jdFromGregorian(YEAR_RANGE[1], 1, 1))
            return;
        count++;

        const horizon = [jd, deltaT, raJ2000*cst.DEG, decJ2000*cst.DEG, raDate*cst.DEG, decDate*cst.DEG, az*cst.DEG, alt*cst.DEG, (siderealTime*HA+cst.TAU)%cst.TAU, ((hourAngle+24)%24)*HA, (siderealTime*HA-lon*cst.DEG+cst.TAU)%cst.TAU, lightTime*60];

        // JPL Horizons strangeness with input dates of UT form:
        // https://ssd.jpl.nasa.gov/horizons/manual.html
        // UT is Universal Time. This can mean one of two non-uniform time-scales based on 
        // the rotation of the Earth. For this program, prior to 1962, UT means UT1. After 1962, 
        // UT means UTC or “Coordinated Universal Time”. Future UTC leap-seconds are not known 
        // yet, so the closest known leap-second correction is used over future time-spans.
        // const time = jd > 2441499.5 ? Time.fromUtc((Time.jdFromStringDate(date)-2451545)/36525, astro) : Time.fromUt1((Time.jdFromStringDate(date)-2451545)/36525, astro);
        const time = Time.fromUt((Time.jdFromStringDate(date)-2451545)/36525, astro);

        // const time = Time.fromUtc((Time.jdFromStringDate(date)-2451545)/36525, astro);
        // const time = Time.fromTdb((Time.jdFromStringDate(date)-2451545)/36525, astro);
        // const time = Time.fromUt1((Time.jdFromStringDate(date)-2451545)/36525, astro);
        const observer = { lon: lon*cst.DEG, lat: lat*cst.DEG, h: 0 } as GeoLocation;
        const pipeline = new Pipeline(observer, time, vsop87a, mpp02);
        const myReduction = pipeline.reduce(BODIES[body][1], true);

        gastList.push({ x: jd, y: 2e7*(horizon[10]-myReduction[10]) });
        dtList.push({ x: jd, y: 1e3*(horizon[1]-myReduction[1]) });

        results.push({
            body: BODIES[body][0],
            date,
            index: results.length+1,
            row1: horizon,
            row2: myReduction,
            rowDiff12: Vec.sub(myReduction, horizon).map((v, index) => { 
                if (index < 2)
                    return Math.abs(v);

                const w = Math.abs(v) % cst.TAU;
                if (w > Math.PI)
                    return cst.TAU-w;
                return w;
            }),
        });
    });
    const stats = computeStats(results);
    // console.log('stats', stats);

    const BODY_ORDER = [
        "All",
        "Moon",
        "Mercury",
        "Venus",
        // "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune"
    ];

    gastList.sort((a, b) => b.x - a.x);
    dtList.sort((a, b) => b.x - a.x);
    const gastPoints = { points: gastList, legendText: 'GAST diff', smoothenCurve: false, strokeScale: 1 };
    const dtPoints = { points: dtList, legendText: 'Delta T diff', smoothenCurve: false, strokeScale: 1 };
    const pois = astro['delta_t']['tai_utc'].map((v: any, index: number) => ({ x: v[0], y: -1300, text: `${index}` }));
    const lsList: { x: number, y: number }[] = Array(20000).fill(0).map((_v: any, k) => {
        const x = 2437000 + k*(2458000-2437000)/20000;
        return { x, y: 100*Time.taiMinusUtc(x, astro)+1 };
    });
    const lsPoints = { points: lsList, legendText: 'My LS', smoothenCurve: false, strokeScale: 1 };

    return (
        <Container maxWidth="xl">
        <Box display="flex" flexDirection="column" gap="50px" justifyContent="center" sx={{py: 2}}>
            <Graph 
                data={[gastPoints, dtPoints, lsPoints]} 
                // data={[lsPoints]}
                pointsOfInterest={pois}
                width={1200} 
                height={700} 
                coordCenter={[2451545, 1]}
                coordRange={10000}
                titleText="GAST"
            />
            <Typography variant="h3" textAlign="center">
                Major body stats
            </Typography>
            {BODY_ORDER.map((key) => 
                <MajorBodyStatsTable key={key} body={key} stats={stats.get(key)!} />
            )}
            {/* <Typography variant="h3" textAlign="center">
                Result rows
            </Typography> */}
            {/*results.map((result, index) => 
                <ResultTable key={`${index}`} data={result} />
            )*/}
        </Box>
        </Container>
    );
}

const StarTest: React.FC<{ vsop87a: VSOP87AEphemeris, mpp02: MPP02Ephemeris, astro: any, horizons: any, astropyStars: any }> = ({ vsop87a, mpp02, astro, horizons, astropyStars }) => {
    const results: StarResult[] = [];

    const astroStarMap = new Map<number, StarData>();
    astro.stars.data.forEach((row: any) => {
        const star = destructureStarData(row);
        astroStarMap.set(star.HIP, star);
    });

    const dots: DataPoint[] = [];

    for (const row of astropyStars.data) {
        let _rowObj: any = {};
        row.forEach((v: number, k: number) => {
            _rowObj[astropyStars.fields[k]] = v;
        });
        const rowObj = _rowObj as AstropyStar;

        const star = astroStarMap.get(rowObj.hip);
        if (!star)
            continue;

        const jd = rowObj.jd_ut1;

        const time = Time.fromUt1((rowObj.jd_ut1-2451545)/36525, astro);
        const observer = { lon: rowObj.lon*cst.DEG, lat: rowObj.lat*cst.DEG, h: rowObj.h*cst.KM } as GeoLocation;
        const pipeline = new Pipeline(observer, time, vsop87a, mpp02);

        const r = star.Plx === null ? 1000*cst.PC : cst.PC/star.Plx;
        const rv = star.RV === null || star.Plx === null ? 0 : star.RV*cst.PC;
        const [p, dp] = trueMotionSphericalToCartesian([star.RA, star.DE], [star.pmRA/Math.cos(star.DE), star.pmDE], r, rv);
        const target: Trajectory = (t: number) => new PosVel(Vec.wSum([p, dp], [1, time.jc_tdb]), dp);
        const reduction = pipeline.reduce(target, false);

        const row1: number[] = Vec.scale([rowObj.ra, rowObj.dec, rowObj.ra_date, rowObj.dec_date, rowObj.az, rowObj.alt], cst.DEG);
        const row2: number[] = [star.RA, star.DE, reduction[4], reduction[5], reduction[6], reduction[7]];

        const starResult: StarResult = {
            star: star,
            lat: rowObj.lat,
            lon: rowObj.lon,
            jd_ut1: rowObj.jd_ut1,
            row1: row1, 
            row2: row2, 
            rowDiff: Vec.sub(row1, row2).map((v, index) => { 
                const scalingFactor = (index % 2 == 0) ? Math.cos(row1[index+1]) : 1;
                const w = Math.abs(v) % cst.TAU;
                if (w > Math.PI)
                    return cst.TAU-w;
                return w*scalingFactor;
            }),
        };

        const v1 = cartesianFromSpherical(1, rowObj.alt*cst.DEG, rowObj.az*cst.DEG);
        const v2 = cartesianFromSpherical(1, reduction[7], reduction[6]);
        const angle = 2*Math.asin(Vec.distance(v1, v2)/2);
        dots.push({ x: 20+(jd-2451545)/36525, y: angle/cst.ARCSEC });

        if (jd > Time.jdFromGregorian(YEAR_RANGE[0], 1, 1) && jd < Time.jdFromGregorian(YEAR_RANGE[1], 1, 1))
            results.push(starResult);
    }

    dots.sort((a, b) => b.x - a.x);
    const dotsPoints: DataSet = { 
        points: dots, legendText: 'Error', strokeScale: 1, 
        color: 'rgba(50,90,150,0.3)', showLines: false, showPoints: true 
    };
    // console.log(dots);

    const sg = applySavitzkyGolayFilter(dots.map((v) => v.x), dots.map((v) => v.y), 20, 3, 1000);
    // console.log(sg);
    const sgPoints = { 
        points: sg[0].map((_, k) => ({ x: sg[0][k], y: sg[1][k] })),
        legendText: 'SG', smoothenCurve: false, strokeScale: 2, color: 'red'
    };

    console.log(dots, sg);

    return (
        <Container maxWidth="xl">
        <Box display="flex" flexDirection="column" gap="50px" justifyContent="center" sx={{py: 2}}>
            <Typography variant="h3" textAlign="center">
                Star stats
            </Typography>
            <StarStatsTable results={results} />
            <Graph 
                data={[dotsPoints, sgPoints]} 
                // data={[lsPoints]}
                // pointsOfInterest={pois}
                width={1200} 
                height={700} 
                coordCenter={[20, 20]}
                coordRange={40}
                titleText="Errors"
                axisLabelStyle={{ xText: 'Time in centuries', yText: 'Error in arcseconds', fill: 'white', fontSize: '16px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}
            />
            {/* <Typography variant="h3" textAlign="center">
                Result rows
            </Typography> */}
            {/*results.map((result, index) => 
                <ResultTable key={`${index}`} data={result} />
            )*/}
        </Box>
        </Container>
    );
}

const ComparisonPage: React.FC = () => {
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
    console.log('horizons', horizons);
    console.log('astropyStars', astropyStars);

    return (<>
        <Box display="flex" justifyContent="space-between">
            <MUILink component={RouterLink} to="/" variant="body1" color="primary">
                Back
            </MUILink>
        </Box>
        <StarTest vsop87a={vsop87a} mpp02={mpp02} astro={astro} horizons={horizons} astropyStars={astropyStars} />
        <MajorBodyTest vsop87a={vsop87a} mpp02={mpp02} astro={astro} horizons={horizons} astropyStars={astropyStars} />
    </>)
}

export { ComparisonPage };