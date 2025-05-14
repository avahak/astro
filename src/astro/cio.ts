/**
 * The CIO locator s, positioning the Celestial Intermediate Origin on
 * the equator of the Celestial Intermediate Pole, given the CIP's X,Y
 * coordinates.
 *
 * See: 
 * - SOFA (Standards of Fundamental Astronomy) software collection
 *   http://iausofa.org/2023_1011_C/sofa/s06.c
 */
import * as math from 'mathjs';
import { cst } from "./constants";
import { evaluatePolynomial } from "./math/mathTools";
import { Vec } from "./math/vec";

// Coefficients for fundamental arguments
const FA_COEFFS = [
    Vec.scale([485868.249036, 1717915923.2178, 31.8792, 0.051635, -0.00024470], cst.ARCSEC),    // Mean anomaly of Moon
    Vec.scale([1287104.793048, 129596581.0481, -0.5532, 0.000136, -0.00001149], cst.ARCSEC),    // Mean anomaly of Sun
    Vec.scale([335779.526232, 1739527262.8478, -12.7512, -0.001037, 0.00000417], cst.ARCSEC),   // Mean argument of latitude of Moon
    Vec.scale([1072260.703692, 1602961601.2090, -6.3706, 0.006593, -0.00003169], cst.ARCSEC),   // Mean elongation of Moon from Sun
    Vec.scale([450160.398036, -6962890.5431, 7.4722, 0.007702, -0.00005939], cst.ARCSEC),       // Mean longitude of Moon's ascending node
    [3.176146697, 1021.3285546211],         // Mean longitude of Venus
    [1.753470314, 628.3075849991],          // Mean longitude of Earth
    [0, 0.024381750, 0.00000538691],        // General accumulated precession in longitude
];

// Polynomial coefficients for s+XY/2
const POLYNOMIAL_COEFFS = [94, 3808.65, -122.68, -72574.11, 27.98, 15.62];

// nfa, sine, cosine coefficients
type Term = [number[], number, number];

// Coefficients for periodic terms of s+XY/2
const PERIODIC_TERMS: Record<number, Term[]> = {
    0: [    // Terms of order t^0
        [[0, 0, 0, 0, 1, 0, 0, 0], -2640.73, 0.39],
        [[0, 0, 0, 0, 2, 0, 0, 0], -63.53, 0.02],
        [[0, 0, 2, -2, 3, 0, 0, 0], -11.75, -0.01],
        [[0, 0, 2, -2, 1, 0, 0, 0], -11.21, -0.01],
        [[0, 0, 2, -2, 2, 0, 0, 0], 4.57, 0],
        [[0, 0, 2, 0, 3, 0, 0, 0], -2.02, 0],
        [[0, 0, 2, 0, 1, 0, 0, 0], -1.98, 0],
        [[0, 0, 0, 0, 3, 0, 0, 0], 1.72, 0],
        [[0, 1, 0, 0, 1, 0, 0, 0], 1.41, 0.01],
        [[0, 1, 0, 0, -1, 0, 0, 0], 1.26, 0.01],
        // 11-20
        [[1, 0, 0, 0, -1, 0, 0, 0], 0.63, 0],
        [[1, 0, 0, 0, 1, 0, 0, 0], 0.63, 0],
        [[0, 1, 2, -2, 3, 0, 0, 0], -0.46, 0],
        [[0, 1, 2, -2, 1, 0, 0, 0], -0.45, 0],
        [[0, 0, 4, -4, 4, 0, 0, 0], -0.36, 0],
        [[0, 0, 1, -1, 1, -8, 12, 0], 0.24, 0.12],
        [[0, 0, 2, 0, 0, 0, 0, 0], -0.32, 0],
        [[0, 0, 2, 0, 2, 0, 0, 0], -0.28, 0],
        [[1, 0, 2, 0, 3, 0, 0, 0], -0.27, 0],
        [[1, 0, 2, 0, 1, 0, 0, 0], -0.26, 0],
        // 21-30
        [[0, 0, 2, -2, 0, 0, 0, 0], 0.21, 0],
        [[0, 1, -2, 2, -3, 0, 0, 0], -0.19, 0],
        [[0, 1, -2, 2, -1, 0, 0, 0], -0.18, 0],
        [[0, 0, 0, 0, 0, 8, -13, -1], 0.10, -0.05],
        [[0, 0, 0, 2, 0, 0, 0, 0], -0.15, 0],
        [[2, 0, -2, 0, -1, 0, 0, 0], 0.14, 0],
        [[0, 1, 2, -2, 2, 0, 0, 0], 0.14, 0],
        [[1, 0, 0, -2, 1, 0, 0, 0], -0.14, 0],
        [[1, 0, 0, -2, -1, 0, 0, 0], -0.14, 0],
        [[0, 0, 4, -2, 4, 0, 0, 0], -0.13, 0],
        // 31-33
        [[0, 0, 2, -2, 4, 0, 0, 0], 0.11, 0],
        [[1, 0, -2, 0, -3, 0, 0, 0], -0.11, 0],
        [[1, 0, -2, 0, -1, 0, 0, 0], -0.11, 0],
    ],
    1: [    // Terms of order t^1
        [[0, 0, 0, 0, 2, 0, 0, 0], -0.07, 3.57],
        [[0, 0, 0, 0, 1, 0, 0, 0], 1.73, -0.03],
        [[0, 0, 2, -2, 3, 0, 0, 0], 0, 0.48],
    ],
    2: [    // Terms of order t^2
        [[0, 0, 0, 0, 1, 0, 0, 0], 743.52, -0.17],
        [[0, 0, 2, -2, 2, 0, 0, 0], 56.91, 0.06],
        [[0, 0, 2, 0, 2, 0, 0, 0], 9.84, -0.01],
        [[0, 0, 0, 0, 2, 0, 0, 0], -8.85, 0.01],
        [[0, 1, 0, 0, 0, 0, 0, 0], -6.38, -0.05],
        [[1, 0, 0, 0, 0, 0, 0, 0], -3.07, 0],
        [[0, 1, 2, -2, 2, 0, 0, 0], 2.23, 0],
        [[0, 0, 2, 0, 1, 0, 0, 0], 1.67, 0],
        [[1, 0, 2, 0, 2, 0, 0, 0], 1.30, 0],
        [[0, 1, -2, 2, -2, 0, 0, 0], 0.93, 0],
        // 11-20
        [[1, 0, 0, -2, 0, 0, 0, 0], 0.68, 0],
        [[0, 0, 2, -2, 1, 0, 0, 0], -0.55, 0],
        [[1, 0, -2, 0, -2, 0, 0, 0], 0.53, 0],
        [[0, 0, 0, 2, 0, 0, 0, 0], -0.27, 0],
        [[1, 0, 0, 0, 1, 0, 0, 0], -0.27, 0],
        [[1, 0, -2, -2, -2, 0, 0, 0], -0.26, 0],
        [[1, 0, 0, 0, -1, 0, 0, 0], -0.25, 0],
        [[1, 0, 2, 0, 1, 0, 0, 0], 0.22, 0],
        [[2, 0, 0, -2, 0, 0, 0, 0], -0.21, 0],
        [[2, 0, -2, 0, -1, 0, 0, 0], 0.20, 0],
        // 21-25
        [[0, 0, 2, 2, 2, 0, 0, 0], 0.17, 0],
        [[2, 0, 2, 0, 2, 0, 0, 0], 0.13, 0],
        [[2, 0, 0, 0, 0, 0, 0, 0], -0.13, 0],
        [[1, 0, 2, -2, 2, 0, 0, 0], -0.12, 0],
        [[0, 0, 2, 0, 0, 0, 0, 0], -0.11, 0],
    ],
    3: [    // Terms of order t^3
        [[0, 0, 0, 0, 1, 0, 0, 0], 0.3, -23.42],
        [[0, 0, 2, -2, 2, 0, 0, 0], -0.03, -1.46],
        [[0, 0, 2, 0, 2, 0, 0, 0], -0.01, -0.25],
        [[0, 0, 0, 0, 2, 0, 0, 0], 0,  0.23],
    ],
    4: [    // Terms of order t^4
        [[0, 0, 0, 0, 1, 0, 0, 0], -0.26, -0.01],
    ]
};


/**
 * Helper function to sum periodic terms
 */
function sumPeriodicTerms(terms: Term[], fa: number[]): number {
    let sum = 0;
    for (const term of terms) {
        const [nfa, s, c] = term;
        const arg = Vec.dot(nfa, fa);
        sum += s*Math.sin(arg) + c*Math.cos(arg);
    }
    return sum;
}


/**
 * Compute the CIO locator s, given the CIP coordinates X,Y
 */
function cioLocator(t: number, x: number, y: number): number {
    // Fundamental arguments at time t
    const fa: number[] = Array(8).map((_, k) => evaluatePolynomial(FA_COEFFS[k], t));

    // Sum the periodic terms series
    const w = Array(5).map((_, k) => sumPeriodicTerms(PERIODIC_TERMS[k], fa));

    // Combine terms and subtract XY/2 to get final s
    const s0 = evaluatePolynomial(POLYNOMIAL_COEFFS, t) + evaluatePolynomial(w, t);
    return s0*1e-6*cst.ARCSEC - x*y/2;
}


/**
 * Returns matrix C that transforms GCRF to CIRF
 * 
 * See: 
 * - High precision methods for locating the celestial intermediate pole and origin,
 *   Capitaine, Wallace, 2006, formulas (3), (4).
 * - IAUCircular179.pdf, p. 64.
 */
function cioMatrix(t: number, npMat: number[][]): number[][] {
    const x = npMat[2][0];
    const y = npMat[2][1];
    const z = npMat[2][2]; // = Math.sqrt(1 - x*x - y*y);
    const s = cioLocator(t, x, y);
    const a = 1 / (1 + z);
    const m: number[][] = [
        [1-a*x*x, -a*x*y, x],
        [-a*x*y, 1-a*y*y, y],
        [-x, -y, 1-a*(x*x+y*y)],
    ];
    return math.multiply(Vec.rotationMatrix(2, s), math.transpose(m)).valueOf() as number[][];
}


/**
 * Computes the equation of origins.
 * 
 * See: 
 * - Precession-nutation procedures consistent with IAU 2006 resolutions, 
 *   Wallace, Capitaine, 2006,
 * - IAU SOFA code for comparison http://iausofa.org/2023_1011_C/sofa/eors.c
 */
function equationOfTheOrigins(t: number, npMat: number[][]) {
    const [x, y, z] = npMat[2];
    const ax = x / (1 + z);
    const sv = [1-ax*x, -y*ax, -x];
    const p = Vec.dot(npMat[0], sv);
    const q = Vec.dot(npMat[1], sv);
    return cioLocator(t, x, y) - Math.atan2(q, p);
}

export { cioLocator, cioMatrix, equationOfTheOrigins };