/**
 * Miscellaneous astronomical formulae.
 */

import { cst } from "./constants";
import { evaluatePolynomial, rotationMatrix } from "./math-tools"
import * as math from 'mathjs';

/**
 * Earth Rotation Angle 
 * Source: IAUCircular179.pdf p16
 */
function ERA(t: number): number {
    const s = (0.7790572732640 + 1.00273781191135448*t*36525) % 1;
    return cst.TAU*s;
}

/**
 * Greenwich mean sidereal time is the hour angle 
 * of the vernal equinox measured from the prime meridian at Greenwich.
 * Source: IAUCircular179.pdf p16
 */
function GMST(t: number): number {
    const gmstCoeffs = [0.014506, 4612.156534, 1.3915817, -0.00000044, -0.000029956, -0.0000000368];
    const gmstPart = evaluatePolynomial(gmstCoeffs, t);
    return (ERA(t) + cst.TAU*gmstPart/15/86400) % cst.TAU;
}

/**
 * Greenwich apparent sidereal time,
 * accounts for the motion of the equinox due to nutation.
 * Source: IAUCircular179.pdf p17, omitted small terms
 * The correction from GMST is really small
 */
function GAST(t: number): number {
    const [ep, , d_psi] = nutation(t);
    const coeffs = [450160.398036, -6962890.5431, 7.4722, 0.007702, -0.00005939];
    const om = evaluatePolynomial(coeffs, t);
    const x = d_psi*Math.cos(ep) + 0.00264096*Math.sin(om) + 0.00006352*Math.sin(2*om);
    return GMST(t) + cst.TAU*x/86400;
}

/**
 * Source: IAUCircular179.pdf p44
 */
function precession(t: number): [number, number, number] {
    const zeCoeffs = [2.650545, 2306.083227, 0.2988499, 0.01801828, -0.000005971, -0.0000003173];
    const zCoeffs = [-2.650545, 2306.077181, 1.0927348, 0.01826837, -0.000028596, -0.0000002904];
    const thCoeffs = [0, 2004.191903, -0.4294934, -0.04182264, -0.000007089, -0.0000001274];

    const ze = evaluatePolynomial(zeCoeffs, t)*cst.ARCSEC;
    const z = evaluatePolynomial(zCoeffs, t)*cst.ARCSEC;
    const th = evaluatePolynomial(thCoeffs, t)*cst.ARCSEC;

    return [ze, z, th];
}

/**
 * Source: Fundamental Astronomy, p39 (N_212.pdf) and 
 * https://www2.mps.mpg.de/homes/fraenz/systems/systems3art/node3.html
 */
function nutation(t: number): [number, number, number] {
    const d = t*36525;
    const epCoeffs = [23.439291111, -0.013004167, -0.000000164, 0.000000504];
    const ep = evaluatePolynomial(epCoeffs, t)*cst.DEG;

    const a1 = (125.0 - 0.05295*d)*cst.DEG;
    const a2 = (200.9 + 1.97129*d)*cst.DEG;

    const d_ep = (0.0026*Math.cos(a1) + 0.0002*Math.cos(a2))*cst.DEG;
    const d_psi = (-0.0048*Math.sin(a1) - 0.0004*Math.sin(a2))*cst.DEG;

    return [ep, d_ep, d_psi];
}

/** 
 * Precession matrix
 */
function precessionMatrix(t: number): math.Matrix {
    const [ze, z, th] = precession(t);
    return math.multiply(
        rotationMatrix(2, z),
        math.multiply(rotationMatrix(1, -th), rotationMatrix(2, ze))
    );
}

/** 
 * Nutation matrix
 */
function nutationMatrix(t: number): math.Matrix {
    const [ep, d_ep, d_psi] = nutation(t);
    return math.multiply(
        rotationMatrix(0, ep+d_ep),
        math.multiply(rotationMatrix(2, d_psi), rotationMatrix(0, -ep))
    );
}

/** 
 * Combined precession and nutation matrix
 */
function nutationPrecessionMatrix(t: number): math.Matrix {
    return math.multiply(nutationMatrix(t), precessionMatrix(t));
}

export { ERA, GMST, GAST, precession, nutation, precessionMatrix, nutationMatrix, 
    nutationPrecessionMatrix };