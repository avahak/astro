/**
 * Miscellaneous atronomical constants.
 * Units are radian for angles, AU for distance, Julian century (36525 days) for time.
 */
import * as math from "mathjs";
import { Vec } from "./math/vec";

const TAU = 2*Math.PI;
const DEG = Math.PI / 180;
const ARCSEC = DEG / 60 / 60;
const M = 1 / 149597870691;                 // IAUCircular179.pdf p32
const KM = 1000 * M;
const S = 1 / (36525*24*3600);
const G = 6.67430e-11*(M**3)/(S**2);        // gravitational constant
const GMS = 1.327124e20*(M**3)/(S**2);      // G*mass of sun (IAUCircular179.pdf p32)

// Source: IAUCircular179.pdf p32
const MASS_RATIO_EARTH_MOON = 81.30056;         // mass of earth / mass of moon
const MASS_RATIO_SUN_EARTH = 332946.050895;     // mass of sun / mass of earth
// Given EMB position p_EMB and vector from Earth to Moon v_EM, can calculate
// p_MOON: p_EMB + RATIO_EMB_MOON_TO_EARTH_MOON*v_EM and 
// p_EARTH: p_EMB + RATIO_EMB_EARTH_TO_EARTH_MOON*v_EM
const RATIO_EMB_MOON_TO_EARTH_MOON = 1.0/(1.0 + 1.0/MASS_RATIO_EARTH_MOON);     // ~0.988
const RATIO_EMB_EARTH_TO_EARTH_MOON = RATIO_EMB_MOON_TO_EARTH_MOON - 1.0;       // ~-0.012

// Source: https://en.wikipedia.org/wiki/Earth_radius
const RADIUS_EARTH_E = 6378.137*KM;         // radius of Earth on equator
const RADIUS_EARTH = 6371.0*KM;             // radius of Earth on average
const RADIUS_EARTH_F = 1 / 298.257223563;   // flattening factor

/**
 * Transformation from GCRS to the mean equator and equinox of J2000.0.
 * NOTE! Our rotation matrices have opposite sign than those of IAU Circular 179!
 */
const FRAME_BIAS_MATRIX = math.multiply(
    Vec.rotationMatrix(0, -0.0068192 * ARCSEC), 
    Vec.rotationMatrix(1, 0.016617 * ARCSEC), 
    Vec.rotationMatrix(2, 0.0146 * ARCSEC), 
).valueOf() as number[][];

const cst = {
    TAU, DEG, ARCSEC, M, KM, S, G, GMS,
    MASS_RATIO_EARTH_MOON, MASS_RATIO_SUN_EARTH,
    RATIO_EMB_MOON_TO_EARTH_MOON, RATIO_EMB_EARTH_TO_EARTH_MOON,
    FRAME_BIAS_MATRIX,
    RADIUS_EARTH_E, RADIUS_EARTH_F, RADIUS_EARTH,

    ARCMIN: DEG / 60,

    // for equatorial <-> galactic conversion
    // Source: https://en.wikipedia.org/wiki/Galactic_coordinate_system
    DEC_GALACTIC_NORTH_POLE: 27.12825*DEG,
    RA_GALACTIC_NORTH_POLE: 192.85948*DEG,
    GLON_CELESTIAL_NORTH_POLE: 122.93192*DEG,

    PC: 2.06265e5,           // parsec in AU
    LY: 63241,               // lightyear in AU
    C: 299792458*M/S,        // speed of light, AU/Julian century (~6.3e6)

    MASS_SUN: GMS/G,
    MASS_EARTH: 5.9722e24,
    MASS_MOON: 7.342e22,

    RADIUS_EARTH_P: (1-RADIUS_EARTH_F)*RADIUS_EARTH_E,      // radius of Earth on poles

    EARTH_LOC_DICT: {
        'Helsinki': { lat: 60.167*DEG, lon: 24.942*DEG, h: 0 },
        'London': { lat: 51.5*DEG, lon: -0.1*DEG, h: 0 },
        'New York': { lat: 40.7*DEG, lon: -74.0*DEG, h: 0 },
        'Wellington': { lat: -41.3*DEG, lon: 174.8*DEG, h: 0 },
        'Fairbanks': { lat: 64.84*DEG, lon: -147.72*DEG, h: 0 },
        'Singapore': { lat: 1.34*DEG, lon: 103.8*DEG, h: 0 },
        'Kaffeklubben Island': { lat: 83.66*DEG, lon: -30.61*DEG, h: 0 },
        'North Pole': { lat: 90*DEG, lon: 0, h: 0 },
        'South Pole': { lat: -90*DEG, lon: 0, h: 0 },
        'Utrecht': { lat: 52*DEG, lon: 5*DEG, h: 0 },
    },
};

export { cst };