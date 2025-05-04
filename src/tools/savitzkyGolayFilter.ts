/**
 * Utilities for resampling and smoothing 1D data using Savitzky-Golay filter.
 * Moving averages are a trivial case of SG filter with deg=0.
 * 
 * See
 * https://en.wikipedia.org/wiki/Savitzky%E2%80%93Golay_filter
 */
import * as math from 'mathjs';
import { Vec } from '../astro/math/vec';


/**
 * Compute Savitzky-Golay filter kernels, sufficient for handling the boundary as well.
 * 
 * @param w - Half-window size (e.g., 2 for a window size of 5)
 * @param deg - Degree of the polynomial to fit
 * @param deriv - Derivative order (default 0)
 * @returns List of 2w+1 kernels (each as `number[]`)
 */
function computeSgKernels(w: number, deg: number, deriv: number=0): number[][] {
    const kernels: number[][] = [];
    const windowLength = 2*w + 1;

    for (let k = 0; k < windowLength; k++) {
        // x = [-k, ..., windowLength-k-1]
        const x: number[] = Array.from({ length: windowLength }, (_, j) => j - k);

        // Construct Vandermonde matrix A
        const mat = x.map(val =>
            Array.from({ length: deg+1 }, (_, j) => Math.pow(val, j))
        );

        // Pseudoinverse of A
        const matInv = math.pinv(mat);

        const evalVector = Array(deg+1).fill(0);
        evalVector[deriv] = math.factorial(deriv);

        const kernel = math.multiply(evalVector, matInv) as number[];
        kernels.push(kernel);
    }

    return kernels;
}


/**
 * Resamples data to uniformly spaced points using Epanechnikov kernel. 
 * Requires `xs` to be sorted.
 */
function uniformlySpacedResample(xs: number[], ys: number[], m: number): [number[], number[]] {
    const n = xs.length;
    const xi: number[] = Array.from({ length: m }, (_, i) => xs[0] + (xs[n-1]-xs[0])*i/(m-1));
    const yi: number[] = new Array(m).fill(0);
    const weights: number[] = new Array(m).fill(0);

    const epanechnikov = (u: number): number => Math.abs(u) <= 1.0 ? 0.75*(1.0-u*u) : 0.0;

    for (let k = 0; k < n; k++) {
        const x = xs[k];
        const t = (x - xi[0]) / (xi[1] - xi[0]);
        const j = Math.floor(t);
        const u = t - j;

        const w0 = epanechnikov(u);
        const w1 = epanechnikov(u - 1.0);

        if (j >= 0 && j < m) {
            yi[j] += ys[k] * w0;
            weights[j] += w0;
        }
        if (j+1 >= 0 && j+1 < m) {
            yi[j+1] += ys[k] * w1;
            weights[j+1] += w1;
        }
    }

    for (let j = 0; j < m; j++) {
        if (weights[j] > 0)
            yi[j] /= weights[j];
        else
            yi[j] = linearInterpolation(xi[j], xs, ys);     // fallback if bucket is empty
    }

    return [xi, yi];
}


/**
 * Uniformly resamples the datapoints and then smoothens using Savitzky-Golay filter.
 */
function applySavitzkyGolayFilter(xs: number[], ys: number[], w: number, deg: number, maxPoints: number=1000): [number[], number[]] {
    const n = xs.length;
    const m = Math.min(n, maxPoints);
    const windowLength = 2*w + 1;

    if (Math.min(m, n) < windowLength)
        throw new Error(`Too few points, at least 2*w+1=${windowLength} needed.`);

    // Sort xs and ys by xs
    const order = xs.map((_, i) => i).sort((a, b) => xs[a]-xs[b]);
    const xsSorted = order.map(i => xs[i]);
    const ysSorted = order.map(i => ys[i]);

    const [xi, yi] = uniformlySpacedResample(xsSorted, ysSorted, m);
    // Simple alternative: direct uniform interpolation
    // const xi = Array.from({ length: m }, (_, i) => xsSorted[0] + (xsSorted[n-1]-xsSorted[0])*i/(m-1));
    // const yi = xi.map(x => linearInterpolation(x, xsSorted, ysSorted));

    const kernels = computeSgKernels(w, deg, 0);

    const ySg = new Array(m).fill(0);

    for (let i = 0; i < m; i++) {
        let kernel: number[];
        let segment: number[];

        if (i < w) {
            kernel = kernels[i];
            segment = yi.slice(0, windowLength);
        } else if (i >= m-w) {
            kernel = kernels[windowLength+i-m];
            segment = yi.slice(m-windowLength);
        } else {
            kernel = kernels[w];
            segment = yi.slice(i-w, i+w+1);
        }

        ySg[i] = Vec.dot(kernel, segment);
    }

    return [xi, ySg];
}


/**
 * Linear interpolation for monotonically increasing sample points.
 */
function linearInterpolation(x: number, xs: number[], ys: number[]): number {
    const n = xs.length;
    if (x <= xs[0]) 
        return ys[0];
    if (x >= xs[n-1]) 
        return ys[n-1];

    let low = 0;
    let high = n - 1;

    while (high - low > 1) {
        const mid = Math.floor((low + high) / 2);
        if (xs[mid] > x)
            high = mid;
        else
            low = mid;
    }

    const x0 = xs[low], x1 = xs[high];
    const y0 = ys[low], y1 = ys[high];
    return y0 + (y1-y0)*(x-x0)/(x1-x0);
}


export { computeSgKernels, applySavitzkyGolayFilter, linearInterpolation, 
    uniformlySpacedResample };