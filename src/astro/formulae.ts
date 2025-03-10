/**
 * Miscellaneous astronomical formulae.
 */

import { cst } from "./constants";
import { evaluatePolynomial, rotationMatrix } from "./mathTools"
import * as math from 'mathjs';
import { nutation } from "./nutation";

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
    const [ep, _, d_psi] = nutation(t);
    const coeffs = [450160.398036, -6962890.5431, 7.4722, 0.007702, -0.00005939];
    const om = evaluatePolynomial(coeffs, t);
    const x = d_psi*Math.cos(ep) + 0.00264096*Math.sin(om) + 0.00006352*Math.sin(2*om);
    return GMST(t) + cst.TAU*x/86400;
}

export { ERA, GMST, GAST };