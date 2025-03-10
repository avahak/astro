/**
 * Contains rotational elements for some orbiters in the form of 
 * direction of the north pole (ra, dec) and angle defining the prime meridian.
 * 
 * Source: Report of the IAU Working Group on Cartographic Coordinates 
 * and Rotational Elements: 2009
 * 
 * NOTE The equations for W for Jupiter, Saturn, Uranus and Neptune refer to the rotation 
 * of their magnetic fields (System III). On Jupiter, System I (WI=67.1 + 877.900d) refers 
 * to the mean atmospheric equatorial rotation; System II (WII=43.3 + 870.270d) refers to 
 * the mean atmospheric rotation north of the south component of the north equatorial belt, 
 * and south of the north component of the south equatorial belt
 * 
 * Related: https://en.wikipedia.org/wiki/Prime_meridian
 */

import * as math from "mathjs";
import { rotationMatrix } from "../mathTools";
import { cst } from "../constants";

/**
 * Returns (ra,de,W) for the target object at time t. Here (ra,de) is direction of 
 * the north pole and W is angle defining the prime meridian.
 */
function rotationalElements(target: number, t: number) {
    let [ra, de, W] = [0, 0, 0];
    const d = 36525*t;

    if (target == 10) {
        // Sun (NOTE for comparative purposes only, DO NOT USE)
        ra = 286.13;
        de = 63.87;
        W = 84.176 + 14.1844*d;
    } else if (target == 199) {
        // Mercury
        const Wc = [0.00993822, -0.00104581, -0.0001028, -0.00002364, -0.00000532];
        const M = [
            [174.791086, 4.092335],
            [349.582171, 8.18467],
            [164.373257, 12.277005],
            [339.164343, 16.36934],
            [153.955429, 20.461675]
        ];
        const phase = M.map((a) => (a[0] + a[1]*d)*cst.DEG);
        ra = 281.0097 - 0.0328*t;
        de = 61.4143 - 0.0049*t;
        W = 329.5469 + 6.1385025*d + Wc.reduce((acc, v, k) => acc + v*Math.sin(phase[k]), 0);
    } else if (target == 299) {
        // Venus
        ra = 272.76;
        de = 67.16;
        W = 160.2 - 1.4813688*d;
    } else if (target == 399) {
        // Earth (NOTE for comparative purposes only, DO NOT USE)
        ra = -0.641*t;
        de = 90 - 0.557*t;
        W = 190.147 + 360.9856235*d;
    } else if (target == 499) {
        // Mars
        ra = 317.68143 - 0.1061*t
        de = 52.8865 - 0.0609*t
        W = 176.63 + 350.89198226*d
    } else if (target == 599) {
        // Jupiter
        const rac = [0.000117, 0.000938, 0.001432, 0.000030, 0.002150];
        const dec = [0.00005, 0.000404, 0.000617, -0.000013, 0.000926];
        const J = [
            [99.360714, 4850.4046], 
            [175.895369, 1191.9605],
            [300.323162, 262.5475], 
            [114.012305, 6070.2476],
            [49.511251, 64.3000]
        ];
        const phase = J.map((a) => (a[0] + a[1]*d)*cst.DEG);
        ra = 268.056595 - 0.006499*t + rac.reduce((acc, v, k) => acc + v*Math.sin(phase[k]), 0);
        de = 64.495303 + 0.002413*t + dec.reduce((acc, v, k) => acc + v*Math.cos(phase[k]), 0);
        W = 284.95 + 870.536*d;     // System III
        // const W1 = 67.1 + 877.9*d;  // System I
        // const W2 = 43.3 + 870.27*d; // System II
    } else if (target == 699) {
        // Saturn
        ra = 40.589 - 0.036*t;
        de = 83.537 - 0.004*t;
        W = 38.9 + 810.7939024*d;
    } else if (target == 799) {
        // Uranus
        ra = 257.311;
        de = -15.175;
        W = 203.81 - 501.1600928*d;
    } else if (target == 899) {
        // Neptune
        const phase = (357.85 + 52.316*t)*cst.DEG;
        ra = 299.36 + 0.7*Math.sin(phase);
        de = 43.46 - 0.51*Math.cos(phase);
        W = 253.18 + 536.3128492*d - 0.48*Math.sin(phase);
    } else if (target == 301) {
        // Moon
        const rac = [-3.8787, -0.1204, 0.0700, -0.0172, 0, 0.0072, 0, 0, 0, -0.0052, 0, 0, 0.0043];
        const dec = [1.5419, 0.0239, -0.0278, 0.0068, 0, -0.0029, 0.0009, 0, 0, 0.0008, 0, 0, -0.0009];
        const Wc = [3.5610, 0.1208, -0.0642, 0.0158, 0.0252, -0.0066, -0.0047, 
            -0.0046, 0.0028, 0.0052, 0.0040, 0.0019, -0.0044];
        const E = [
            [125.045, -0.0529921],
            [250.089, -0.1059842],
            [260.008, 13.0120009],
            [176.625, 13.3407154],
            [357.529, 0.9856003],
            [311.589, 26.4057084],
            [134.963, 13.0649930],
            [276.617, 0.3287146],
            [34.226, 1.7484877],
            [15.134, -0.1589763],
            [119.743, 0.0036096],
            [239.961, 0.1643573],
            [25.053, 12.9590088]
        ];
        const phase = E.map((a) => (a[0] + a[1]*d)*cst.DEG);
        ra = 269.9949 + 0.0031*t + rac.reduce((acc, v, k) => acc + v*Math.sin(phase[k]), 0);
        de = 66.5392 + 0.0130*t + dec.reduce((acc, v, k) => acc + v*Math.cos(phase[k]), 0);
        W = 38.3213 + 13.17635815*d - 1.4E-12*d*d + Wc.reduce((acc, v, k) => acc + v*Math.sin(phase[k]), 0);
    }

    return [ra*cst.DEG, de*cst.DEG, W*cst.DEG];
}

/**
 * Returns a matrix corresponding to a rotation from GCRS to the given rotational elements.
 * 
 * For rotational elements (ra,de,W)=(0,pi/2,0) iff equatorial plane is the xy-plane, 
 * north pole (or positive pole) is on the positive z-axis and prime meridian 
 * intersects the equatorial plane on positive y-axis. 
 * NOTE Rotation of (0,pi/2,0) corresponds to no rotation w.r.t. ICRF.
 */
function matrixFromRotationalElements(ra: number, de: number, W: number) {
    return math.multiply(
        rotationMatrix(2, ra),
        rotationMatrix(1, Math.PI/2-de),
        rotationMatrix(2, W)
    ).valueOf() as number[][];
}

export { rotationalElements, matrixFromRotationalElements };