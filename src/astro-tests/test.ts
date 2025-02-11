/**
 * Comparing precession values to IAU 2006 model and Greg Miller's implementation 
 * of computing precession with the method from article 
 * "J. Vondrák et al.: New precession expressions".
 * 
 * Comparing nutation to the output of the IAU SOFA iauNut00b() routine (from Greg Miller)
 * and to a more basic nutation method.
 */

import * as math from "mathjs";
import { nutationMatrix, precessionMatrix } from "../astro/formulae";
import { length, stats } from "../astro/mathTools";
import { jcFromUnix, unixFromJd, unixFromFractionalYear, unixFromJc, jdFromUnix } from "../astro/time";
import { nutation2000B, nutationMatrix2000B } from "../astro/nutation2000b";
import { NUTATION_TESTS } from "./nutationTests";
import { FRAME_BIAS_MATRIX, ltpPBMAT, eclipticPole, equatorPole, longTermPrecessionMatrix } from "../astro/precessionLong";
import { ltp_PBMAT, precessionTest_GM } from "./precessionGM";

/**
 * Compares values to the IAU SOFA iauNut00b() routine. 
 * Values should be really close to 0 since the code is basically port from Fortran code.
 */
function testNutation1() {
    const errs = [];
    for (let k = 0; k < NUTATION_TESTS.length; k++) {
        const jd = NUTATION_TESTS[k][0];
        const tUnix = unixFromJd(jd);
        const t = jcFromUnix(tUnix);

        const y = nutation2000B(t);
        const z = [NUTATION_TESTS[k][1], NUTATION_TESTS[k][2]];

        const diff_yz = [y[0]-z[0], y[1]-z[1]];
        const err = length(diff_yz) / length(y);
        errs.push(err);
    }
    return errs;
}

/**
 * Compares nutation values to a simpler model, which is
 * applicable for a few centuries around J2000 only.
 */
function testNutation2(yearStart: number, yearEnd: number, yearStep: number) {
    const errs = [];
    for (let year = yearStart; year < yearEnd; year += yearStep) {
        
        const tUnix = unixFromFractionalYear(year);
        const t = jcFromUnix(tUnix);

        const x = nutationMatrix(t).valueOf() as number[][];
        const y = nutationMatrix2000B(t);

        const diff_xy = (math.subtract(y, x).valueOf() as number[][]).flat();
        const err = length(diff_xy) / length((math.subtract(y, math.diag([1, 1, 1])).valueOf() as number[][]).flat());
        errs.push(err);
    }
    return errs;
}

function testNutation() {
    console.log("nutation, error stats 1 (code porting test)", stats(testNutation1()));
    console.log("nutation, error stats 2 (1999 - 2001)", stats(testNutation2(1999, 2001, 0.002)));
    console.log("nutation, error stats 2 (1950 - 2050)", stats(testNutation2(1950, 2050, 0.01)));
    console.log("nutation, error stats 2 (1500 - 2500)", stats(testNutation2(1500, 2500, 0.1)));
    console.log("nutation, error stats 2 (-2000 - 6000)", stats(testNutation2(-2000, 6000, 1)));
    console.log("nutation, error stats 2 (-10000 - 10000)", stats(testNutation2(-10000, 10000, 2)));

    // const t0 = -2;
    const je = -1373.5959534565;
    const t0 = (je - 2000) / 100;
    console.log("jd(t0)", jdFromUnix(unixFromJc(t0)));
    console.log("nutationMatrix(t0)", nutationMatrix(t0).valueOf() as number[][]);
    console.log("nutationMatrix2000B(t0)", nutationMatrix2000B(t0));
}

/**
 * Compare the test case (Julian epoch -1373.5959534565)
 * given in the article to Greg Miller's implementation.
 */
function testPrecession0() {
    precessionTest_GM();

    const je = -1373.5959534565;
    const t = (je - 2000) / 100;
    console.log("FRAME_BIAS_MATRIX", FRAME_BIAS_MATRIX);
    console.log("PECL", eclipticPole(t));
    console.log("PEQU", equatorPole(t));
    console.log("PMAT", longTermPrecessionMatrix(t));
    console.log("PBMAT", ltpPBMAT(t));
}

// Compare the two implementations of the method in "J. Vondrák et al.: New precession expressions".
function testPrecession1() {
    const errs = [];
    for (let year = -200000; year < 200000; year += 50) {
        const t = jcFromUnix(unixFromFractionalYear(year));
        const je = 100*t + 2000;
        const pMat1 = ltpPBMAT(t);
        const pMat2 = [[0,0,0], [0,0,0], [0,0,0]];
        ltp_PBMAT(je, pMat2);

        const diff = math.subtract(pMat2, pMat1).valueOf() as number[][];
        const err = length(diff.flat());
        errs.push(err);
    }
    return errs;
}

/**
 * Compares values to IAU 2006 precession model. 
 * Note that the IAU 2006 precession formula is applicable for maybe 2000+-10k years.
 */
function testPrecession2(yearStart: number, yearEnd: number, yearStep: number) {
    const errs = [];
    for (let year = yearStart; year < yearEnd; year += yearStep) {
        const t = jcFromUnix(unixFromFractionalYear(year));
        const je = 100*t + 2000;
        const pMat1 = ltpPBMAT(t);
        const pMat2 = precessionMatrix(t);

        const diff = math.subtract(pMat2, pMat1).valueOf() as number[][];
        const err = length(diff.flat());
        errs.push(err);
    }
    return errs;
}

function testPrecession() {
    testPrecession0();

    console.log("precession, error stats 1 (code porting test)", stats(testPrecession1()));
    console.log("precession, error stats 2 (1000, 3000)", stats(testPrecession2(1000, 3000, 1)));
    console.log("precession, error stats 2 (-10000, 10000)", stats(testPrecession2(-10000, 10000, 2)));
    console.log("precession, error stats 2 (-20000, 20000)", stats(testPrecession2(-20000, 20000, 5)));
}

function test() {
    testNutation();
    testPrecession();
}

export { test };