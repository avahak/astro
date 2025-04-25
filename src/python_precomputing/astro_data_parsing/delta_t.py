"""


IMPORTANT! - this has been moved to astro package, most up to date version should be there!





ΔT (TT-UT1) approximation system combining reference data from JPL Horizons and IERS.

Split time into three cases
1. For ancient dates (JD < ~1,450,000): Quadratic polynomial fit to JPL Horizons data
2. For intermediate dates (~1,450,000 < JD < ~2,462,500): Uniform cubic B-spline approximation
   combining JPL (pre-1962) and IERS (post-1962) data with leap second handling
3. For future dates (JD > ~2,462,500): Constant extrapolation

All computations use JD or MJD (offset 2_400_000.5) as time representation. 
Approximation is written to disk as JSON file.

Time conversions:
- TT = UTC + 32.184 + Δleap
- UT1 = TT - Δt
- Δt = -DUT1 + 32.184 + Δleap, where DUT1 = UT1 - UTC



JPL Horizons data:
30. TDB-UT
Difference between the uniform Barycentric Dynamical time-scale and the
Earth-rotation dependent Universal Time. Prior to 1962, the difference is
with respect to UT1 (TDB-UT1) and the 0.002 second maximum amplitude
distinction between TT and TDB is not maintained. For 1962 and later, the
difference is with respect to UTC (TDB-UTC) and periodic terms less than
1.e-6 second are ignored. Values beyond the next July or January 1st may
change if a leap-second is later required by the IERS. Values from the
present date forward through the next ~73 days are predictions. Beyond
that prediction interval, the last prediction is taken as a constant for
all future dates.

  Units: SECONDS

  Labels: TDB-UT
Source: https://ssd.jpl.nasa.gov/horizons/manual.html#observer-table

See also:
https://eclipse.gsfc.nasa.gov/SEhelp/deltaT.html
https://en.wikipedia.org/wiki/%CE%94T_(timekeeping)
"""
from dataclasses import dataclass
import json
from typing import Any, Optional
import numpy as np
from scipy.interpolate import BSpline
from scipy.optimize import curve_fit
import matplotlib.pyplot as plt

FILE_PATH_JPL = R'd:/resources/astro/generated/horizons_reference.json'
FILE_PATH_IERS = R'd:/resources/astro/iers/eopc04_14_IAU2000.62-now.json'
OUTPUT_FILE_PATH = R'd:/resources/astro/generated/delta_t.json'
JD_J2000 = 2_451_545.0
MJD_OFFSET = 2_400_000.5
CUTOFF_JD_PAST = 1_450_000          # -744 (Horizons manual: 9999 BC to 700 BC -10+31.4*T^2)
CUTOFF_JD_FUTURE = 2_462_500        # ~2030
USE_RELATIVE_ERROR = False          # Error type to use in spline fitting
CUTOFF = 2_437_664.0                # Switch point between JPL Horizons data and IERS data

# List of (JD, c0, c1) tuples for TAI-UTC conversion
# Source: https://maia.usno.navy.mil/ser7/tai-utc.dat
TAI_UTC_RAW = [
    # 1961-1972: Rate adjustment periods
    (2437300.5, 1.4228180, 37300.0, 0.001296),
    (2437512.5, 1.3728180, 37300.0, 0.001296),
    (2437665.5, 1.8458580, 37665.0, 0.0011232),
    (2438334.5, 1.9458580, 37665.0, 0.0011232),
    (2438395.5, 3.2401300, 38761.0, 0.001296),
    (2438486.5, 3.3401300, 38761.0, 0.001296),
    (2438639.5, 3.4401300, 38761.0, 0.001296),
    (2438761.5, 3.5401300, 38761.0, 0.001296),
    (2438820.5, 3.6401300, 38761.0, 0.001296),
    (2438942.5, 3.7401300, 38761.0, 0.001296),
    (2439004.5, 3.8401300, 38761.0, 0.001296),
    (2439126.5, 4.3131700, 39126.0, 0.002592),
    (2439887.5, 4.2131700, 39126.0, 0.002592),
    
    # 1972+: Leap seconds (c1=0)
    (2441317.5, 10.0, 41317.0, 0.0),             # 1972 JAN 1
    (2441499.5, 11.0, 41317.0, 0.0),             # 1972 JUL 1
    (2441683.5, 12.0, 41317.0, 0.0),             # 1973 JAN 1
    (2442048.5, 13.0, 41317.0, 0.0),             # 1974 JAN 1
    (2442413.5, 14.0, 41317.0, 0.0),             # 1975 JAN 1
    (2442778.5, 15.0, 41317.0, 0.0),             # 1976 JAN 1
    (2443144.5, 16.0, 41317.0, 0.0),             # 1977 JAN 1
    (2443509.5, 17.0, 41317.0, 0.0),             # 1978 JAN 1
    (2443874.5, 18.0, 41317.0, 0.0),             # 1979 JAN 1
    (2444239.5, 19.0, 41317.0, 0.0),             # 1980 JAN 1
    (2444786.5, 20.0, 41317.0, 0.0),             # 1981 JUL 1
    (2445151.5, 21.0, 41317.0, 0.0),             # 1982 JUL 1
    (2445516.5, 22.0, 41317.0, 0.0),             # 1983 JUL 1
    (2446247.5, 23.0, 41317.0, 0.0),             # 1985 JUL 1
    (2447161.5, 24.0, 41317.0, 0.0),             # 1988 JAN 1
    (2447892.5, 25.0, 41317.0, 0.0),             # 1990 JAN 1
    (2448257.5, 26.0, 41317.0, 0.0),             # 1991 JAN 1
    (2448804.5, 27.0, 41317.0, 0.0),             # 1992 JUL 1
    (2449169.5, 28.0, 41317.0, 0.0),             # 1993 JUL 1
    (2449534.5, 29.0, 41317.0, 0.0),             # 1994 JUL 1
    (2450083.5, 30.0, 41317.0, 0.0),             # 1996 JAN 1
    (2450630.5, 31.0, 41317.0, 0.0),             # 1997 JUL 1
    (2451179.5, 32.0, 41317.0, 0.0),             # 1999 JAN 1
    (2453736.5, 33.0, 41317.0, 0.0),             # 2006 JAN 1
    (2454832.5, 34.0, 41317.0, 0.0),             # 2009 JAN 1
    (2456109.5, 35.0, 41317.0, 0.0),             # 2012 JUL 1
    (2457204.5, 36.0, 41317.0, 0.0),             # 2015 JUL 1
    (2457754.5, 37.0, 41317.0, 0.0)              # 2017 JAN 1
]

# Remove the offsets (3rd column) from TAI_UTC_RAW to get
TAI_UTC = np.array([(jd, c0+(jd-MJD_OFFSET-mjd)*c1, c1) for (jd, c0, mjd, c1) in TAI_UTC_RAW])


@dataclass
class Workspace:
    """
    Dataclass to hold data, constants, and coefficients
    """
    data: Any = None                                # reference data from JPL Horizons, IERS
    cutoff_jd_past: Optional[float] = None          # cutoff jd for using parabola
    cutoff_jd_future: Optional[float] = None        # cutoff jd for using constant
    parabola_c: Optional[tuple] = None              # coefficients for parabola for distant past
    spline: Optional[BSpline] = None                # uniform cubic b-spline
    spline_n: Optional[int] = None                  # spline parameter space is [0,spline_n]
    spline_c: Any = None                            # spline control points
    dt_constant_future: Optional[float] = None      # constant for dt in the future (no data)


def tai_minus_utc(jd):
    """
    Calculate TAI-UTC in seconds for a given Julian Date (JD)
    """
    # Initialize with default value for pre-1961 dates
    c0, c1 = 0.0, 0.0
    low = 0
    high = len(TAI_UTC)
    
    # Binary search to find the correct interval
    while low < high:
        mid = (low + high) // 2
        if jd >= TAI_UTC[mid][0]:
            c0, c1 = TAI_UTC[mid][1], TAI_UTC[mid][2]
            low = mid + 1
        else:
            high = mid
    
    return c0 + c1*(jd-TAI_UTC[low-1][0]) if low > 0 else 0.0


def plot_parabola(ws: Workspace):
    # Generate points for plotting
    jd_early = ws.data[ws.data[:,0] < ws.cutoff_jd_past, 0]
    jd_fit = np.linspace(jd_early.min(), ws.cutoff_jd_past, 100)
    dt_fit = parabola(jd_fit, *ws.parabola_c)
    
    # Plot results
    plt.figure(figsize=(10, 6))
    plt.scatter(ws.data[:,0], ws.data[:,1], s=1, label='All data')
    plt.scatter(jd_early, ws.data[ws.data[:,0] < ws.cutoff_jd_past, 1], s=5, label='Early data')
    plt.plot(jd_fit, dt_fit, 'r-', label=f'Parabola fit')
    plt.xlabel('Julian Date')
    plt.ylabel('ΔT (s)')
    plt.title('Parabola Fit to Early ΔT Data')
    plt.legend()
    plt.grid(True)
    plt.show()

def plot_approximation(ws: Workspace):
    x_jpl = [row[0] for row in ws.data if row[2] == 0]
    y_jpl = [row[1] for row in ws.data if row[2] == 0]
    x_iers = [row[0] for row in ws.data if row[2] == 1]
    y_iers = [row[1] for row in ws.data if row[2] == 1]

    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 8))
    
    ax1.scatter(x_jpl, y_jpl, label='JPL')
    ax1.scatter(x_iers, y_iers, label='IERS')

    # Leap seconds
    # ax1.scatter(LEAP_SECONDS[:,0] + MJD_OFFSET, 32.184 + LEAP_SECONDS[:,1], marker='o', label='Leap second')

    # Approximation curve
    jd_list = np.linspace(ws.data[0,0], ws.data[-1,0], 500000)
    approx_values = np.array([combined_approximation(jd, ws) for jd in jd_list])
    ax1.plot(jd_list, approx_values, 'k-', label='Approximation')
        
    # Spline control points
    ax1.scatter(ws.spline_c[:,0], ws.spline_c[:,1], color='red', marker='x', s=20, linewidth=1, label='Control Points')
        
    # Add vertical cutoff lines
    for ax in [ax1, ax2]:
        ax.axvline(ws.cutoff_jd_past, color='red', linestyle='--', linewidth=0.8, alpha=0.7)
        ax.axvline(ws.cutoff_jd_future, color='red', linestyle='--', linewidth=0.8, alpha=0.7)

    # Error plot
    errors = compute_errors(ws)
    ax2.scatter(errors[:,0], errors[:,1], s=5, c='green', label='errors')
    if USE_RELATIVE_ERROR:
        rel_errors = np.array(errors.copy())
        rel_errors[:,1] = 2*rel_errors[:,1] / (1 + np.abs(ws.data[:,1])/65)
        ax2.scatter(rel_errors[:,0], rel_errors[:,1], s=5, c='blue', label='rel errors')
    ax2.axhline(0, color='gray', linestyle='--')
    ax2.set_ylabel('Error')

    ax1.set_ylabel('Delta T')
    ax1.set_title('Delta T Approximation')
    ax1.legend()
    ax2.legend()
    ax1.set_axisbelow(True)
    ax2.set_axisbelow(True)
    ax1.grid(True)
    ax2.grid(True)
    plt.tight_layout()
    plt.show()


def compute_iers_delta_t(dut1_list_iers):
    delta_t_list = []
    for mjd, dut1 in dut1_list_iers:
        jd = mjd + MJD_OFFSET
        tai_utc = tai_minus_utc(jd)
        tt_minus_ut1 = tai_utc - dut1 + 32.184
        delta_t_list.append((jd, tt_minus_ut1))
    
    return delta_t_list


def combine_jpl_iers_data(data_jpl, data_iers):
    jd_jpl = np.array([float(row['datetime_jd']) for row in data_jpl])
    dt_jpl = np.array([float(row['TDB-UT']) for row in data_jpl])
    
    jd_iers = np.array([row[0] for row in data_iers])
    dt_iers = np.array([row[1] for row in data_iers])
    
    jd_all = np.concatenate([jd_jpl, jd_iers])
    dt_all = np.concatenate([dt_jpl, dt_iers])
    source_all = np.concatenate([np.array([0 for _ in data_jpl]), np.array([1 for _ in data_iers])])
    sort_idx = np.argsort(jd_all)
    
    return np.array([jd_all[sort_idx], dt_all[sort_idx], source_all[sort_idx]]).T


def read_data():
    with open(FILE_PATH_JPL, 'r') as f:
        raw_jpl = json.load(f)
    fields = raw_jpl['fields']
    entries = raw_jpl['entries']
    data_jpl = [dict(zip(fields, row)) for row in entries]
    # Filter out rows between CUTOFF and present day, they are better covered by IERS data.
    data_jpl = [row for row in data_jpl if float(row['datetime_jd']) < CUTOFF or float(row['datetime_jd']) > 2_460_780.5]
    data_jpl = sorted(data_jpl, key=lambda row: float(row['datetime_jd']))

    with open(FILE_PATH_IERS, 'r') as f:
        raw_iers = json.load(f)
    dut1_list_iers = []
    for row in raw_iers['EOP']['data']['timeSeries']:
        mjd = float(row['time']['MJD'])
        if (mjd + MJD_OFFSET < CUTOFF):
            continue
        dut1 = float(row['dataEOP']['UT']['UT1-UTC'])
        dut1_list_iers.append((mjd, dut1))

    data_iers = compute_iers_delta_t(dut1_list_iers)

    data = combine_jpl_iers_data(data_jpl, data_iers)

    return data


def create_spline_from_inner(inner_jds, data):
    """
    Create spline from inner control points with proper padding.
    Also rounds values.
    """
    inner_jds_rounded = np.round(inner_jds)
    inner_dts = np.array([np.round(interpolate_data(data, jd), 3) for jd in inner_jds_rounded])
    c_raw = np.column_stack([inner_jds_rounded, inner_dts])
    
    # Apply padding (2 extra copies at each end for 3 total)
    c = np.vstack([
        [c_raw[0]] * 2,
        c_raw, 
        [c_raw[-1]] * 2
    ])
    
    # Create uniform B-spline
    knots = np.arange(-3, len(c)+1)
    spline = BSpline(knots, c, k=3, extrapolate=False)
    spline_n = len(inner_jds) + 1

    assert len(knots) == len(c) + 3 + 1
    assert spline_n == len(c) - 3
    assert np.allclose(c_raw[0], spline(0))
    assert np.allclose(c_raw[-1], spline(spline_n))
    
    return spline, spline_n, c


def create_spline_iteratively(ws: Workspace, max_n, error_tolerance=0.1, min_jd_spacing=10.0):
    """
    Iterative refinement of spline
    """
    # Initialize with endpoints only
    inner_jds = np.array([ws.cutoff_jd_past, ws.cutoff_jd_future])
    interval_length = np.max(inner_jds) - np.min(inner_jds)
    
    while True:
        spline, spline_n, _ = create_spline_from_inner(inner_jds, ws.data)
        new_points = []
        
        # Process all intervals in parallel
        max_error = 0
        for i in range(len(inner_jds)-1):
            jd_start, jd_end = inner_jds[i], inner_jds[i+1]
            span = jd_end - jd_start
            
            # Skip if interval too small
            if span < min_jd_spacing:
                continue
                
            # Evaluate segment
            mask = (ws.data[:,0] >= jd_start) & (ws.data[:,0] <= jd_end)
            segment_data = ws.data[mask]
            if len(segment_data) == 0:
                continue
                
            t = np.array([evaluate_spline(spline, spline_n, jd) for jd in segment_data[:,0]])
            if USE_RELATIVE_ERROR:
                # Use relative error (but modified since data can have 0 dt)
                # Normalized to be comparable to absolute error when error ~65
                error = np.max(2*np.abs(segment_data[:,1] - t) / (1 + np.abs(segment_data[:,1])/65))
            else:
                # Absolute error
                error = np.max(np.abs(segment_data[:,1] - t))

            max_error = max(error, max_error)
            
            # Mark for subdivision if error exceeds threshold
            if error > error_tolerance:
                new_points.append((jd_start + jd_end)/2)
        
        # Stop if no more subdivisions needed
        if not new_points:
            break

        print(f'Inner points: {len(inner_jds)}, new points: {len(new_points)}, interval length: {interval_length:.3f}d, max error: {max_error:.3f}')
            
        inner_jds = np.sort(np.hstack([new_points, inner_jds]))
        interval_length /= 2
        
        if len(inner_jds) > max_n:
            break
    
    ws.spline, ws.spline_n, ws.spline_c = create_spline_from_inner(inner_jds, ws.data)


def evaluate_spline(spline, spline_n, jd) -> float:
    """Evaluate spline using binary search
    """
    low, high = 0, spline_n
    
    iters_left = 100
    while True:
        mid = (low + high) / 2
        current_jd = spline(mid)[0]
        if current_jd < jd:
            low = mid
        else:
            high = mid
        if iters_left < 0 or abs(current_jd - jd) < 6e-8:
            break
        iters_left -= 1
    if iters_left < 0:
        print('Too many iteration steps', jd, abs(current_jd - jd))
            
    return spline(mid)[1]


def interpolate_data(data, jds):
    """
    Linearly interpolate ΔT from datapoints (vectorized)
    """
    idx = np.searchsorted(data[:,0], jds)
    idx = np.clip(idx, 1, len(data)-1)
    
    jd0 = data[idx-1,0]
    jd1 = data[idx,0]
    dt0 = data[idx-1,1]
    dt1 = data[idx,1]
    
    alpha = (jds - jd0) / (jd1 - jd0)
    return dt0 + alpha * (dt1 - dt0)



def write_output_file(ws: Workspace):
    """
    Write spline control points and leap seconds list to JSON file.
    """
    obj = { 
        'tai_utc': TAI_UTC.tolist(),
        'cutoffs': [ws.cutoff_jd_past, ws.cutoff_jd_future],
        'parabola': [*ws.parabola_c],
        'future_dt': ws.dt_constant_future,
        'spline': ws.spline_c.tolist(),
    }
    for row in obj['spline']:
        row[0] = int(row[0])
    with open(OUTPUT_FILE_PATH, 'w') as f:
        json.dump(obj, f, indent=None, separators=(',', ':'))
    print(f'Wrote file {OUTPUT_FILE_PATH}')

def parabola(x, *coeffs):
    """Parabola function for curve fitting
    """
    return sum(c*np.power(x, k) for k, c in enumerate(coeffs))

def fit_parabola_to_early_data(ws: Workspace):
    """
    Fit parabola to all data points before cutoffs[0]
    """
    # Filter early data
    early_data = ws.data[ws.data[:,0] < ws.cutoff_jd_past]
    jd_early = early_data[:,0]
    dt_early = early_data[:,1]
    
    # Perform curve fitting with initial guess
    initial_guess = [10, 1e-3, 1e-5]
    coeffs, cov = curve_fit(parabola, jd_early, dt_early, p0=initial_guess)

    max_error = np.max(np.abs(dt_early - parabola(jd_early, *coeffs)))
    print(f"Fitted parabola: {coeffs}")
    print(f"Parabola fit max error: {max_error:.3f} seconds")

    ws.parabola_c = coeffs


def combined_approximation(jd, ws: Workspace):
    """
    Final approximation of dt using parabola for distant past, spline in the middle, 
    and constant for future.
    """
    if jd < ws.cutoff_jd_past:
        return parabola(jd, *ws.parabola_c)
    if jd > ws.cutoff_jd_future:
        return ws.dt_constant_future
    return evaluate_spline(ws.spline, ws.spline_n, jd)

def compute_errors(ws: Workspace):
    errors = []
    for jd, dt, _ in ws.data:
        approx_dt = combined_approximation(jd, ws)
        errors.append([jd, dt-approx_dt])
    return np.array(errors)


def main():
    ws = Workspace()            # Store constants and coefficients here

    ws.data = read_data()
    ws.cutoff_jd_past = CUTOFF_JD_PAST
    ws.cutoff_jd_future = CUTOFF_JD_FUTURE

    fit_parabola_to_early_data(ws)
    plot_parabola(ws)

    create_spline_iteratively(ws, 5000, 0.01, 0.1)

    ws.dt_constant_future = ws.spline_c[-1][1]

    print(f'{ws.spline_n=}')
    print(ws)

    plot_approximation(ws)
    write_output_file(ws)


if __name__ == '__main__':
    main()