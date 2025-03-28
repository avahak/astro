"""Contains formulas regarding precession, nutation, tilt of Earth, 
proper/true motion of stars.
"""

import numpy as np
from math import *
import matplotlib.pyplot as plt

import cst, tools, spherical

def precession(t):
    """
    Source: IAUCircular179.pdf, p.44
    """
    ze = (2.650545+t*(2306.083227+t*(0.2988499+t*(0.01801828 \
        +t*(-0.000005971+t*(-0.0000003173))))))*cst.ARCSEC
    z = (-2.650545+t*(2306.077181+t*(1.0927348+t*(0.01826837 \
        +t*(-0.000028596+t*(-0.0000002904))))))*cst.ARCSEC
    th = (t*(2004.191903+t*(-0.4294934+t*(-0.04182264 \
        +t*(-0.000007089+t*(-0.0000001274))))))*cst.ARCSEC
    return ze, z, th

def precession_matrix(t):
    ze, z, th = precession(t)
    return tools.rotation_matrix(2, z) @ tools.rotation_matrix(1, -th) @ tools.rotation_matrix(2, ze)

def interval_precession_matrix(t0, t1):
    """
    Returns precession matrix needed to change epoch from t0 to t1
    """
    return precession_matrix(t1) @ precession_matrix(t0).T

def precess_pa(t0, t1, rade, pa):
    """
    Computes how position angle changes under precession from t0 to t1.
    Returns position angle at epoch t1.
    The position angle is the angle relative to a reference direction (e.g., north) 
    on the celestial sphere, measured eastward from north.
    """
    precession_matrix = interval_precession_matrix(t0, t1)
    p = spherical.cartesian_from_spherical(1.0, rade[1], rade[0])
    u_east, u_north, _ = spherical.sphere_tangent_plane_basis_enu(p)
    dp = np.cos(pa)*u_north + np.sin(pa)*u_east
    p1 = precession_matrix @ p
    dp1 = precession_matrix @ dp
    u_east, u_north, _ = spherical.sphere_tangent_plane_basis_enu(p1)
    return np.arctan2(np.dot(dp1, u_east), np.dot(dp1, u_north))

def apply_true_motion_cartesian(t0, t1, p0, v0, include_precession=True):
    """
    Given position and velocity for a star at time t0, combine
    linear motion and precession to compute its position and velocity at t1.
    """
    precession_matrix = interval_precession_matrix(t0, t1) if include_precession else np.eye(3)
    p1 = precession_matrix @ (p0 + (t1-t0)*v0)
    v1 = precession_matrix @ v0
    return p1, v1

def apply_true_motion_spherical(t0, t1, rade0, pm_rade0, r0, rv0, include_precession=True):
    """
    Spherical coordinate equivalent of apply_true_motion_cartesian.
    So, given position and velocity for a star at t0 in rade, pm_rade, r, rv, 
    use linear motion and precession to return rade, pm_rade, r, rv at t1.

    Allows r0=None or rv0=None as special cases. In these special cases motion along
    a great circle of the sphere is used instead of linear motion.
    """
    precession_matrix = interval_precession_matrix(t0, t1) if include_precession else np.eye(3)
    # Here we always assume that rade0, pm_rade0 are given and finite
    # but we migth be missing r0 or rv0
    if r0 is None:
        # No r0: act as if no rv0 given either
        rv0 = None
    if rv0 is None:
        # Case: rv0 missing: follow a great circle in the direction of proper motion
        p0, dp0 = spherical.true_motion_spherical_to_cartesian(rade0, pm_rade0, 1.0, 0.0)
        length_dp0 = np.linalg.norm(dp0)
        if length_dp0 < 1.0e-10:
            # dp0 is very small so just treat it as zero:
            p1 = precession_matrix @ p0
            dp1 = np.zeros(3)
        else:
            # Here move on r=1 sphere surface here along a great circle
            # NOTE this should be testable with the t0 -> t1 -> t0 test
            delta_t = length_dp0*(t1-t0)
            q = np.cos(delta_t)*p0 + np.sin(delta_t)*dp0/length_dp0
            dq = -length_dp0*np.sin(delta_t)*p0 + np.cos(delta_t)*dp0
            p1 = precession_matrix @ q
            dp1 = precession_matrix @ dq
        return *spherical.true_motion_cartesian_to_spherical(p1, dp1)[:2], r0, None
    if (r0 is not None) and (rv0 is not None):
        # Case: all values given
        p0, dp0 = spherical.true_motion_spherical_to_cartesian(rade0, pm_rade0, r0, rv0)
        p1 = precession_matrix @ (p0 + (t1-t0)*dp0)
        dp1 = precession_matrix @ dp0
        return spherical.true_motion_cartesian_to_spherical(p1, dp1)

def _test_epoch_changes():
    def test_is_flow(f, x0):
        # test f(x0,0) = x0
        assert np.linalg.norm(f(x0, 0.0)-x0) < 1.0e-8
        # test f(f(x0,t),s) = f(x0,t+s)
        t, s = np.random.randn(2)
        assert np.linalg.norm(f(f(x0, t), s)-f(x0, t+s)) < 1.0e-8

    rand = lambda start, end: start + (end-start)*np.random.rand()

    for k in range(1000):
        # Test that apply_true_motion_spherical defines a flow
        # x0 codes: t, ra, dec, pm_ra, pm_dec, r0, rv0
        x0 = np.array([np.random.randn(), rand(-np.pi, np.pi), rand(-np.pi/2, np.pi/2), *np.random.randn(2), np.random.rand(), np.random.randn()])
        flatten = lambda rade, pm_rade, r, rv: np.array([*rade, *pm_rade, r, rv])
        f = lambda x, t: np.array([x[0]+t, *flatten(*apply_true_motion_spherical(x[0], x[0]+t, x[1:3], x[3:5], x[5], x[6]))])
        test_is_flow(f, x0)

        # Test that process_pa follows a flow
        # x0 codes: t, ra, dec, pa
        x0 = np.array([np.random.randn(), rand(-np.pi, np.pi), rand(-np.pi/2, np.pi/2), rand(-np.pi, np.pi)])
        precess_rade = lambda x, t: apply_true_motion_spherical(x[0], x[0]+t, x[1:3], np.zeros(2), 1.0, 0.0)[0]
        f = lambda x, t: np.array([x[0]+t, *precess_rade(x, t), precess_pa(x[0], x[0]+t, x[1:3], x[3])])
        test_is_flow(f, x0)

    rade0 = np.random.randn(2)
    pm_rade0 = np.random.randn(2)
    r0 = 100.0*np.random.rand()
    rv0 = np.random.randn()
    pts = np.zeros((1000,3))
    for k in range(1000):
        rade0, pm_rade0, r0, rv0 = apply_true_motion_spherical(0.1*k, 0.1*(k+1), rade0, pm_rade0, r0, rv0, True)
        pts[k] = spherical.cartesian_from_spherical(r0, rade0[1], rade0[0])
        # print(rade0, pm_rade0, r0, rv0)

    ax = plt.figure().add_subplot(projection='3d')
    ax.scatter(pts[:,0], pts[:,1], pts[:,2])
    plt.show()

if __name__ == "__main__":
    _test_epoch_changes()