/**
 * Rotates a point around the x-axis by a given angle.
 * @param {number[]} p - The point as an array [x, y, z].
 * @param {number} theta - The rotation angle in radians.
 * @returns {number[]} The rotated point.
 */
function xRotate(p: number[], theta: number): number[] {
    return [
        p[0],
        p[1] * Math.cos(theta) - p[2] * Math.sin(theta),
        p[1] * Math.sin(theta) + p[2] * Math.cos(theta)
    ];
}

/**
 * Rotates a point around the y-axis by a given angle.
 * @param {number[]} p - The point as an array [x, y, z].
 * @param {number} theta - The rotation angle in radians.
 * @returns {number[]} The rotated point.
 */
function yRotate(p: number[], theta: number): number[] {
    return [
        p[0] * Math.cos(theta) + p[2] * Math.sin(theta),
        p[1],
        p[2] * Math.cos(theta) - p[0] * Math.sin(theta)
    ];
}

/**
 * Rotates a point around the z-axis by a given angle.
 * @param {number[]} p - The point as an array [x, y, z].
 * @param {number} theta - The rotation angle in radians.
 * @returns {number[]} The rotated point.
 */
function zRotate(p: number[], theta: number): number[] {
    return [
        p[0] * Math.cos(theta) - p[1] * Math.sin(theta),
        p[0] * Math.sin(theta) + p[1] * Math.cos(theta),
        p[2]
    ];
}

/**
 * Converts spherical coordinates to Cartesian coordinates.
 * @param {number} r - Radius.
 * @param {number} theta - Elevation angle (in radians).
 * @param {number} phi - Azimuthal angle (in radians).
 * @returns {number[]} The Cartesian coordinates [x, y, z].
 */
function cartesianFromSpherical(r: number, theta: number, phi: number): number[] {
    const q = r * Math.cos(theta);
    return [
        q * Math.cos(phi),
        q * Math.sin(phi),
        r * Math.sin(theta)
    ];
}

/**
 * Converts Cartesian coordinates to spherical coordinates.
 * @param {number} x - X-coordinate.
 * @param {number} y - Y-coordinate.
 * @param {number} z - Z-coordinate.
 * @returns {number[]} The spherical coordinates [r, theta, phi].
 */
function sphericalFromCartesian(x: number, y: number, z: number): number[] {
    const r = Math.sqrt(x * x + y * y + z * z);
    const theta = Math.asin(z / r);
    const phi = Math.atan2(y, x);
    return [r, theta, phi];
}

/**
 * Computes the tangent plane orthonormal basis at a point on the sphere.
 * @param {number[]} p - The point on the sphere as [x, y, z].
 * @returns {[number[], number[], number[]]} The basis vectors: [east, north, up].
 */
function sphereTangentPlaneBasisENU(p: number[]): [number[], number[], number[]] {
    const magnitude = Math.sqrt(p[0] ** 2 + p[1] ** 2 + p[2] ** 2);
    const uUp = p.map((value) => value / magnitude);

    const crossZ = [
        -uUp[1],
        uUp[0],
        0
    ];

    const eastMagnitude = Math.sqrt(crossZ[0] ** 2 + crossZ[1] ** 2 + crossZ[2] ** 2);
    const uEast = crossZ.map((value) => value / eastMagnitude);

    const uNorth = [
        uUp[1] * uEast[2] - uUp[2] * uEast[1],
        uUp[2] * uEast[0] - uUp[0] * uEast[2],
        uUp[0] * uEast[1] - uUp[1] * uEast[0]
    ];

    return [uEast, uNorth, uUp];
}

/**
 * Converts motion from spherical to Cartesian coordinates.
 * @param {number[]} rade - The RA and DE as [RA, DE] in radians.
 * @param {number[]} pmRade - Proper motion as [pm_RA, pm_DE].
 * @param {number} r - Distance.
 * @param {number} rv - Radial velocity.
 * @returns {[number[], number[]]} The position and velocity in Cartesian coordinates.
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
        cde * cra * rv - p[2] * cra * pmRade[1] - r * sra * cde * pmRade[0],
        cde * sra * rv - p[2] * sra * pmRade[1] + r * cra * cde * pmRade[0],
        sde * rv + r * cde * pmRade[1]
    ];

    return [p, dp];
}

/**
 * Converts motion from Cartesian to spherical coordinates.
 * @param {number[]} p - Position in Cartesian coordinates [x, y, z].
 * @param {number[]} dp - Velocity in Cartesian coordinates [vx, vy, vz].
 * @returns {[number[], number[], number, number]} The RA, DE, proper motion, distance, and radial velocity.
 */
function trueMotionCartesianToSpherical(
    p: number[],
    dp: number[]
): [number[], number[], number, number] {
    const [r, theta, phi] = sphericalFromCartesian(p[0], p[1], p[2]);
    const [uEast, uNorth, uUp] = sphereTangentPlaneBasisENU(p);

    const rv = dp[0] * uUp[0] + dp[1] * uUp[1] + dp[2] * uUp[2];
    const pmRade = [
        (dp[0] * uEast[0] + dp[1] * uEast[1] + dp[2] * uEast[2]) / Math.cos(theta),
        (dp[0] * uNorth[0] + dp[1] * uNorth[1] + dp[2] * uNorth[2]) / r
    ];
    const rade = [phi, theta];

    return [rade, pmRade, r, rv];
}
