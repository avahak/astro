/**
 * Maybe transform this into page explaining errors and assumptions in coordinate tranformation.
 * 
 * NOTE the error with Astropy data changes with the GMST formula used.
 * JPL Horizons explicitly states it uses the older GMST formula.
 * https://ssd.jpl.nasa.gov/horizons/manual.html
 */
import pako from 'pako';
import Tex2SVG from "react-hook-mathjax";
import React, { useEffect, useState } from 'react';
import { MPP02Ephemeris } from '../../astro/ephemeris/mpp02Ephemeris';
import { VSOP87AEphemeris } from '../../astro/ephemeris/vsop87aEphemeris';
import { Box, Container, List, ListItem, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { Time } from '../../astro/time/time';
import { destructureStarData, StarData } from '../../astro/stars';
import { Pipeline } from '../../astro/pipeline';
import { cartesianFromSpherical, sphericalFromCartesian, trueMotionSphericalToCartesian } from '../../astro/math/mathTools';
import { PosVel } from '../../astro/math/posvel';
import { applySavitzkyGolayFilter } from '../../tools/savitzkyGolayFilter';
import { Vec } from '../../astro/math/vec';
import { cst } from '../../astro/constants';
import { GeoLocation, Trajectory } from '../../astro/types';
import Errors from './Errors';
import { AstropyStar, ComparsionResult } from './types';

const YEAR_RANGE = [-3000, 7000];
const HA = Math.PI / 12;

/**
 * Computes positions for stars to compare with AstroPy reference data.
 */
function compareStarPositions(vsop87a: VSOP87AEphemeris, mpp02: MPP02Ephemeris, astro: any, horizons: any, astropyStars: any, astropyPlanets: any, mode: "0"|"1"|"CIO") {
    const results: ComparsionResult[] = [];

    const astroStarMap = new Map<number, StarData>();
    astro.stars.data.forEach((row: any) => {
        const star = destructureStarData(row);
        astroStarMap.set(star.HIP, star);
    });

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
        const pipeline = new Pipeline(observer, time, vsop87a, mpp02, mode == "0" ? 0 : 1);

        const r = star.Plx === null ? 1000*cst.PC : cst.PC/star.Plx;
        const rv = star.RV === null || star.Plx === null ? 0 : star.RV*cst.PC;
        const [p, dp] = trueMotionSphericalToCartesian([star.RA, star.DE], [star.pmRA/Math.cos(star.DE), star.pmDE], r, rv);
        const target: Trajectory = (t: number) => new PosVel(Vec.wSum([p, dp], [1, time.jc_tdb]), dp);
        const reduction = (mode == "CIO") ? 
            pipeline.transformWithCIO(target, false) : pipeline.transformWithTETE(target, false);

        const vRef = cartesianFromSpherical(1, rowObj.alt*cst.DEG, Math.PI/2-rowObj.az*cst.DEG);
        const vReduction = Vec.normalize(reduction.apparentPosTopocentric);

        if (jd < Time.jdFromGregorian(YEAR_RANGE[0], 1, 1) || jd > Time.jdFromGregorian(YEAR_RANGE[1], 1, 1))
            continue;

        results.push({
            t: time.jc_tdb,
            obj: `Stars_${mode}`,
            angle: 2*Math.asin(Vec.distance(vRef, vReduction)/2),
            p: vReduction,
            pRef: vRef,
            info: reduction,
            infoRef: star,
        });
    }
    return results;
}


/**
 * Computes positions for planets to compare with JPL Horizons reference data.
 */
function comparePlanetPositions(vsop87a: VSOP87AEphemeris, mpp02: MPP02Ephemeris, astro: any, horizons: any, astropyStars: any, astropyPlanets: any, mode: "0"|"1"|"CIO") {
    const results: ComparsionResult[] = [];

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

    Array.from(horizons.entries).forEach((infoRef: any) => {
    // Array.from(astropyPlanets.data).forEach((infoRef: any) => {
        // Horizons reference data FIELDS ["body_id","lat","lon","elevation","datetime_str","datetime_jd","RA","DEC","RA_app","DEC_app","AZ","EL","siderealtime","hour_angle","TDB-UT","lighttime"]

        let [body, lat, lon, , , date, jd, raJ2000, decJ2000, raDate, decDate, az, alt, siderealTime, hourAngle, deltaT, lightTime] = infoRef;
        // let [body, lat, lon, , date, jd, raJ2000, decJ2000, raDate, decDate, az, alt, siderealTime, hourAngle, deltaT, lightTime] = infoRef;
        
        if (jd < Time.jdFromGregorian(YEAR_RANGE[0], 1, 1) || jd > Time.jdFromGregorian(YEAR_RANGE[1], 1, 1))
            return;

        const horizon = [
            lat, jd, deltaT, raJ2000*cst.DEG, decJ2000*cst.DEG, raDate*cst.DEG, decDate*cst.DEG, 
            az*cst.DEG, alt*cst.DEG, (siderealTime*HA+cst.TAU)%cst.TAU, 
            ((hourAngle+24)%24)*HA, (siderealTime*HA-lon*cst.DEG+cst.TAU)%cst.TAU, lightTime*60
        ];

        // JPL Horizons convention with input dates of UT form:
        // https://ssd.jpl.nasa.gov/horizons/manual.html
        // "UT is Universal Time. This can mean one of two non-uniform time-scales based on 
        // the rotation of the Earth. For this program, prior to 1962, UT means UT1. After 1962, 
        // UT means UTC or “Coordinated Universal Time”. Future UTC leap-seconds are not known 
        // yet, so the closest known leap-second correction is used over future time-spans.""
        const time = Time.fromUt((Time.jdFromStringDate(date)-2451545)/36525, astro);
        // const time = Time.fromUt1((jd-2451545)/36525, astro);
        const observer = { lon: lon*cst.DEG, lat: lat*cst.DEG, h: 0 } as GeoLocation;
        const pipeline = new Pipeline(observer, time, vsop87a, mpp02, mode == "0" ? 0 : 1);
        const reduction = (mode == "CIO") ? 
            pipeline.transformWithCIO(BODIES[body][1], true) : pipeline.transformWithTETE(BODIES[body][1], true);

        const vRef = cartesianFromSpherical(1, alt*cst.DEG, Math.PI/2-az*cst.DEG);
        const vReduction = Vec.normalize(reduction.apparentPosTopocentric);
        // const vRef = cartesianFromSpherical(1, decDate*cst.DEG, raDate*cst.DEG);
        // const vReduction = cartesianFromSpherical(1, reduction[5], reduction[4]);
        // const vRef = cartesianFromSpherical(1, decJ2000*cst.DEG, raJ2000*cst.DEG);
        // const vReduction = cartesianFromSpherical(1, reduction[3], reduction[2]);

        results.push({
            t: time.jc_tdb,
            obj: `${BODIES[body][0]}_${mode}`,
            angle: 2*Math.asin(Vec.distance(vRef, vReduction)/2),
            p: vReduction,
            pRef: vRef,
            info: reduction,
            infoRef: horizon,
        });
    });

    return results;
}


const ComparisonPage: React.FC = () => {
    const [vsop87a, setVSOP87A] = useState<VSOP87AEphemeris|null>(null);
    const [mpp02, setMPP02] = useState<MPP02Ephemeris|null>(null);
    const [astro, setAstro] = useState<any>(null);
    const [horizons, setHorizons] = useState<any>(null);
    const [astropyStars, setAstropyStars] = useState<any>(null);
    const [astropyPlanets, setAstropyPlanets] = useState<any>(null);
    const [results, setResults] = useState<Map<string, ComparsionResult[]>|null>(null);
    
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

        const processAstropyPlanets = (data: any) => setAstropyPlanets(data);
        loadData('ephemeris/astropy_planet_reference.json', processAstropyPlanets, controller);
        
        return () => {
            controller.abort();
        };
    }, []);

    useEffect(() => {
        if (!vsop87a || !mpp02 || !astro || !horizons || !astropyStars || !astropyPlanets)
            return;

        console.log('astro', astro);
        console.log('horizons', horizons);
        console.log('astropyStars', astropyStars);
        console.log('astropyPlanets', astropyPlanets);

        const cStars0 = compareStarPositions(vsop87a, mpp02, astro, horizons, astropyStars, astropyPlanets, "0");
        const cStars1 = compareStarPositions(vsop87a, mpp02, astro, horizons, astropyStars, astropyPlanets, "1");
        const cStarsCIO = compareStarPositions(vsop87a, mpp02, astro, horizons, astropyStars, astropyPlanets, "CIO");
        const cPlanets0 = comparePlanetPositions(vsop87a, mpp02, astro, horizons, astropyStars, astropyPlanets, "0");
        const cPlanets1 = comparePlanetPositions(vsop87a, mpp02, astro, horizons, astropyStars, astropyPlanets, "1");
        const cPlanetsCIO = comparePlanetPositions(vsop87a, mpp02, astro, horizons, astropyStars, astropyPlanets, "CIO");7

        const allCr = [...cStars0, ...cPlanets0, ...cStars1, ...cPlanets1, ...cStarsCIO, ...cPlanetsCIO];

        const cMap: Map<string, ComparsionResult[]> = new Map();
        for (const cr of allCr) {
            if (!cMap.has(cr.obj))
                cMap.set(cr.obj, []);
            cMap.get(cr.obj)!.push(cr);
        }
        for (const name of cMap.keys()) 
            cMap.get(name)?.sort((a, b) => b.t-a.t);
        setResults(cMap);

    }, [vsop87a, mpp02, astro, horizons, astropyStars, astropyPlanets]);
    
    if (!results)
        return <></>;

    return (
        <Container>
            <Box display="flex" flexDirection="column">
                <Box>
                    <Errors results={results} />
                </Box>
                <Box>
                    <List sx={{ listStyleType: 'disc', pl: 4 }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            JPL Horizons uses precession model by Owen (1990) for non-modern dates. 
                            Owen uses numerical integration and Chebyshev polynomials fitted in 8000-year intervals.
                            JPL Horizons also uses 
                            <Tex2SVG latex="\rm{GMST} = 67310.548 + (3155760000 + 8640184.812866)T_u + 0.093104\,T_u^2 - 6.2\cdot 10^{-6}\,T_u^3." />
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            The outlier datapoints in the planet graphs are from situations where the observer is 
                            near a pole. For some reason position computed by JPL Horizons differs many arcseconds in 
                            these cases. With AstroPy there is no additional discrepancy for observers near the poles.
                        </ListItem>
                    </List>
                </Box>
                <Box>
                    <MUILink component={RouterLink} to="/" variant="body1" color="primary">
                        Back
                    </MUILink>
                </Box>
            </Box>
        </Container>
    );
}

export { ComparisonPage };