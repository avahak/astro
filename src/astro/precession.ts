/**
 * Long term (+-200k years) precession model
 * from article: J. Vondrák et al.: New precession expressions, valid for long time intervals.
 * For another JavaScript implementation and test cases see 
 * Greg Miller 2022, https://www.celestialprogramming.com/snippets/precessionVondrak.html
 */

import * as math from "mathjs";
import { cst } from "./constants";
import { cartesianFromSpherical, evaluatePolynomial, sphereTangentPlaneBasisENU, trueMotionCartesianToSpherical, trueMotionSphericalToCartesian } from "./math/mathTools";
import { Vec } from "./math/vec";

// Axial tilt at J2000.0
const EP_J2000 = 84381.406 * cst.ARCSEC;

// Polynomial coefficients for P and Q from (8) in article
const PQ_POLYNOMIAL = [
    [5851.607687, -0.1189, -0.00028913, 0.000000101], 
    [-1600.8863, 1.1689818, -0.0000002, -0.000000437]
];

// Polynomial coefficients for X and Y from (9) in article
const XY_POLYNOMIAL = [
    [5453.282155, 0.4252841, -0.00037173, -0.000000152],
    [-73750.93035, -0.7675452, -0.00018725, 0.000000231]
];

// Constants for periodic terms of P and Q from Table 1 in article
const PQ_PERIODIC = [
    [708.15, -5486.751211, -684.66156, 667.66673, -5523.863691],
    [2309, -17.127623, 2446.28388, -2354.886252, -549.74745],
    [1620, -617.517403, 399.671049, -428.152441, -310.998056],
    [492.2, 413.44294, -356.652376, 376.202861, 421.535876],
    [1183, 78.614193, -186.387003, 184.778874, -36.776172],
    [622, -180.732815, -316.80007, 335.321713, -145.278396],
    [882, -87.676083, 198.296071, -185.138669, -34.74445],
    [547, 46.140315, 101.135679, -120.97283, 22.885731]
];

// Constants for periodic terms of X and Y from Table 2 in article
const XY_PERIODIC = [
    [256.75, -819.940624, 75004.344875, 81491.287984, 1558.515853],
    [708.15, -8444.676815, 624.033993, 787.163481, 7774.939698],
    [274.2, 2600.009459, 1251.136893, 1251.296102, -2219.534038],
    [241.45, 2755.17563, -1102.212834, -1257.950837, -2523.969396],
    [2309, -167.659835, -2660.66498, -2966.79973, 247.850422],
    [492.2, 871.855056, 699.291817, 639.744522, -846.485643],
    [396.1, 44.769698, 153.16722, 131.600209, -1393.124055],
    [288.9, -512.313065, -950.865637, -445.040117, 368.526116],
    [231.1, -819.415595, 499.754645, 584.522874, 749.045012],
    [1610, -538.071099, -145.18821, -89.756563, 444.704518],
    [620, -189.793622, 558.116553, 524.42963, 235.934465],
    [157.87, -402.922932, -23.923029, -13.549067, 374.049623],
    [220.3, 179.516345, -165.405086, -210.157124, -171.33018],
    [1200, -9.814756, 9.344131, -44.919798, -22.899655]
];

// Helper function for eclipticPole and equatorPole.
function sumTerms(t: number, polynomialTerms: number[][], periodicTerms: number[][]): [number, number] {
    // Sum polynomial terms
    let a1 = evaluatePolynomial(polynomialTerms[0], t);
    let a2 = evaluatePolynomial(polynomialTerms[1], t);

    // Sum periodic terms
    for (let k = 0; k < periodicTerms.length; k++) {
        const arg = t * cst.TAU / periodicTerms[k][0];
        a1 += periodicTerms[k][1]*Math.cos(arg) + periodicTerms[k][3]*Math.sin(arg);
        a2 += periodicTerms[k][2]*Math.cos(arg) + periodicTerms[k][4]*Math.sin(arg);
    }

    return [a1 * cst.ARCSEC, a2 * cst.ARCSEC];
}

/**
 * Ecliptic pole vector
 */
function eclipticPole(t: number): number[] {
    const [p, q] = sumTerms(t, PQ_POLYNOMIAL, PQ_PERIODIC);
    const z = Math.sqrt(Math.max(1 - p*p - q*q, 0));
    return Vec.xRotate([p, -q, z], EP_J2000);
}

/**
 * Equator pole vector
 */
function equatorPole(t: number): number[] {
    const [x, y] = sumTerms(t, XY_POLYNOMIAL, XY_PERIODIC);
    const z = Math.sqrt(Math.max(1 - x*x - y*y, 0));
    return [x, y, z];
}

/**
 * Long-term precession matrix
 */
function precessionLongTermMatrix(t: number): number[][] {
    const v = Vec.normalize(equatorPole(t));
    const w = eclipticPole(t);
    const c = Vec.normalize(Vec.cross(v, w));
    const d = Vec.normalize(Vec.cross(v, c));
    return [c, d, v];
}

/**
 * Source: IAUCircular179.pdf, p44
 */
function precessionBasicMatrix(t: number): math.Matrix {
    const zeCoeffs = [2.650545, 2306.083227, 0.2988499, 0.01801828, -0.000005971, -0.0000003173];
    const zCoeffs = [-2.650545, 2306.077181, 1.0927348, 0.01826837, -0.000028596, -0.0000002904];
    const thCoeffs = [0, 2004.191903, -0.4294934, -0.04182264, -0.000007089, -0.0000001274];

    const ze = evaluatePolynomial(zeCoeffs, t) * cst.ARCSEC;
    const z = evaluatePolynomial(zCoeffs, t) * cst.ARCSEC;
    const th = evaluatePolynomial(thCoeffs, t) * cst.ARCSEC;

    return math.multiply(
        Vec.rotationMatrix(2, z),
        Vec.rotationMatrix(1, -th), 
        Vec.rotationMatrix(2, ze)
    );
}

/**
 * Computes precession matrix at given time
 * @param method Default "long"
 */
function precessionMatrix(t: number, method: "long"|"basic"="long") {
    if (method === "basic")
        return precessionBasicMatrix(t);
    return precessionLongTermMatrix(t);
}

/**
 * Returns precession matrix needed to change epoch from t0 to t1
 */
function _intervalPrecessionMatrix(t0: number, t1: number): number[][] {
    return math.multiply(
        precessionMatrix(t1),
        math.transpose(precessionMatrix(t0))
    ).valueOf() as number[][];
}

/**
 * Computes how position angle changes under precession from t0 to t1.
 * Returns position angle at epoch t1.
 * The position angle is the angle relative to a reference direction (e.g., north) 
 * on the celestial sphere, measured eastward from north.
 */
function precessPa(precessionMatrix: number[][], rade: [number, number], pa: number): number {
    const p = cartesianFromSpherical(1, rade[1], rade[0]);
    const [uEast, uNorth] = sphereTangentPlaneBasisENU(p);
    const dp = Vec.wSum([uNorth, uEast], [Math.cos(pa), Math.sin(pa)]);
    const p1 = Vec.applyMatrix(precessionMatrix, p);
    const dp1 = Vec.applyMatrix(precessionMatrix, dp);
    const [uEast1, uNorth1] = sphereTangentPlaneBasisENU(p1);
    return Math.atan2(Vec.dot(dp1, uEast1), Vec.dot(dp1, uNorth1));
}

/**
 * Given position and velocity for a star at time t0, combine
 * linear motion and precession to compute its position and velocity at t1.
 */
function applyTrueMotionCartesian(
    t0: number,
    t1: number,
    p0: number[],
    v0: number[],
    precessionMatrix: number[][] | null
): [number[], number[]] {
    let p1 = Vec.wSum([p0, v0], [1, t1-t0]);
    p1 = precessionMatrix ? Vec.applyMatrix(precessionMatrix, p1) : p1;
    let v1 = precessionMatrix ? Vec.applyMatrix(precessionMatrix, v0) : v0;
    return [p1, v1];
}

/**
 * Spherical coordinate equivalent of applyTrueMotionCartesian.
 * So, given position and velocity for a star at t0 in rade, pm_rade, r, rv, 
 * use linear motion and precession to return rade, pm_rade, r, rv at t1.
 *
 * Allows r0=null or rv0=null as special cases. In these special cases motion along
 * a great circle of the sphere is used instead of linear motion.
 */
function applyTrueMotionSpherical(
    t0: number,
    t1: number,
    rade0: [number, number],
    pmRade0: [number, number],
    r0: number | null,
    rv0: number | null,
    precessionMatrix: number[][] | null
): [number[], number[], number | null, number | null] {
    // Here we always assume that rade0, pm_rade0 are given and finite
    // but we might be missing r0 or rv0
    if (r0 === null) {
        // No r0: act as if no rv0 given either
        rv0 = null;
    }
    
    if (rv0 === null) {
        // Case: rv0 missing: follow a great circle in the direction of proper motion
        const [p0, dp0] = trueMotionSphericalToCartesian(rade0, pmRade0, 1, 0);
        const lengthDp0 = Vec.norm(dp0);
        
        if (lengthDp0 < 1e-10) {
            // dp0 is very small so just treat it as zero:
            const p1 = precessionMatrix ? Vec.applyMatrix(precessionMatrix, p0) : p0;
            const dp1 = Vec.zeros(3);
            const [rade1, pmRade1] = trueMotionCartesianToSpherical(p1, dp1);
            return [rade1, pmRade1, r0, null];
        } else {
            // Here move on r=1 sphere surface along a great circle
            const deltaT = lengthDp0 * (t1 - t0);
            const q = Vec.wSum([p0, dp0], [Math.cos(deltaT), Math.sin(deltaT)/lengthDp0]);
            const dq = Vec.wSum([p0, dp0], [-lengthDp0*Math.sin(deltaT), Math.cos(deltaT)]);
            const p1 = precessionMatrix ? Vec.applyMatrix(precessionMatrix, q) : q;
            const dp1 = precessionMatrix ? Vec.applyMatrix(precessionMatrix, dq) : dq;
            const [rade1, pmRade1] = trueMotionCartesianToSpherical(p1, dp1);
            return [rade1, pmRade1, r0, null];
        }
    }
    
    // Case: all values given
    const [p0, dp0] = trueMotionSphericalToCartesian(rade0, pmRade0, r0!, rv0);
    let p1 = Vec.wSum([p0, dp0], [1, t1-t0]);
    p1 = precessionMatrix ? Vec.applyMatrix(precessionMatrix, p1) : p1;
    const dp1 = precessionMatrix ? Vec.applyMatrix(precessionMatrix, dp0) : dp0;
    const [rade1, pmRade1, r1, rv1] = trueMotionCartesianToSpherical(p1, dp1);
    return [rade1, pmRade1, r1, rv1];
}


/**
 * Precession matrix from Owen (1990) with coefficients only for -40<=t<=40.
 * 
 * Source: Owen, W. M., Jr., "A Theory of the Earth's Precession Relative to the Invariable 
 * Plane of the Solar System", PhD Dissertation, University of Florida, 1990, p. 245.
 */
function precessionMatrixOwen(t: number) {
    // const DELTA_COEFFS = [0, 5116.1809, 2.92466, -0.005636];
    const DELTA_COEFFS = [
        -1.7997745475347533e-14, 
        5116.1890147545821, 
        2.9247603504428157, 
        -5.6326196820531548e-3, 
        -9.2226948745981497e-5, 
        -2.4515708859606546e-8, 
        2.3106548406850795e-9, 
        8.8345579649427775e-12, 
        -4.3285606007994351e-14, 
        -3.7244008535888019e-16
    ];

    const I0 = 23*3600 + 0*60 + 31.997;
    // const I_COEFFS = [I0, -134.6685, 0.49754, 0.006173];
    const I_COEFFS = [
        82831.996999999998, 
        -134.66870936181825, 
        4.9758299780304608e-1, 
        6.1705421597441326e-3, 
        -1.8571794327493753e-5, 
        -1.2930540672120392e-7, 
        1.2596797631849006e-10, 
        2.7747885594664064e-12, 
        5.2707950955197274e-15, 
        -4.8760926987798460e-17
    ];

    const L0 = 3*3600 + 51*60 + 9.262;
    // const L_COEFFS = [L0, -96.7230, -1.94824, 0.006539];
    const L_COEFFS = [
        13869.262000000001, 
        -96.731815116024752, 
        -1.9475397995104050, 
        6.6275370677766483e-3, 
        7.1172391138639654e-5, 
        -1.7199898887319890e-8, 
        -2.1533502066675072e-9, 
        -7.1770963974344956e-12, 
        4.5035949742291784e-14, 
        3.2314957519653324e-16
    ];

    return math.multiply(
        Vec.rotationMatrix(2, evaluatePolynomial(L_COEFFS, t)*cst.ARCSEC),
        Vec.rotationMatrix(0, evaluatePolynomial(I_COEFFS, t)*cst.ARCSEC),
        Vec.rotationMatrix(2, evaluatePolynomial(DELTA_COEFFS, t)*cst.ARCSEC),
        Vec.rotationMatrix(0, -I0*cst.ARCSEC),
        Vec.rotationMatrix(2, -L0*cst.ARCSEC),
    ).valueOf() as number[][];
}


export { eclipticPole, equatorPole, precessionMatrix,
    precessPa, applyTrueMotionCartesian, applyTrueMotionSpherical, precessionMatrixOwen };