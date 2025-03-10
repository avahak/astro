import * as math from "mathjs";
import { cst } from "./constants";
import { horizontalFromGCRS, horizontalFromITRS, TIRSFromGCRS } from "./frames";
import { planetPosition } from "./ephemeris/orbitalElements";

/**
 * Position of Earth in ICRF.
 */
function earthPosition(t: number) {
    const v = planetPosition(301, t)!;
    const p = planetPosition(3, t)!;
    const c = -1/(cst.MASS_RATIO_EARTH_MOON + 1);
    return [p[0]+c*v[0], p[1]+c*v[1], p[2]+c*v[2]];
}

/**
 * Position of a specific location on Earth in ICRF.
 */
function positionFromGeoLocation(location: GeoLocation, t: number) {
    // TODO FIX/CHECK!
    const m = horizontalFromGCRS(location, t);
    const p = earthPosition(t);
    const r = earthRadius(location.lat) + location.h;
    const v = math.multiply(math.transpose(m), [0, 0, r]).valueOf() as number[];
    return null;
    // return [p[0]+v[0], p[1]+v[1], p[2]+v[2]];
}

/**
 * Position of Moon in ICRF.
 */
function moonPosition(t: number) {
    const v = planetPosition(301, t)!;
    const p = planetPosition(3, t)!;
    const c = cst.MASS_RATIO_EARTH_MOON / (cst.MASS_RATIO_EARTH_MOON + 1);
    return [p[0]+c*v[0], p[1]+c*v[1], p[2]+c*v[2]];
}

/**
 * Approximate distance from the center of the Earth to a point on
 * the surface with given latitude.
 * Source: https://en.wikipedia.org/wiki/Earth_radius
 */
function earthRadius(lat: number) {
    const a = cst.RADIUS_EARTH_E;
    const b = cst.RADIUS_EARTH_P;
    const q = (k: number) => ((a**k)*Math.cos(lat))**2 + ((b**k)*Math.sin(lat))**2;
    return Math.sqrt(q(2)/q(1));
}

export { earthPosition, positionFromGeoLocation, moonPosition, earthRadius };