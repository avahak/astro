/**
 * Computes approximation to Delta t = TT - UT1.
 */


/**
 * Evaluate uniform cubic B-spline at parameter t
 */
function evaluateSpline(t: number, controlPoints: [number, number][]): [number, number] {
    const m = controlPoints.length - 3;         // spline parameter domain is [0,m]
    if (t < 0 || t > m) 
        return [Number.NaN, Number.NaN];
    
    const k = Math.min(Math.floor(t), m-1);
    const u = t - k;
    const [u2, u3] = [u*u, u*u*u];
    
    const p0 = controlPoints[k];
    const p1 = controlPoints[k+1];
    const p2 = controlPoints[k+2];
    const p3 = controlPoints[k+3];
    
    // Uniform cubic B-spline basis functions
    const b0 = 1 - 3*u + 3*u2 - u3;
    const b1 = 3*u3 - 6*u2 + 4;
    const b2 = -3*u3 + 3*u2 + 3*u + 1;
    
    // Calculate weighted sum
    const x = (b0*p0[0] + b1*p1[0] + b2*p2[0] + u3*p3[0]) / 6;
    const y = (b0*p0[1] + b1*p1[1] + b2*p2[1] + u3*p3[1]) / 6;
    
    return [x, y];
}

/**
 * Computes spline parameter t such that spline(t)=(jd,y) and returns y.
 */
function getSplineYFromX(jd: number, controlPoints: [number, number][]): number {
    let low = 0;
    let high = controlPoints.length - 3;    // domain of spline is [0,controlPoints.length-3]
    let iter = 100;
    
    while (true) {
        const mid = (low + high) / 2;
        const [x, y] = evaluateSpline(mid, controlPoints);
        
        if ((Math.abs(x - jd) < 1e-7) || (iter-- < 0))
            return y;

        low = x < jd ? mid : low;
        high = x < jd ? high : mid;
        
        if (x < jd)
            low = mid;
        else
            high = mid;
    }
}

function parabola(jd: number, coeffs: number[]): number {
    return coeffs[0] + coeffs[1]*jd + coeffs[2]*jd*jd;
    // return coeffs.reduce((acc, v, index) => acc + v*(jd ** index), 0);
}

/**
 * Approximation for \Delta t in seconds.
 */
function approximateDeltaT(jd: number, astro: any) {
    const cutoffs = astro['delta_t']['cutoffs'];
    if (jd < cutoffs[0])
        return parabola(jd, astro['delta_t']['parabola'])
    if (jd > cutoffs[1])
        return astro['delta_t']['future_dt']
    return getSplineYFromX(jd, astro['delta_t']['spline']);
}

export { approximateDeltaT };