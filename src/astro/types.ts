import { PosVel } from "./math/posvel";

/**
 * Position on a sphere, like Earth.
 */
type GeoLocation = {
    lat: number;
    lon: number;
    h: number;          // height above a reference surface
};

type Trajectory = (t: number) => PosVel;

type ENUBasis = { 'e': number[], 'n': number[], 'u': number[] };

export type { GeoLocation, Trajectory, ENUBasis };