"""
Astronomy constants.
"""
from math import pi

DEG = pi/180
ARCMIN = pi/180/60
ARCSEC = pi/180/60/60
HOUR_AS_ANGLE = pi/12
AU = 149597870691       # Au in meters (IAUCircular179.pdf p32)
PC = 2.06265e5          # parsec in AU
LY = 63241              # lightyear in AU
M = 1/AU
KM = 1000*M
S = 1/(36525*24*3600)
C = 299792458*M/S    # speed of light, AU/Julian century (~6.3e6)
G = 6.67430e-11*(M**3)/(S**2)     # gravitational constant