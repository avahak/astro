"""
Contains various functions tools.
"""
import functools
import time
import numpy as np
import math

import cst

def format_time(t: float) -> str:
    if t >= 3600.0:
        hours = int(t / 3600.0)
        minutes = int((t % 3600.0) / 60.0)
        return f'{hours}h {minutes}min'
    elif t >= 60.0:
        minutes = int(t / 60.0)
        seconds = int(t % 60.0)
        return f'{minutes}min {seconds}s'
    return f'{t:.2g}s'

def time_it(f):
    """
    Writes elapsed time for function execution.
    """
    @functools.wraps(f)
    def wrapper(*pos_args, **keyw_args):
        time0 = time.perf_counter()
        return_value = f(*pos_args, **keyw_args)
        print(f'Function {f.__name__} took {format_time(time.perf_counter()-time0)}.')
        return return_value
    return wrapper

def rotation_matrix(k, theta):
    """
    Rotation matrix. Check sign.
    """
    c, s = np.cos(theta), np.sin(theta)
    rot = np.zeros((3, 3))
    k1, k2 = (k+1) % 3, (k+2) % 3
    rot[k,k] = 1
    rot[k1,k1] = c
    rot[k1,k2] = -s
    rot[k2,k1] = s
    rot[k2,k2] = c
    return rot

def x_rotate(p, theta):
    """Returns p rotated theta radians w.r.t. x-axis.
    """
    return np.array([p[0], p[1]*np.cos(theta)-p[2]*np.sin(theta), p[1]*np.sin(theta)+p[2]*np.cos(theta)])

def y_rotate(p, theta):
    """Returns p rotated theta radians w.r.t. y-axis.
    """
    return np.array([p[0]*np.cos(theta)+p[2]*np.sin(theta), p[1], p[2]*np.cos(theta)-p[0]*np.sin(theta)])

def z_rotate(p, theta):
    """Returns p rotated theta radians w.r.t. z-axis.
    """
    return np.array([p[0]*np.cos(theta)-p[1]*np.sin(theta), p[0]*np.sin(theta)+p[1]*np.cos(theta), p[2]])

def parse_rade(RAh, RAm, RAs, DE_sign, DEd, DEm, DEs):
    """
    Returns (ra, de) converted from hours and degrees into radians.
    """
    ra = (RAh + (RAm + RAs/60.0)/60.0)*np.pi/12.0
    de = (DEd + (DEm + DEs/60.0)/60.0)*np.pi/180.0
    if DE_sign == '-':
        de = -de
    return (ra, de)

def format_angle_ha(ang, digits=1):
    """
    Returns angle as string written in hour angle notation
    with given number of digits.
    """
    ang = (ang%(2.0*np.pi)+2.0*np.pi)%(2.0*np.pi)
    p = 10**digits
    x = math.floor(0.5+p*ang/(np.pi/12/3600))   # int
    h = abs(x)//(3600*p)
    m = (abs(x)-h*3600*p)//(60*p)
    s = abs(x)-h*3600*p-m*60*p
    sign_str = "-" if x < 0 else ""
    return f"{sign_str}{h}h {m}m {s/p:.{digits}f}s"

def format_angle_arc(ang, digits=0):
    """
    Returns angle as string written in deg notation
    with given number of digits.
    """
    p = 10**digits
    x = math.floor(0.5+p*ang/cst.ARCSEC)   # int
    deg = abs(x)//(3600*p)
    m = (abs(x)-deg*3600*p)//(60*p)
    s = abs(x)-deg*3600*p-m*60*p
    sign_str = "-" if x < 0 else ""
    return f"{sign_str}{deg}\u00B0{m}'{s/p:.{digits}f}\""

def draw_sample(table, size):
    """
    Returns a random sample of the rows of the given table.
    """
    rows = np.random.choice(len(table), min(size, len(table)), replace=False)
    return table[rows]

def as_float(text, default_value=float('nan')):
    """
    Returns a float parsed from a string, or default_value if parsing fails.
    """
    try:
        val = float(text)
    except ValueError:
        val = default_value
    return val

def as_int(text, default_value=0):
    """
    Returns an int parsed from a string, or default_value if parsing fails.
    """
    try:
        val = int(text)
    except ValueError:
        val = default_value
    return val

def build_index(table, column_name, ignore=None):
    """
    Returns a dictionary indexing table row numbers by one of its columns. 

    build_index(...).get(column_value) gives a list of all the row numbers 
    that contain column_value in the column column_name.
    """
    index = {}
    for k, table_row in enumerate(table):
        value = table_row[column_name]
        if value != ignore:
            if index.get(value) is None:
                index[value] = []
            index[value].append(k)
    return index

def _test():
    pass

if __name__ == "__main__":
    _test()