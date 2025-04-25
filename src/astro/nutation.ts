/**
 * Nutation with IAU 2000B series (only 77 terms compared to 1365 in 2000A).
 * See http://www.iausofa.org/2003_0429/src/nut00b.for
 * Similar code for comparison:
 * Greg Miller 2022, www.celestialprogramming.com/snippets/nutation2000b.html
 */

import * as math from "mathjs";
import { cst } from "./constants";
import { evaluatePolynomial } from "./math/mathTools";
import { Vec } from "./math/vec";

const NUTATION_COEFFS = [ 
    [ 0,  0,  0,  0,  1,     -172064161, -174666,  33386,     92052331,  9086, 15377],
    [ 0,  0,  2, -2,  2,      -13170906,   -1675, -13696,      5730336, -3015, -4587],
    [ 0,  0,  2,  0,  2,       -2276413,    -234,   2796,       978459,  -485,  1374],
    [ 0,  0,  0,  0,  2,        2074554,     207,   -698,      -897492,   470,  -291],
    [ 0,  1,  0,  0,  0,        1475877,   -3633,  11817,        73871,  -184, -1924],
    [ 0,  1,  2, -2,  2,        -516821,    1226,   -524,       224386,  -677,  -174],
    [ 1,  0,  0,  0,  0,         711159,      73,   -872,        -6750,     0,   358],
    [ 0,  0,  2,  0,  1,        -387298,    -367,    380,       200728,    18,   318],
    [ 1,  0,  2,  0,  2,        -301461,     -36,    816,       129025,   -63,   367],
    [ 0, -1,  2, -2,  2,         215829,    -494,    111,       -95929,   299,   132],

    [ 0,  0,  2, -2,  1,         128227,     137,   181,        -68982,    -9,    39],
    [-1,  0,  2,  0,  2,         123457,      11,    19,        -53311,    32,    -4],
    [-1,  0,  0,  2,  0,         156994,      10,  -168,         -1235,     0,    82],
    [ 1,  0,  0,  0,  1,          63110,      63,    27,        -33228,     0,    -9],
    [-1,  0,  0,  0,  1,         -57976,     -63,  -189,         31429,     0,   -75],
    [-1,  0,  2,  2,  2,         -59641,     -11,   149,         25543,   -11,    66],
    [ 1,  0,  2,  0,  1,         -51613,     -42,   129,         26366,     0,    78],
    [-2,  0,  2,  0,  1,          45893,      50,    31,        -24236,   -10,    20],
    [ 0,  0,  0,  2,  0,          63384,      11,  -150,         -1220,     0,    29],
    [ 0,  0,  2,  2,  2,         -38571,      -1,   158,         16452,   -11,    68],

    [ 0, -2,  2, -2,  2,          32481,       0,     0,        -13870,     0,     0],
    [-2,  0,  0,  2,  0,         -47722,       0,   -18,           477,     0,   -25],
    [ 2,  0,  2,  0,  2,         -31046,      -1,   131,         13238,   -11,    59],
    [ 1,  0,  2, -2,  2,          28593,       0,    -1,        -12338,    10,    -3],
    [-1,  0,  2,  0,  1,          20441,      21,    10,        -10758,     0,    -3],
    [ 2,  0,  0,  0,  0,          29243,       0,   -74,          -609,     0,    13],
    [ 0,  0,  2,  0,  0,          25887,       0,   -66,          -550,     0,    11],
    [ 0,  1,  0,  0,  1,         -14053,     -25,    79,          8551,    -2,   -45],
    [-1,  0,  0,  2,  1,          15164,      10,    11,         -8001,     0,    -1],
    [ 0,  2,  2, -2,  2,         -15794,      72,   -16,          6850,   -42,    -5],

    [ 0,  0, -2,  2,  0,          21783,       0,    13,          -167,     0,    13],
    [ 1,  0,  0, -2,  1,         -12873,     -10,   -37,          6953,     0,   -14],
    [ 0, -1,  0,  0,  1,         -12654,      11,    63,          6415,     0,    26],
    [-1,  0,  2,  2,  1,         -10204,       0,    25,          5222,     0,    15],
    [ 0,  2,  0,  0,  0,          16707,     -85,   -10,           168,    -1,    10],
    [ 1,  0,  2,  2,  2,          -7691,       0,    44,          3268,     0,    19],
    [-2,  0,  2,  0,  0,         -11024,       0,   -14,           104,     0,     2],
    [ 0,  1,  2,  0,  2,           7566,     -21,   -11,         -3250,     0,    -5],
    [ 0,  0,  2,  2,  1,          -6637,     -11,    25,          3353,     0,    14],
    [ 0, -1,  2,  0,  2,          -7141,      21,     8,          3070,     0,     4],

    [ 0,  0,  0,  2,  1,          -6302,     -11,     2,          3272,     0,     4],
    [ 1,  0,  2, -2,  1,           5800,      10,     2,         -3045,     0,    -1],
    [ 2,  0,  2, -2,  2,           6443,       0,    -7,         -2768,     0,    -4],
    [-2,  0,  0,  2,  1,          -5774,     -11,   -15,          3041,     0,    -5],
    [ 2,  0,  2,  0,  1,          -5350,       0,    21,          2695,     0,    12],
    [ 0, -1,  2, -2,  1,          -4752,     -11,    -3,          2719,     0,    -3],
    [ 0,  0,  0, -2,  1,          -4940,     -11,   -21,          2720,     0,    -9],
    [-1, -1,  0,  2,  0,           7350,       0,    -8,           -51,     0,     4],
    [ 2,  0,  0, -2,  1,           4065,       0,     6,         -2206,     0,     1],
    [ 1,  0,  0,  2,  0,           6579,       0,   -24,          -199,     0,     2],

    [ 0,  1,  2, -2,  1,           3579,       0,     5,         -1900,     0,     1],
    [ 1, -1,  0,  0,  0,           4725,       0,    -6,           -41,     0,     3],
    [-2,  0,  2,  0,  2,          -3075,       0,    -2,          1313,     0,    -1],
    [ 3,  0,  2,  0,  2,          -2904,       0,    15,          1233,     0,     7],
    [ 0, -1,  0,  2,  0,           4348,       0,   -10,           -81,     0,     2],
    [ 1, -1,  2,  0,  2,          -2878,       0,     8,          1232,     0,     4],
    [ 0,  0,  0,  1,  0,          -4230,       0,     5,           -20,     0,    -2],
    [-1, -1,  2,  2,  2,          -2819,       0,     7,          1207,     0,     3],
    [-1,  0,  2,  0,  0,          -4056,       0,     5,            40,     0,    -2],
    [ 0, -1,  2,  2,  2,          -2647,       0,    11,          1129,     0,     5],

    [-2,  0,  0,  0,  1,          -2294,       0,   -10,          1266,     0,    -4],
    [ 1,  1,  2,  0,  2,           2481,       0,    -7,         -1062,     0,    -3],
    [ 2,  0,  0,  0,  1,           2179,       0,    -2,         -1129,     0,    -2],
    [-1,  1,  0,  1,  0,           3276,       0,     1,            -9,     0,     0],
    [ 1,  1,  0,  0,  0,          -3389,       0,     5,            35,     0,    -2],
    [ 1,  0,  2,  0,  0,           3339,       0,   -13,          -107,     0,     1],
    [-1,  0,  2, -2,  1,          -1987,       0,    -6,          1073,     0,    -2],
    [ 1,  0,  0,  0,  2,          -1981,       0,     0,           854,     0,     0],
    [-1,  0,  0,  1,  0,           4026,       0,  -353,          -553,     0,  -139],
    [ 0,  0,  2,  1,  2,           1660,       0,    -5,          -710,     0,    -2],

    [-1,  0,  2,  4,  2,          -1521,       0,     9,           647,     0,     4],
    [-1,  1,  0,  1,  1,           1314,       0,     0,          -700,     0,     0],
    [ 0, -2,  2, -2,  1,          -1283,       0,     0,           672,     0,     0],
    [ 1,  0,  2,  2,  1,          -1331,       0,     8,           663,     0,     4],
    [-2,  0,  2,  2,  2,           1383,       0,    -2,          -594,     0,    -2],
    [-1,  0,  0,  0,  2,           1405,       0,     4,          -610,     0,     2],
    [ 1,  1,  2, -2,  2,           1290,       0,     0,          -556,     0,     0]
];

/**
 * Coefficients for Earth's axial tilt
 */
const EP_COEFFS = [84381.406, -46.836769, -0.0001831, 0.0020034, -0.000000576, -0.0000000434];

/**
 * IAU 2000B Nutation series with 77 terms.
 */
function nutation2000B(t: number): [number, number, number] {
    const fArgs = [
        // L, Mean anomaly of the Moon
        (485868.249036 + 1717915923.2178*t)*cst.ARCSEC,
        // L', Mean anomaly of the Sun
        (1287104.79305 + 129596581.0481*t)*cst.ARCSEC,
        // F, Mean argument of the latitude of the Moon
        (335779.526232 + 1739527262.8478*t)*cst.ARCSEC,
        // D, Mean elongation of the Moon from the Sun
        (1072260.70369 + 1602961601.2090*t)*cst.ARCSEC,
        // Omega, Mean longitude of the ascending node of the Moon
        (450160.398036 - 6962890.5431*t)*cst.ARCSEC,
    ];

    let dp = 0;
    let de = 0;
    for (let k = NUTATION_COEFFS.length-1; k >= 0; k--) {
        let arg = 0;
        const coeffs = NUTATION_COEFFS[k];
        for (let j = 0; j < fArgs.length; j++)
            arg += fArgs[j] * coeffs[j];
        dp += (coeffs[5] + coeffs[6]*t)*Math.sin(arg) + coeffs[7]*Math.cos(arg);
        de += (coeffs[8] + coeffs[9]*t)*Math.cos(arg) + coeffs[10]*Math.sin(arg);
    }
    de *= 1e-7 * cst.ARCSEC;
    dp *= 1e-7 * cst.ARCSEC;

    // In place of planetary arguments:
    dp += -0.135e-3 * cst.ARCSEC;
    de += 0.388e-3 * cst.ARCSEC;

    // Earth's axial tilt
    const ep = evaluatePolynomial(EP_COEFFS, t) * cst.ARCSEC;

    return [ep, de, dp];
}

/**
 * Creates nutation matrix from nutation parameters. 
 */
function nutationMatrixFromParameters(ep: number, de: number, dp: number): number[][] {
    return math.multiply(
        Vec.rotationMatrix(0, ep + de),
        Vec.rotationMatrix(2, dp), 
        Vec.rotationMatrix(0, -ep)
    ).valueOf() as number[][];
}

/**
 * Basic nutation formula for dates near J2000
 * Source: Fundamental Astronomy, p39 (N_212.pdf)
 */
function nutationBasic(t: number): [number, number, number] {
    const ep = evaluatePolynomial(EP_COEFFS, t) * cst.ARCSEC;
    
    const d = t * 36525;
    const a1 = (125.0 - 0.05295*d) * cst.DEG;
    const a2 = (200.9 + 1.97129*d) * cst.DEG;

    const d_ep = (0.0026*Math.cos(a1) + 0.0002*Math.cos(a2)) * cst.DEG;
    const d_psi = (-0.0048*Math.sin(a1) - 0.0004*Math.sin(a2)) * cst.DEG;

    return [ep, d_ep, d_psi];
}

/**
 * Computes nutation parameters
 * @param method Default "IAU2000B"
 */
function nutation(t: number, method: "IAU2000B"|"basic"="IAU2000B"): [number, number, number] {
    if (method === "basic") 
        return nutationBasic(t);
    return nutation2000B(t);
}

/**
 * Computes nutation matrix
 * @param method Default "IAU2000B"
 */
function nutationMatrix(t: number, method: "IAU2000B"|"basic"="IAU2000B"): number[][] {
    return nutationMatrixFromParameters(...nutation(t, method));
}

export { nutation, nutationMatrix, nutationMatrixFromParameters };