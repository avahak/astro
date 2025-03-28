/**
 * Helper math functions.
 */

import * as math from 'mathjs';

function clamp(x: number, xMin: number, xMax: number) {
    return Math.max(xMin, Math.min(x, xMax));
}

/**
 * Returns mean, standard deviation, minimum, and maximum of the given vector.
 * NOTE: inefficient but like this for code reference.
 */
function stats(v: number[]): { n: number, mean: number, stdDev: number, min: number, max: number } {
    const n = v.length;
    if (n === 0)
        throw new Error("Input array must not be empty");

    const mean = v.reduce((sum, val) => sum + val, 0) / n;
    const variance = v.reduce((sum, val) => sum + (val - mean)**2, 0) / n;
    const stdDev = Math.sqrt(variance);
    const min = v.reduce((a, b) => Math.min(a, b), v[0]);
    const max = v.reduce((a, b) => Math.max(a, b), v[0]);

    return { n, mean, stdDev, min, max };
}

/**
 * Helper function to evaluate a polynomial.
 */
function evaluatePolynomial(coeffs: number[], t: number): number {
    return coeffs.reduce((sum, coeff, index) => sum + coeff*(t**index), 0);
}

/**
 * Computes the cross product of two 3D vectors.
 */
function cross(v1: number[], v2: number[]): number[] {
    return [
        v1[1]*v2[2] - v1[2]*v2[1],
        v1[2]*v2[0] - v1[0]*v2[2],
        v1[0]*v2[1] - v1[1]*v2[0],
    ];
}

/**
 * Computes the length of a vector.
 */
function length(v: number[]): number {
    const r2 = v.reduce((acc, t) => acc + t*t, 0);
    return Math.sqrt(r2);
}

/**
 * Computes dot product of two vectors.
 */
function dot(v1: number[], v2: number[]): number {
    if (v1.length !== v2.length)
        throw new Error("Invalid input");
    return v1.reduce((acc, t, k) => acc + t*v2[k], 0);
}

/**
 * Returns normalized vector.
 */
function normalize(v: number[]): number[] {
    const mag = length(v);
    return v.map((value) => value / mag);
}

/**
 * 3x3 rotation matrix
 */
function rotationMatrix(k: number, theta: number) {
    const [c, s] = [Math.cos(theta), Math.sin(theta)];
    const [k1, k2] = [(k+1)%3, (k+2)%3];

    const rot = math.identity(3) as math.Matrix;
    rot.subset(math.index(k1, k1), c);
    rot.subset(math.index(k1, k2), -s);
    rot.subset(math.index(k2, k1), s);
    rot.subset(math.index(k2, k2), c);
    return rot;
}

/**
 * Rotates a point around the x-axis by a given angle.
 */
function xRotate(p: number[], theta: number): number[] {
    return [
        p[0],
        p[1]*Math.cos(theta) - p[2]*Math.sin(theta),
        p[1]*Math.sin(theta) + p[2]*Math.cos(theta)
    ];
}

/**
 * Rotates a point around the y-axis by a given angle.
 */
function yRotate(p: number[], theta: number): number[] {
    return [
        p[0]*Math.cos(theta) + p[2]*Math.sin(theta),
        p[1],
        p[2]*Math.cos(theta) - p[0]*Math.sin(theta)
    ];
}

/**
 * Rotates a point around the z-axis by a given angle.
 */
function zRotate(p: number[], theta: number): number[] {
    return [
        p[0]*Math.cos(theta) - p[1]*Math.sin(theta),
        p[0]*Math.sin(theta) + p[1]*Math.cos(theta),
        p[2]
    ];
}

/**
 * Returns Cartesian coordinates given spherical coordinates (r,elevation angle,azimutal angle).
 */
function cartesianFromSpherical(r: number, theta: number, phi: number): number[] {
    const q = r*Math.cos(theta);
    return [q*Math.cos(phi), q*Math.sin(phi), r*Math.sin(theta)];
}

/**
 * Returns spherical coordinates (r,elevation angle,azimutal angle) given Cartesian coordinates.
 */
function sphericalFromCartesian(x: number, y: number, z: number): number[] {
    const r = length([x, y, z]);
    const theta = Math.asin(z / r);
    const phi = Math.atan2(y, x);
    return [r, theta, phi];
}

/**
 * Returns east, north, up (ENU) tangent plane orthonormal 
 * basis at p on the sphere of radius |p|
 */
function sphereTangentPlaneBasisENU(p: number[]): [number[], number[], number[]] {
    const uUp = normalize(p);
    const uEast = normalize(cross([0, 0, 1], uUp));
    const uNorth = cross(uUp, uEast);
    return [uEast, uNorth, uUp];
}

/**
 * Given RA, DE, proper motion, distance, radial velocity for a star, 
 * returns position and velocity in cartesian coordinates.
 * NOTE pm_rade[0] is change of RA, NOT change of RA*cos(DE)
 */
function trueMotionSphericalToCartesian(
    rade: number[],
    pmRade: number[],
    r: number,
    rv: number
): [number[], number[]] {
    const p = cartesianFromSpherical(r, rade[1], rade[0]);
    const sra = Math.sin(rade[0]);
    const cra = Math.cos(rade[0]);
    const sde = Math.sin(rade[1]);
    const cde = Math.cos(rade[1]);

    const dp = [
        cde*cra*rv - p[2]*cra*pmRade[1] - r*sra*cde*pmRade[0],
        cde*sra*rv - p[2]*sra*pmRade[1] + r*cra*cde*pmRade[0],
        sde*rv + r*cde*pmRade[1]
    ];

    return [p, dp];
}

/**
 * Given position and velocity in cartesian coordinates for a star, 
 * returns RA, DE, proper motion, distance, radial velocity.
 * NOTE! pm_rade[0] is change of RA, NOT change of RA*cos(DE)
 */
function trueMotionCartesianToSpherical(
    p: number[],
    dp: number[]
): [number[], number[], number, number] {
    const [r, theta, phi] = sphericalFromCartesian(p[0], p[1], p[2]);
    const [uEast, uNorth, uUp] = sphereTangentPlaneBasisENU(p);
    const rv = dot(dp, uUp);
    const pmRade = [dot(dp, uEast)/Math.cos(theta), dot(dp, uNorth)/r];
    const rade = [phi, theta];
    return [rade, pmRade, r, rv];
}

export { clamp, stats, evaluatePolynomial, cross, length, dot, normalize,
    rotationMatrix, xRotate, yRotate, zRotate, 
    cartesianFromSpherical, sphericalFromCartesian, sphereTangentPlaneBasisENU, 
    trueMotionSphericalToCartesian, trueMotionCartesianToSpherical };