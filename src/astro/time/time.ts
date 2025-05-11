/**
 * Various time related functions.
 * Unix timestamp is time in seconds since 00:00:00 UTC on 1 January 1970.
 */

import { cst } from "../constants";
import { evaluatePolynomial } from "../math/mathTools";
import { Vec } from "../math/vec";
import { eclipticPole, equatorPole, precessionMatrix } from "../precession";
import { approximateDeltaT } from "./deltaT";

const JD_J2000 = 2451545;
const JD_B1900 = 2415020.31352;
const UNIX_J2000 = Date.UTC(2000, 0, 1, 12, 0, 0, 0) / 1000;   // 946_728_000
const UNIX_DAY = 24*60*60;
const UNIX_CENTURY = 36525*UNIX_DAY;

/**
 * TODO
 */
class Time {
    static MONTH_NUMBERS: Record<string, number> = {
        Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, 
        Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12
    };
    astro: any;
    readonly jc_utc: number;     // UTC time in jc since J2000.0, only makes sense after 1961
    readonly jc_tdb: number;     // TDB time in jc since J2000.0
    readonly jc_ut1: number;     // UT1 time in jc since J2000.0
    readonly deltaT: number;

    private constructor(astro: any, jc_utc: number, jc_tdb: number, jc_ut1: number, deltaT: number) {
        this.astro = astro;
        this.jc_utc = jc_utc;
        this.jc_tdb = jc_tdb;
        this.jc_ut1 = jc_ut1;
        this.deltaT = deltaT;

        // console.log('jc_utc', this.jc_utc);
        // console.log('jc_tdb', this.jc_tdb);
        // console.log('deltaT', this.deltaT);
        // console.log('jc_ut1', this.jc_ut1);
        // console.log();
    }

    static fromUtc(jc_utc: number, astro: any) {
        const jd_utc = jc_utc*36525 + JD_J2000;
        const taiUtc = Time.taiMinusUtc(jd_utc, astro);
        const jc_tdb = jc_utc + (32.184 + taiUtc)*cst.S;
        const deltaT = approximateDeltaT(jd_utc, astro)*cst.S;
        const jc_ut1 = jc_tdb - deltaT;
        return new Time(astro, jc_utc, jc_tdb, jc_ut1, deltaT);
    }

    static fromTdb(jc_tdb: number, astro: any) {
        // TT = UTC + 32.184 + (TAI-UTC)
        const jd_tdb = jc_tdb*36525 + JD_J2000;
        const deltaT = approximateDeltaT(jd_tdb, astro)*cst.S;
        const jc_ut1 = jc_tdb - deltaT;
        const jd_ut1 = jc_ut1*36525 + JD_J2000;
        const taiUtc = Time.taiMinusUtc(jd_ut1, astro);
        const jc_utc = jc_tdb - (32.184 + taiUtc)*cst.S;
        return new Time(astro, jc_utc, jc_tdb, jc_ut1, deltaT);
    }

    static fromUt1(jc_ut1: number, astro: any) {
        // UT1 = TT - Δt
        // TT = UTC + 32.184 + (TAI-UTC)
        const jd_ut1 = jc_ut1*36525 + JD_J2000;
        const deltaT = approximateDeltaT(jd_ut1, astro)*cst.S;
        const jc_tdb = jc_ut1 + deltaT;
        const taiUtc = Time.taiMinusUtc(jd_ut1, astro);
        const jc_utc = jc_tdb - (32.184 + taiUtc)*cst.S;
        return new Time(astro, jc_utc, jc_tdb, jc_ut1, deltaT);
    }

    /**
     * Here prior to 1962, UT means UT1. After 1962, UT means UTC.
     */
    static fromUt(jc_ut: number, astro: any) {
        if (jc_ut > (2441499.5-JD_J2000)/36525)
            return Time.fromUtc(jc_ut, astro);
        return Time.fromUt1(jc_ut, astro);
    }

    /**
     * Returns time from current UTC time.
     */
    static now(astro: any) {
        const d = new Date();
        const parts = [
            d.getUTCDate(), 
            d.getUTCHours(), 
            d.getUTCMinutes(), 
            d.getUTCSeconds(), 
            d.getUTCMilliseconds()
        ];
        const fDay = parts[0] + (parts[1] + (parts[2] + (parts[3] + parts[4]/1000)/60)/60)/24;
        const jd = Time.jdFromGregorian(d.getUTCFullYear(), d.getUTCMonth() + 1, fDay);
        return Time.fromUtc((jd-JD_J2000)/36525, astro);
    }

    /**
     * Calculate TAI-UTC in seconds for a given Julian Date (JD)
     */
    static taiMinusUtc(jd_utc: number, astro: any): number {
        const taiUtc = astro['delta_t']['tai_utc'];

        let [c0, c1] = [0, 0];
        let low = 0;
        let high = taiUtc.length;
        
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (jd_utc >= taiUtc[mid][0]) {
                [c0, c1] = [taiUtc[mid][1], taiUtc[mid][2]];
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        
        return low > 0 ? c0 + c1*(jd_utc-taiUtc[low-1][0]) : 0;
    }

    /**
     * Earth Rotation Angle 
     * 
     * Source: IAUCircular179.pdf p16
     */
    ERA(): number {
        const s = (0.7790572732640 + 1.00273781191135448*this.jc_ut1*36525) % 1;
        return cst.TAU*s;
    }

    /**
     * Greenwich mean sidereal time is the hour angle 
     * of the vernal equinox measured from the prime meridian at Greenwich.
     * This is IAU 2006 formula.
     * 
     * Source: IAUCircular179.pdf p. 16
     */
    GMST(): number {
        const gmstCoeffs = [0.014506, 4612.156534, 1.3915817, -0.000_000_44, -0.000_029956, -0.000_000_0368];
        // const gmstCoeffs = [0.014506, 4612.156534, 1.3915817];
        const gmstPart = evaluatePolynomial(gmstCoeffs, this.jc_tdb);
        return (this.ERA() + cst.TAU*gmstPart/15/86400) % cst.TAU;
    }

    /**
     * GMST formula, IAU 1982 model.
     * 
     * Source: https://ssd.jpl.nasa.gov/horizons/manual.html (Greenwich Mean Sidereal Time)
     */
    _GMST(): number {
        const x = 67310.548 + (3155760000 + 8640184.812866)*this.jc_ut1 + 0.093104*(this.jc_ut1**2) - 6.2e-6*(this.jc_ut1**3);
        const y = (x / 86400 * cst.TAU) % cst.TAU;
        return y;
    }

    /**
     * Greenwich apparent sidereal time,
     * accounts for the motion of the equinox due to nutation.
     * 
     * Source: IAUCircular179.pdf p. 17, omitted small terms
     */
    GAST(nutation: [number, number, number], gmstFormula: number=0): number {
        const coeffs = [450160.398036, -6962890.5431, 7.4722, 0.007702, -0.00005939];
        const om = evaluatePolynomial(coeffs, this.jc_tdb);
        const x = nutation[2]*Math.cos(nutation[0]);
        const y = cst.TAU/86400*(0.00264096*Math.sin(om) + 0.00006352*Math.sin(2*om));
        return (gmstFormula === 1 ? this._GMST() : this.GMST()) + x + y;
    }

    /**
     * Converts Julian day to Gregorian calendar date.
     * 
     * Sources: Astronomical Algorithms (Meeus), p. 63.
     * @param jd Julian day has to be > -68569.5.
     */
    static gregorianFromJd(jd: number) {
        jd += 0.5;
        const z = Math.floor(jd);
        const f = jd - z;
        const alpha = Math.floor((z - 1_867_216.25) / 36524.25);
        const a = z < 2_299_161 ? z : z + 1 + alpha - Math.floor(alpha/4);
        const b = a + 1524;
        const c = Math.floor((b-122.1) / 365.25);
        const d = Math.floor(365.25 * c)
        const e = Math.floor((b-d) / 30.6001);
        const day = b - d - Math.floor(30.6001*e) + f;
        const month = e < 14 ? e-1 : e-13;
        const year = month > 2 ? c-4716 : c-4715;
        return { year, month, 'day': day };
    }

    /**
     * Convert Gregorian calendar date to Julian day. Here `year` and `month` should 
     * be integers, but `day` can have a fractional part.
     * 
     * Sources: Astronomical Algorithms (Meeus), p. 60-61.
     * Also, Greg Miller's https://www.celestialprogramming.com/julian.html
     */
    static jdFromGregorian(year: number, month: number, day: number): number {
        const canUseGregorian = (year > 1582) || (year === 1582 && (month > 10 || (month === 10 && day >= 5)));
        if (month < 3) {
            month += 12;
            year -= 1;
        }
        const a = Math.floor(year / 100);
        const b = canUseGregorian ? 2 - a + Math.floor(a / 4) : 0;
        const s = Math.floor(365.25*(year + 4716)) + Math.floor(30.61*(month + 1));
        return s + day + b - 1524.5;
    }

    static jdFromStringDate(s: string) {
        let year: number, month: number, day: number, hour: number, minute: number, second: number;

        if (s.startsWith('b')) {
            // Handle BC dates
            s = s.substring(1);
            year = -(Number(s.substring(0, 4)) - 1);
        } else {
            // Handle AD dates
            year = Number(s.substring(0, 4));
        }
        month = Time.MONTH_NUMBERS[s.substring(5, 8)] ?? -1;
        day = Number(s.substring(9, 11));
        hour = Number(s.substring(12, 14));
        minute = Number(s.substring(15, 17));
        second = Number(s.substring(18));
    
        return Time.jdFromGregorian(year, month, day+(hour+(minute+second/60)/60)/24);
    }

    toString(): string {
        const jd = this.jc_utc*36525 + JD_J2000;
        const date = Time.gregorianFromJd(jd);
        return `Time(year=${date.year}, month=${date.month}, day=${date.day.toFixed(9)})`;
    }
}

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
 * NOTE! Years between 0 and 100 are treated as 1900+year.
 */
function unixFromFractionalYear(year: number): number {
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
    const unix1 = unixFromFractionalYear(year1);
    const unix2 = unixFromFractionalYear(year2);
    return unix1 + Math.random()*(unix2 - unix1);
}

export { Time, unixNow, jdFromUnix, unixFromJd, jcFromUnix, unixFromJc, 
    unixFromBesselianEpoch, unixFromFractionalYear, randomUnixBetween };