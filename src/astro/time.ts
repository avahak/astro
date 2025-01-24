/**
 * Various time related functions.
 * Unix timestamp is time in seconds since 00:00:00 UTC on 1 January 1970.
 */

const JD_J2000 = 2451545.0;
const JD_B1900 = 2415020.31352;
const UNIX_J2000 = Date.UTC(2000, 0, 1, 12, 0, 0, 0)/1000;   // 946728000
const UNIX_DAY = 24*60*60;
const UNIX_CENTURY = 36525*UNIX_DAY;

/**
 * Returns current Unix timestamp with microseconds precision.
 */
function unixNow(): number {
    return (performance.now() + performance.timeOrigin)/1000;
}

/**
 * Converts Unix timestamp to Julian date.
 */
function jdFromUnix(t: number): number {
    return JD_J2000 + (t-UNIX_J2000)/UNIX_DAY;
}

/**
 * Converts Julian date to Unix timestamp.
 */
function unixFromJd(jd: number): number {
    return UNIX_J2000 + UNIX_DAY*(jd-JD_J2000);
}

/**
 * Converts Unix timestamp to Julian centuries since J2000.
 */
function jcFromUnix(t: number): number {
    return (t-UNIX_J2000)/UNIX_CENTURY;
}

/**
 * Converts Julian centuries since J2000 to Unix timestamp.
 */
function unixFromJc(jc: number): number {
    return UNIX_J2000 + UNIX_CENTURY*jc;
}

/**
 * Returns Unix timestamp corresponding to B(epoch).
 */
function unixFromBesselianEpoch(epoch: number) {
    const jd = JD_B1900 + 365.242198781*(epoch-1900.0);
    return unixFromJd(jd);
}

/**
 * Converts fractional year to Unix timestamp.
 */
function yearToUnixTimestamp(year: number): number {
    const yearFloor = Math.floor(year);
    const yearBegin = Date.UTC(yearFloor, 0, 1, 0, 0, 0, 0)/1000;
    const yearEnd = Date.UTC(yearFloor + 1, 0, 1, 0, 0, 0, 0)/1000;
    return yearBegin + (year - yearFloor)*(yearEnd - yearBegin);
}

/**
 * Returns random Unix timestamp between year1 and year2. The years need not 
 * be integers. 
 * NOTE! Years between 0 and 100 are treated as 1900+year.
 */
function randomUnixBetween(year1: number, year2: number): number {
    const unix1 = yearToUnixTimestamp(year1);
    const unix2 = yearToUnixTimestamp(year2);
    return unix1 + Math.random()*(unix2 - unix1);
}

export { unixNow, jdFromUnix, unixFromJd, jcFromUnix, unixFromJc, 
    unixFromBesselianEpoch, randomUnixBetween };