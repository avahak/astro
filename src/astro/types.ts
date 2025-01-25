/**
 * Position on a sphere, like Earth.
 */
type GeoLocation = {
    lat: number;
    lon: number;
    h: number;          // height above a reference surface
};