/**
 * Long term (+-200k years) precession model
 * from article: J. Vondrák et al.: New precession expressions, valid for long time intervals.
 * For another JavaScript implementation and test cases see 
 * Greg Miller 2022, https://www.celestialprogramming.com/snippets/precessionVondrak.html
 */

import * as math from "mathjs";
import { cst } from "./constants";
import { cross, evaluatePolynomial, rotationMatrix, normalize, xRotate, length } from "./mathTools";

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
    return xRotate([p, -q, z], EP_J2000);
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
    const v = normalize(equatorPole(t));
    const w = eclipticPole(t);
    const c = normalize(cross(v, w));
    const d = normalize(cross(v, c));
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
        rotationMatrix(2, z),
        rotationMatrix(1, -th), 
        rotationMatrix(2, ze)
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

export { eclipticPole, equatorPole, precessionMatrix };