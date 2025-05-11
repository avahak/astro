/**
 * Helper math functions.
 */
import { cst } from '../constants';
import { ENUBasis, GeoLocation } from '../types';
import { Vec } from './vec';

/**
 * Adds two velocities according to special relativity (Einstein velocity addition \oplus).
 * NOTE This is not commutative.
 * 
 * @param v - The velocity of frame S' with respect to frame S (|v| < c)
 * @param w - The velocity of a particle in frame S' (|w| <= c)
 * @returns The velocity of the particle in frame S (v \oplus w)
 */
function oplus(v: number[], w: number[]): number[] {
    if (v.length !== 3 || w.length !== 3)
        throw new Error('Vectors in oplus need to have length 3.')
    const CC = cst.C ** 2;
    const vv = Vec.dot(v, v) / CC;
    const vw = Vec.dot(v, w) / CC;

    const c1 = Math.sqrt(1 - vv);
    const c2 = 1 / (1 + vw);

    const cw = Vec.scale(w, c2*c1);
    const cv = Vec.scale(v, c2 + c2*vw/(c1+1));
    return Vec.add(cw, cv);
}

/**
 * Computes the ENU (East-North-Up) basis vectors at given location.
 * 
 * Sources:
 * https://gssc.esa.int/navipedia/index.php/Transformations_between_ECEF_and_ENU_coordinates
 * https://en.wikipedia.org/wiki/Geographic_coordinate_conversion#From_ECEF_to_ENU
 */
function enuBasisFromSpherical(alt: number, az: number): ENUBasis {
    const [cl, sl] = [Math.cos(alt), Math.sin(alt)];
    const [ch, sh] = [Math.cos(az), Math.sin(az)];

    // Up: Geodetic normal vector (points from Earth's center to observer)
    // East: Tangent to the local latitude circle (perpendicular to Earth's pole)
    // North: n=u\times e, ensures right-handed system
    // Derivation: take cartesian position written using spherical coordinates 
    // and differentiate w.r.t. each spherical coordinate and normalize.
    const e = [-sh, ch, 0];
    const n = [-sl*ch, -sl*sh, cl];
    const u = [cl*ch, cl*sh, sl];

    return { 'e': e, 'n': n, 'u': u };
}

/**
 * Returns east, north, up (ENU) tangent plane orthonormal 
 * basis at p on the sphere of radius |p|
 */
function enuBasisFromCartesian(p: number[]): ENUBasis {
    const u = Vec.normalize(p);
    const e = Vec.normalize(Vec.cross([0, 0, 1], u));
    const n = Vec.cross(u, e);
    return { e, n, u };
}

/**
 * Returns geocentric rectangular coordinates from geodetic coordinates.
 * 
 * Source: IAUCircular179.pdf, p.63
 */
function rectangularFromGeodetic(geo: GeoLocation): number[] {
    const f = cst.RADIUS_EARTH_F;
    const s = (1-f)**2;
    const c = 1 / Math.sqrt(Math.cos(geo.lat)**2 + s*Math.sin(geo.lat)**2);
    return [
        (cst.RADIUS_EARTH_E*c + geo.h)*Math.cos(geo.lat)*Math.cos(geo.lon),
        (cst.RADIUS_EARTH_E*c + geo.h)*Math.cos(geo.lat)*Math.sin(geo.lon),
        (cst.RADIUS_EARTH_E*s*c + geo.h)*Math.sin(geo.lat)
    ];
}


function clamp(x: number, xMin: number, xMax: number) {
    return Math.max(xMin, Math.min(x, xMax));
}

/**
 * Helper function to evaluate a polynomial.
 */
function evaluatePolynomial(coeffs: number[], t: number): number {
    return coeffs.reduce((sum, coeff, index) => sum + coeff*(t**index), 0);
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
    const r = Vec.norm([x, y, z]);
    const theta = Math.asin(z / r);
    const phi = Math.atan2(y, x);
    return [r, theta, phi];
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
    const enu = enuBasisFromCartesian(p);
    const rv = Vec.dot(dp, enu.u);
    const pmRade = [Vec.dot(dp, enu.e)/Math.cos(theta), Vec.dot(dp, enu.n)/r];
    const rade = [phi, theta];
    return [rade, pmRade, r, rv];
}

export { oplus, clamp, evaluatePolynomial, enuBasisFromCartesian, enuBasisFromSpherical,
    cartesianFromSpherical, sphericalFromCartesian, rectangularFromGeodetic,
    trueMotionSphericalToCartesian, trueMotionCartesianToSpherical };