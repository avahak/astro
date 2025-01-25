/**
 * - We want transformation ICRF -> ITRS:
 * 
 * ICRF = International Celestial Reference Frame
 *      Origin is barycenter of ssb, ~equatorial coordinates at J2000
 * +no transformation
 * BCRS = Barycentric Celestial Reference System
 * +Lorentz transformation
 * GCRS = Geocentric Celestial Reference System
 * +Precession, Nutation, Frame bias, GAST
 * TIRS = Terrestrial Intermediate Reference System
 * +Polar Motion
 * ITRS = International Terrestrial Reference System.
 * 
 * This is described in detail in IAUCircular179.pdf (see p64).
 */

import * as math from "mathjs";
import { GAST, nutationPrecessionMatrix } from "./formulae";
import { rotationMatrix } from "./math-tools";
import { earthPosition, earthRadius } from "./earth";

function TIRSFromGCRS(t: number) {
    const np = nutationPrecessionMatrix(t);
    const gast = rotationMatrix(2, -GAST(t));       // NOTE! Sign from sign differences in rotation matrices
    return math.multiply(gast, np);
}

function horizontalFromITRS(location: GeoLocation, t: number) {
    const r1 = rotationMatrix(2, -Math.PI/2);
    const r2 = rotationMatrix(1, -Math.PI/2 + location.lat);
    const r3 = rotationMatrix(2, -location.lon);
    return math.multiply(r1, math.multiply(r2, r3));
}

function positionICRFFromGeoLocation(location: GeoLocation, t: number) {
    const lm = horizontalFromITRS(location, t);
    const m = TIRSFromGCRS(t);
    const p = earthPosition(t);
    const r = earthRadius(location.lat);
    const v = math.multiply(math.transpose(math.multiply(lm, m)), [0, 0, r]).valueOf() as number[];
    return [p[0]+v[0], p[1]+v[1], p[2]+v[2]];
}

export { TIRSFromGCRS, horizontalFromITRS, positionICRFFromGeoLocation };