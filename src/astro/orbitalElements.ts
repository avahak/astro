/**
 * Functions for computing positions from orbital elements
 * for planets and minor planets.
 */

import { cst } from "./constants";
import { cartesianFromSpherical, xRotate, zRotate } from "./mathTools";

/**
 * Returns eccentric anomaly given mean anomaly and eccentricity.
 * Solving E from M = E-e*sin E with Newton's method
 */
function solveEccentricAnomaly(ma: number, e: number) {
    // Force M to be in [-pi,pi]:
    ma = (ma%(2*Math.PI) + Math.PI)%(2*Math.PI) - Math.PI;
    let ea = ma + e*Math.sin(ma);
    let dea = 1;
    while (Math.abs(dea) > 1e-12) {
        dea = (ma - ea + e*Math.sin(ea)) / (1 - e*Math.cos(ea));
        ea += dea;
    }
    return ea;
}

/**
 * Returns position of a point in ecliptic coordinates given its Keplerian elements.
 * 
 * @param {number} lan - Longitude of the ascending node
 * @param {number} i - Inclination
 * @param {number} aop - Argument of periapsis
 * @param {number} a - Semimajor axis
 * @param {number} e - Eccentricity within [0,1)
 * @param {number} ma - Mean anomaly
 * @returns {number[]} The position of the point in ecliptic coordinates
 */
function eclipticPositionFromElements(lan: number, i: number, aop: number, a: number, e: number, ma: number): number[] {
    const ea = solveEccentricAnomaly(ma, e);

    // Compute position of the point on the orbital plane
    const x = a*(Math.cos(ea) - e);
    const y = a*Math.sqrt(1 - e*e)*Math.sin(ea);

    // First rotation: Argument of periapsis (z-rotation)
    // Second rotation: Inclination (x-rotation), 
    // Third rotation: Longitude of ascending node (z-rotation)
    return zRotate(xRotate(zRotate([x, y, 0], aop), i), lan);
}

/**
 * Returns ICRF coordinates for the target object at time t.
 * 
 * @param {number} target - 1 (Mercury), 2 (Venus), 3 (EM Barycenter), 4 (Mars), 5 (Jupiter),
 *                          6 (Saturn), 7 (Uranus), 8 (Neptune), 9 (Pluto), 301 (Moon)
 * @param {number} t - time since J2000.0 in Julian centuries
 * @returns {number[] | null} The ICRF coordinates as an array [x, y, z], or null if target is invalid
 */
function planetPosition(target: number, t: number): number[] | null {
    // Use lowacc formulas for Mercury, Venus, EMB, Mars, Neptune, Pluto
    // Use ppcomp formulas for Jupiter, Saturn, Uranus, Moon
    if ([1, 2, 3, 4, 8, 9].includes(target)) {
        let ke0 = new Array(6).fill(0);   // a, e, i, mean lon, lon of perihelion, lon of the asc node (lan)
        let dke = new Array(6).fill(0);
        
        if (target === 1) {     
            // Mercury
            ke0 = [0.38709927, 0.20563593, 7.00497902, 252.25032350, 77.45779628, 48.33076593];
            dke = [0.00000037, 0.00001906, -0.00594749, 149472.67411175, 0.16047689, -0.12534081];
        } else if (target === 2) {   
            // Venus
            ke0 = [0.72333566, 0.00677672, 3.39467605, 181.97909950, 131.60246718, 76.67984255];
            dke = [0.00000390, -0.00004107, -0.00078890, 58517.81538729, 0.00268329, -0.27769418];
        } else if (target === 3) {   
            // EM Bary
            ke0 = [1.00000261, 0.01671123, -0.00001531, 100.46457166, 102.93768193, 0.0];
            dke = [0.00000562, -0.00004392, -0.01294668, 35999.37244981, 0.32327364, 0.0];
        } else if (target === 4) {   
            // Mars
            ke0 = [1.52371034, 0.09339410, 1.84969142, -4.55343205, -23.94362959, 49.55953891];
            dke = [0.00001847, 0.00007882, -0.00813131, 19140.30268499, 0.44441088, -0.29257343];
        } else if (target === 8) {   
            // Neptune
            ke0 = [30.06992276, 0.00859048, 1.77004347, -55.12002969, 44.96476227, 131.78422574];
            dke = [0.00026291, 0.00005105, 0.00035372, 218.45945325, -0.32241464, -0.00508664];
        } else if (target === 9) {   
            // Pluto
            ke0 = [39.48211675, 0.24882730, 17.14001206, 238.92903833, 224.06891629, 110.30393684];
            dke = [-0.00031596, 0.00005170, 0.00004818, 145.20780515, -0.04062942, -0.01183482];
        } else {
            return null;
        }

        const ke = ke0.map((val, index) => val + t*dke[index]);
        const p = eclipticPositionFromElements(
            ke[5]*cst.DEG, 
            ke[2]*cst.DEG, 
            (ke[4] - ke[5])*cst.DEG, 
            ke[0], 
            ke[1], 
            (ke[3] - ke[4])*cst.DEG
        );
        return xRotate(p, 23.43928*cst.DEG);
    } else {
        // Use ppcomp formulas for Jupiter, Saturn, Uranus, Moon
        const d = t*36525 + 1.5;
        const ep = (23.4393 - 3.563E-7*d)*cst.DEG;
        const lonCorrPrecession = -3.82394E-5*d*cst.DEG;     // correction due to precession
        let oe0 = new Array(6).fill(0);   // lan, i, aop, a, e, ma
        let doe = new Array(6).fill(0);

        if (target === 301) {   // Moon
            oe0 = [125.1228, 5.1454, 318.0634, 60.2666*cst.RADIUS_EARTH, 0.054900, 115.3654];
            doe = [-0.0529538083, 0.0, 0.1643573223, 0.0, 0.0, 13.0649929509];
        } else if (target === 5) {   // Jupiter
            oe0 = [100.4542, 1.3030, 273.8777, 5.20256, 0.048498, 19.8950];
            doe = [2.76854E-5, -1.557E-7, 1.64505E-5, 0.0, 4.469E-9, 0.0830853001];
        } else if (target === 6) {   // Saturn
            oe0 = [113.6634, 2.4886, 339.3939, 9.55475, 0.055546, 316.9670];
            doe = [2.38980E-5, -1.081E-7, 2.97661E-5, 0.0, -9.499E-9, 0.0334442282];
        } else if (target === 7) {   // Uranus
            oe0 = [74.0005, 0.7733, 96.6612, 19.18171, 0.047318, 142.5905];
            doe = [1.3978E-5, 1.9E-8, 3.0565E-5, -1.55E-8, 7.45E-9, 0.011725806];
        } else {
            return null;
        }

        const oe = oe0.map((val, index) => val + d*doe[index]);
        const [lan, i, aop, a, e, ma] = [oe[0]*cst.DEG, oe[1]*cst.DEG, oe[2]*cst.DEG, oe[3], oe[4], oe[5]*cst.DEG];

        const [xh, yh, zh] = eclipticPositionFromElements(lan, i, aop, a, e, ma);
        let r = Math.sqrt(xh*xh + yh*yh + zh*zh);
        let lonecl = Math.atan2(yh, xh);
        let latecl = Math.atan2(zh, Math.sqrt(xh*xh + yh*yh));

        if (target === 301) {
            // Moon perturbations
            const Ms = (356.0470 + d*0.9856002585)*cst.DEG;
            const ws = (282.9404 + d*4.70935E-5)*cst.DEG;
            const Ls = Ms + ws;
            const L = ma + aop + lan;
            const D = L - Ls;
            const F = L - lan;
            const dlon = (-1.274*Math.sin(ma-2*D) + 0.658*Math.sin(2*D) - 0.186*Math.sin(Ms) - 0.059*Math.sin(2*ma-2*D)
                - 0.057*Math.sin(ma-2*D+Ms) + 0.053*Math.sin(ma+2*D) + 0.046*Math.sin(2*D-Ms) + 0.041*Math.sin(ma-Ms)
                - 0.035*Math.sin(D) - 0.031*Math.sin(ma+Ms) - 0.015*Math.sin(2*F-2*D) + 0.011*Math.sin(ma-4*D))*cst.DEG;
            const dlat = (-0.173*Math.sin(F-2*D) - 0.055*Math.sin(ma-F-2*D) - 0.046*Math.sin(ma+F-2*D)
                + 0.033*Math.sin(ma-F+D) - 0.017*Math.sin(2*D-F))*cst.DEG;
            const dr = (-0.58*Math.cos(ma-2*D) - 0.46*Math.cos(2*D))*cst.RADIUS_EARTH;

            lonecl += dlon;
            latecl += dlat;
            r += dr;
        }

        if ([5, 6, 7].includes(target)) {
            // perturbations for Jupiter, Saturn, and Uranus
            const Mj = (19.8950 + d*0.0830853001)*cst.DEG;
            const Ms = (316.9670 + d*0.0334442282)*cst.DEG;
            if (target === 5) {
                // Jupiter
                lonecl += (-0.332*Math.sin(2*Mj-5*Ms-67.6*cst.DEG) - 0.056*Math.sin(2*Mj-2*Ms+21*cst.DEG) 
                    + 0.042*Math.sin(3*Mj-5*Ms+21*cst.DEG) - 0.036*Math.sin(Mj-2*Ms) + 0.022*Math.cos(Mj-Ms)
                    + 0.023*Math.sin(2*Mj-3*Ms+52*cst.DEG) - 0.016*Math.sin(Mj-5*Ms-69*cst.DEG))*cst.DEG;
            } else if (target === 6) {
                // Saturn
                lonecl += (+0.812*Math.sin(2*Mj-5*Ms-67.6*cst.DEG) - 0.229*Math.cos(2*Mj-4*Ms-2*cst.DEG)
                    + 0.119*Math.sin(Mj-2*Ms-3*cst.DEG) + 0.046*Math.sin(2*Mj-6*Ms-69*cst.DEG)
                    + 0.014*Math.sin(Mj-3*Ms+32*cst.DEG))*cst.DEG;
                latecl += (-0.020*Math.cos(2*Mj-4*Ms-2*cst.DEG) + 0.018*Math.sin(2*Mj-6*Ms-49*cst.DEG))*cst.DEG;
            } else if (target === 7) {
                // Uranus
                const Mu = (142.5905 + d*0.011725806)*cst.DEG;
                lonecl += (+0.040*Math.sin(Ms-2*Mu+6*cst.DEG) + 0.035*Math.sin(Ms-3*Mu+33*cst.DEG) 
                    - 0.015*Math.sin(Mj-Mu+20*cst.DEG))*cst.DEG;
            }
        }

        const p = cartesianFromSpherical(r, latecl, lonecl+lonCorrPrecession);
        return xRotate(p, ep);
    }
}

export { planetPosition };