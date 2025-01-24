/**
 * Miscellaneous atronomical constants.
 * Units are radian for angles, AU for distance, Julian century (36525 days) for time.
 */

const TAU = 2*Math.PI
const DEG = Math.PI / 180;
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

const cst = {
    TAU, DEG, M, KM, S, G, GMS,
    MASS_RATIO_EARTH_MOON, MASS_RATIO_SUN_EARTH,
    RATIO_EMB_MOON_TO_EARTH_MOON, RATIO_EMB_EARTH_TO_EARTH_MOON,

    ARCMIN: DEG / 60,
    ARCSEC: DEG / 60 / 60,

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

    // Source: https://en.wikipedia.org/wiki/Earth_radius
    RADIUS_EARTH_E: 6378.1370*KM,    // radius of Earth on equator
    RADIUS_EARTH_P: 6356.7523*KM,    // radius of Earth on poles
    RADIUS_EARTH_F: 1.0/298.25642,   // flattening factor
    RADIUS_EARTH: 6371.0*KM,         // radius of Earth on average

    EARTH_LOC_DICT: {
        'Helsinki': [60.167*DEG, 24.942*DEG],
        'London': [51.5*DEG, -0.1*DEG],
        'New York': [40.7*DEG, -74.0*DEG],
        'Wellington': [-41.3*DEG, 174.8*DEG],
        'Fairbanks': [64.84*DEG, -147.72*DEG],
        'Singapore': [1.34*DEG, 103.8*DEG],
        'Kaffeklubben Island': [83.66*DEG,-30.61*DEG],
        'North Pole': [90.0*DEG, 0],
        'South Pole': [-90.0*DEG, 0]
    },
}

export { cst };