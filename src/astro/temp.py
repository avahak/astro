def x_rotate(p, theta):
    """Returns p rotated theta radians w.r.t. x-axis.
    """
    return np.array([p[0], p[1]*cos(theta)-p[2]*sin(theta), p[1]*sin(theta)+p[2]*cos(theta)])

def y_rotate(p, theta):
    """Returns p rotated theta radians w.r.t. y-axis.
    """
    return np.array([p[0]*cos(theta)+p[2]*sin(theta), p[1], p[2]*cos(theta)-p[0]*sin(theta)])

def z_rotate(p, theta):
    """Returns p rotated theta radians w.r.t. z-axis.
    """
    return np.array([p[0]*cos(theta)-p[1]*sin(theta), p[0]*sin(theta)+p[1]*cos(theta), p[2]])

"""Some spherical geometry helper functions.

NOTE there are differing conventions used with spherical angles, take care with 
using the correct ones.
"""

import numpy as np

def cartesian_from_spherical(r, theta, phi):
    """Returns Cartesian coordinates given spherical coordinates (r,elevation angle,azimutal angle).
    """
    q = r*np.cos(theta)
    return np.array([q*np.cos(phi), q*np.sin(phi), r*np.sin(theta)])

def spherical_from_cartesian(x, y, z):
    """Returns spherical coordinates (r,elevation angle,azimutal angle) given Cartesian coordinates.
    """
    r = np.sqrt(x*x+y*y+z*z)
    theta = np.arcsin(z/r)
    phi = np.arctan2(y, x)
    return np.array([r, theta, phi])

def sphere_tangent_plane_basis_enu(p):
    """Returns east, north, up (ENU) tangent plane orthonormal basis at p on the sphere of radius |p|
    """
    u_up = p / np.linalg.norm(p)
    u_east = np.cross(np.array((0.0,0.0,1.0)), u_up)
    u_east = u_east / np.linalg.norm(u_east)
    u_north = np.cross(u_up, u_east)
    return u_east, u_north, u_up

def true_motion_spherical_to_cartesian(rade, pm_rade, r, rv):
    """Given RA, DE, proper motion, distance, radial velocity for a star, 
    returns position and velocity in cartesian coordinates.

    NOTE pm_rade[0] is change of RA, NOT change of RA*cos(DE)
    """
    p = spherical_to_cartesian(r, rade[1], rade[0])
    sra, cra, sde, cde = np.sin(rade[0]), np.cos(rade[0]), np.sin(rade[1]), np.cos(rade[1])
    dp = np.empty(3)
    dp[0] = cde*cra*rv - p[2]*cra*pm_rade[1] - r*sra*cde*pm_rade[0]
    dp[1] = cde*sra*rv - p[2]*sra*pm_rade[1] + r*cra*cde*pm_rade[0]
    dp[2] = sde*rv + r*cde*pm_rade[1]
    return p, dp

def true_motion_cartesian_to_spherical(p, dp):
    """Given position and velocity in cartesian coordinates for a star, 
    returns RA, DE, proper motion, distance, radial velocity.
    
    NOTE pm_rade[0] is change of RA, NOT change of RA*cos(DE)
    """
    r, theta, phi = cartesian_to_spherical(*p)
    u_east, u_north, u_up = sphere_tangent_plane_basis_enu(p)
    rv = np.dot(dp, u_up)
    pm_rade = np.array((np.dot(dp, u_east)/np.cos(theta), np.dot(dp, u_north))) / r
    rade = np.array((phi, theta))
    return rade, pm_rade, r, rv