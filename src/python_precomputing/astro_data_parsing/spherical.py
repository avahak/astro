"""
Some spherical geometry helper functions.

NOTE there are differing conventions used with spherical angles, take care with 
using the correct ones.
"""
import numpy as np

def cartesian_from_spherical(r, theta, phi):
    """
    Returns Cartesian coordinates given spherical coordinates (r,elevation angle,azimutal angle).
    """
    q = r*np.cos(theta)
    return np.array([q*np.cos(phi), q*np.sin(phi), r*np.sin(theta)])

def spherical_from_cartesian(x, y, z):
    """
    Returns spherical coordinates (r,elevation angle,azimutal angle) given Cartesian coordinates.
    """
    r = np.sqrt(x*x + y*y + z*z)
    theta = np.arcsin(z/r)
    phi = np.arctan2(y, x)
    return np.array([r, theta, phi])

def sphere_tangent_plane_basis_enu(p):
    """
    Returns east, north, up (ENU) tangent plane orthonormal basis at p on the sphere of radius |p|
    """
    u_up = p / np.linalg.norm(p)
    u_east = np.cross(np.array((0.0, 0.0, 1.0)), u_up)
    u_east = u_east / np.linalg.norm(u_east)
    u_north = np.cross(u_up, u_east)
    return u_east, u_north, u_up

def true_motion_spherical_to_cartesian(rade, pm_rade, r, rv):
    """
    Given rade, proper motion of rade, distance, radial velocity for a star, 
    returns position and velocity in cartesian coordinates.

    NOTE pm_rade[0] is change of RA, NOT change of RA*cos(DE)
    """
    p = cartesian_from_spherical(r, rade[1], rade[0])
    sra, cra, sde, cde = np.sin(rade[0]), np.cos(rade[0]), np.sin(rade[1]), np.cos(rade[1])
    dp = np.empty(3)
    dp[0] = cde*cra*rv - p[2]*cra*pm_rade[1] - r*sra*cde*pm_rade[0]
    dp[1] = cde*sra*rv - p[2]*sra*pm_rade[1] + r*cra*cde*pm_rade[0]
    dp[2] = sde*rv + r*cde*pm_rade[1]
    return p, dp

def true_motion_cartesian_to_spherical(p, dp):
    """
    Given position and velocity in cartesian coordinates for a star, 
    returns rade, proper motion of rade, distance, radial velocity.
    
    NOTE pm_rade[0] is change of RA, NOT change of RA*cos(DE)
    """
    r, theta, phi = spherical_from_cartesian(*p)
    u_east, u_north, u_up = sphere_tangent_plane_basis_enu(p)
    rv = np.dot(dp, u_up)
    pm_rade = np.array((np.dot(dp, u_east)/np.cos(theta), np.dot(dp, u_north))) / r
    rade = np.array((phi, theta))
    return rade, pm_rade, r, rv

def _test():
    NUM_CHECKS = 5000
    ERROR_TOLERANCE = 1.0e-12
    # Check if inverses: cartesian_from_spherical, spherical_from_cartesian 
    for k in range(NUM_CHECKS):
        p = np.random.randn(3)
        sp = spherical_from_cartesian(*p)
        p2 = cartesian_from_spherical(*sp)
        error = np.linalg.norm(p-p2)
        assert np.allclose(p, p2, atol=ERROR_TOLERANCE, rtol=0.0), \
            f'Check 1 error too large: {error = }, {p  = }, {sp = }'

    # Check if inverses: true_motion_spherical_to_cartesian, true_motion_cartesian_to_spherical 
    for k in range(NUM_CHECKS):
        p = np.random.randn(3)
        dp = np.random.randn(3)
        rade, pm_rade, r, dr = true_motion_cartesian_to_spherical(p, dp)
        p2, dp2 = true_motion_spherical_to_cartesian(rade, pm_rade, r, dr)
        error = np.linalg.norm(p-p2) + np.linalg.norm(dp-dp2)
        assert np.allclose(p, p2, atol=ERROR_TOLERANCE, rtol=0.0), \
            f'Check 2 error too large: {error = }, {p  = }, {dp = }'
    
    # Check special cases
    assert np.allclose(cartesian_from_spherical(np.sqrt(2.0), np.pi/4.0, 3.0*np.pi/4.0), [-1.0/np.sqrt(2.0), 1.0/np.sqrt(2.0), 1.0])
    rade, pm_rade, r, dr = true_motion_cartesian_to_spherical([0.0, 1.0, 0.0], [1.0, 1.0, 1.0])
    assert np.allclose([*rade, r, *pm_rade, dr], [np.pi/2.0, 0.0, 1.0, -1.0, 1.0, 1.0])

if __name__ == '__main__':
    _test()