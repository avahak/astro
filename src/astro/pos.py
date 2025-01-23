"""Functions for computing positions from orbital elements
for planets and minor planets.
"""

import numpy as np
import datetime
import matplotlib.pyplot as plt
from math import *

from astro.rewrite import file_op
from astro.core import tools, cst, spherical

def solve_eccentric_anomaly(ma, e):
    """Returns eccentric anomaly given mean anomaly and eccentricity.
    """
    # Solving E from M = E-e*sin E with Newton's method
    # Force M to be in [-pi,pi]:
    ma = ((ma+pi)%(2*pi))-pi
    ea = ma+e*sin(ma)
    dea = 1.0
    while abs(dea) > 1.0e-12:
        dea = (ma-ea+e*sin(ea)) / (1-e*cos(ea))
        ea += dea
    return ea

def ecliptic_pos_from_elements(lan, i, aop, a, e, ma):
    """Returns position of a point in ecliptic coordinates given its Keplerian elements.

    Arguments:
    lan -- Longitude of the ascending node
    i -- Inclination
    aop -- Argument of periapsis
    a -- Semimajor axis
    e -- Eccentricity within [0,1)
    ma -- Mean anomaly
    """
    ea = solve_eccentric_anomaly(ma, e)
    # First compute position of the point on the orbital plane:
    x = a*(cos(ea)-e)
    y = a*sqrt(1.0-e*e)*sin(ea)
    po = tools.z_rotate(np.array([x,y,0.0]), aop)
    # To get from "orbital space" position po to ecliptic space position, 
    # we need two more rotations:
    return tools.z_rotate(tools.x_rotate(po, i), lan)

def planet_pos(target, t):
    """Returns ICRF coordinates for the target object at time t.

    Arguments:
    target -- 1 (Mercury), 2 (Venus), 3 (EM Barycenter), 4 (Mars), 5 (Jupiter)
              6 (Saturn), 7 (Uranus), 8 (Neptune), 301 (Moon)
    t -- time since J2000.0 in Julian centuries
    """
    # combine best features of lowacc and ppcomp
    # use lowacc for Mercury, Venus, EMB, Mars, Neptune, Pluto and ppcomp for Jupiter, Saturn, Uranus, Moon
    if target in (1, 2, 3, 4, 8, 9):
        # Use lowacc formulas here from "Keplerian Elements for Approximate Positions of the Major Planets"
        ke0 = np.zeros(6)   # a, e, i, mean lon, lon of perihelion, lon of the asc node (lan)
        dke = np.zeros(6)
        if target == 1:     # Mercury
            ke0[:] = 0.38709927, 0.20563593, 7.00497902, 252.25032350, 77.45779628, 48.33076593
            dke[:] = 0.00000037, 0.00001906, -0.00594749, 149472.67411175, 0.16047689, -0.12534081
        elif target == 2:   # Venus
            ke0[:] = 0.72333566, 0.00677672, 3.39467605, 181.97909950, 131.60246718, 76.67984255
            dke[:] = 0.00000390, -0.00004107, -0.00078890, 58517.81538729, 0.00268329, -0.27769418
        elif target == 3:   # EM Bary
            ke0[:] = 1.00000261, 0.01671123, -0.00001531, 100.46457166, 102.93768193, 0.0
            dke[:] = 0.00000562, -0.00004392, -0.01294668, 35999.37244981, 0.32327364, 0.0
        elif target == 4:   # Mars
            ke0[:] = 1.52371034, 0.09339410, 1.84969142, -4.55343205, -23.94362959, 49.55953891
            dke[:] = 0.00001847, 0.00007882, -0.00813131, 19140.30268499, 0.44441088, -0.29257343
        elif target == 8:   # Neptune
            ke0[:] = 30.06992276, 0.00859048, 1.77004347, -55.12002969, 44.96476227, 131.78422574
            dke[:] = 0.00026291, 0.00005105, 0.00035372, 218.45945325, -0.32241464, -0.00508664
        elif target == 9:   # Pluto
            ke0[:] = 39.48211675, 0.24882730, 17.14001206, 238.92903833, 224.06891629, 110.30393684
            dke[:] = -0.00031596, 0.00005170, 0.00004818, 145.20780515, -0.04062942, -0.01183482
        else:
            return None
        
        ke = ke0 + t*dke
        p = ecliptic_pos_from_elements(ke[5]*cst.DEG, ke[2]*cst.DEG, (ke[4]-ke[5])*cst.DEG, ke[0], ke[1], (ke[3]-ke[4])*cst.DEG)
        return tools.x_rotate(p, 23.43928*cst.DEG)
    else:
        # Use ppcomp here from https://stjarnhimlen.se/comp/ppcomp.html
        d = t*36525 + 1.5
        ep = (23.4393 - 3.563E-7*d)*cst.DEG
        lon_corr_precession = -3.82394E-5*d*cst.DEG     # correction due to precession
        oe0 = np.zeros(6)   # lan, i, aop, a, e, ma
        doe = np.zeros(6)
        if target == 301:   # Moon
            oe0[:] = 125.1228, 5.1454, 318.0634, 60.2666*cst.RADIUS_EARTH, 0.054900, 115.3654
            doe[:] = -0.0529538083, 0.0, 0.1643573223, 0.0, 0.0, 13.0649929509
        elif target == 5:   # Jupiter
            oe0[:] = 100.4542, 1.3030, 273.8777, 5.20256, 0.048498, 19.8950
            doe[:] = 2.76854E-5, -1.557E-7, 1.64505E-5, 0.0, 4.469E-9, 0.0830853001
        elif target == 6:   # Saturn
            oe0[:] = 113.6634, 2.4886, 339.3939, 9.55475, 0.055546, 316.9670
            doe[:] = 2.38980E-5, -1.081E-7, 2.97661E-5, 0.0, -9.499E-9, 0.0334442282
        elif target == 7:   # Uranus
            oe0[:] = 74.0005, 0.7733, 96.6612, 19.18171, 0.047318, 142.5905
            doe[:] = 1.3978E-5, 1.9E-8, 3.0565E-5, -1.55E-8, 7.45E-9, 0.011725806
        else:
            return None

        oe = oe0 + d*doe    # lan, i, aop, a, e, ma
        lan, i, aop, a, e, ma = oe[0]*cst.DEG, oe[1]*cst.DEG, oe[2]*cst.DEG, oe[3], oe[4], oe[5]*cst.DEG

        xh, yh, zh = ecliptic_pos_from_elements(lan, i, aop, a, e, ma)
        r = sqrt(xh*xh + yh*yh + zh*zh)
        lonecl = atan2(yh, xh)
        latecl = atan2(zh, sqrt(xh*xh+yh*yh))

        if target == 301:
            # Moon perturbations
            Ms = (356.0470 + d*0.9856002585)*cst.DEG
            ws = (282.9404 + d*4.70935E-5)*cst.DEG
            Ls = Ms + ws
            L = ma + aop + lan
            D = L - Ls
            F = L - lan
            dlon = (-1.274*sin(ma-2*D) + 0.658*sin(2*D) - 0.186*sin(Ms) - 0.059*sin(2*ma-2*D)
                    -0.057*sin(ma-2*D+Ms) + 0.053*sin(ma+2*D) + 0.046*sin(2*D-Ms) + 0.041*sin(ma - Ms)
                    -0.035*sin(D) - 0.031*sin(ma+Ms) - 0.015*sin(2*F-2*D) + 0.011*sin(ma-4*D))*cst.DEG
            dlat = (-0.173*sin(F-2*D) - 0.055*sin(ma-F-2*D) - 0.046*sin(ma+F-2*D) 
                    +0.033*sin(F+2*D) + 0.017*sin(2*ma+F))*cst.DEG
            dr = (-0.58*cos(ma-2*D) - 0.46*cos(2*D))*cst.RADIUS_EARTH
            lonecl += dlon
            latecl += dlat
            r += dr

        if target in (5, 6, 7):
            # perturbations for Jupiter, Saturn, and Uranus
            Mj = (19.8950 + d*0.0830853001)*cst.DEG
            Ms = (316.9670 + d*0.0334442282)*cst.DEG
            if target == 5:
                # Jupiter
                lonecl += (-0.332*sin(2*Mj-5*Ms-67.6*cst.DEG) - 0.056*sin(2*Mj-2*Ms+21*cst.DEG) 
                        + 0.042*sin(3*Mj-5*Ms+21*cst.DEG) - 0.036*sin(Mj-2*Ms) + 0.022*cos(Mj-Ms)
                        + 0.023*sin(2*Mj-3*Ms+52*cst.DEG) - 0.016*sin(Mj-5*Ms-69*cst.DEG))*cst.DEG
            elif target == 6:
                # Saturn
                lonecl += (+0.812*sin(2*Mj-5*Ms-67.6*cst.DEG) - 0.229*cos(2*Mj-4*Ms-2*cst.DEG)
                        + 0.119*sin(Mj-2*Ms-3*cst.DEG) + 0.046*sin(2*Mj-6*Ms-69*cst.DEG)
                        + 0.014*sin(Mj-3*Ms+32*cst.DEG))*cst.DEG
                latecl += (-0.020*cos(2*Mj-4*Ms-2*cst.DEG) + 0.018*sin(2*Mj-6*Ms-49*cst.DEG))*cst.DEG
            elif target == 7:
                # Uranus
                Mu = (142.5905 + d*0.011725806)*cst.DEG
                lonecl += (+0.040*sin(Ms-2*Mu+6*cst.DEG) + 0.035*sin(Ms-3*Mu+33*cst.DEG) 
                        - 0.015*sin(Mj-Mu+20*cst.DEG))*cst.DEG

        p = spherical.cartesian_from_spherical(r, latecl, lonecl+lon_corr_precession)
        return tools.x_rotate(p, ep)

def unpack_date(packed_date):
    """Unpacks a date packed according to https://minorplanetcenter.net/iau/info/PackedDates.html 
    and returns it as tools.Time object.
    """
    alphabet = {}
    for k, x in enumerate('0123456789ABCDEFGHIJKLMNOPQRSTUV'):
        alphabet[x] = k
    code = lambda k: alphabet[packed_date[k]]
    year = code(0)*100 + code(1)*10 + code(2)*1
    return datetime.datetime(year, code(3), code(4), tzinfo=datetime.timezone.utc)

def load_minor_planets():
    """Read minor planets from MINOR PLANET CENTER ORBIT DATABASE (www.minorplanetcenter.org).
    """
    # file_path = R'd:/resources/astro/de/MPCORB_temp.DAT'  # for testing
    file_path = R'd:/resources/astro/de/MPCORB.DAT.gz'
    # All elements refer to ICRF coordinates.
    # H (absolute magnitude (V-band mag if it were 1 AU from the Earth and 1 AU from the Sun and fully illuminated (impossible)) [mag]), 
    # Epoch (epoch in packed form, see https://minorplanetcenter.net/iau/info/PackedDates.html),
    # ma (mean anomaly [deg]), aop (argument of perihelion [deg]), lan (longitude of the ascending node [deg]),
    # i (inclination to the ecliptic [deg]), e (orbital eccentricity [1]), n (mean daily motion [deg/day]), a (semimajor axis [AU]),
    # Desig (readable designation)
    fields = (('H',9,13,'f'), ('Epoch',21,25), ('ma',27,35,'f'), ('aop',38,46,'f'), ('lan',49,57,'f'), 
              ('i',60,68,'f'), ('e',71,79,'f'), ('n',81,91,'f'), ('a',93,103,'f'), ('num',167,174), ('Desig',176,194))
    with file_op.gzip_open(file_path, 'rt', encoding='utf-8') as f:
        mpcorb = file_op.read_fixed_length_format(f, fields, ())

    data = []
    for row in mpcorb:
        for field in ('ma', 'aop', 'lan', 'i', 'e', 'n', 'a'):
            if not np.isfinite(row[field]):
                break
        else:
            t = tools.Time(unpack_date(row['Epoch'])).jc_since_j2000()
            c = np.pi/180.0
            num = tools.as_int(row['num'][1:-1],0) if (len(row['num']) > 2) else 0
            data.append((num, row['Desig'], row['H'], t, c*row['ma'], c*row['aop'], 
                    c*row['lan'], c*row['i'], row['e'], 36525.0*c*row['n'], row['a']))
    return np.array(data, dtype=[('num','i'), ('name','O'), ('H','f8'), ('t','f8'), ('ma','f8'), ('aop','f8'), 
            ('lan','f8'), ('i','f8'), ('e','f8'), ('n','f8'), ('a','f8')])

def minor_planet_pos(data, target, t):
    """Returns ICRF position for a minor planet specified by data[target] at time t.
    """
    row = data[target]
    mean_anomaly = row['ma'] + (t-row['t'])*row['n']
    p = ecliptic_pos_from_elements(row['lan'], row['i'], row['aop'], row['a'], row['e'], mean_anomaly)
    return tools.x_rotate(p, 23.43928*cst.DEG)

def main():
    data = load_minor_planets()
    data_name_index = tools.build_index(data, 'name')

    t = tools.Time.now().jc_since_j2000()
    print(minor_planet_pos(data, data_name_index['Ceres'][0], t))
    print(planet_pos(5, t))

if __name__ == "__main__":
    main()