"""
Computes texture for optical depth lookup of Earth atmosphere.
"""

import numpy as np
import matplotlib.pyplot as plt

RADII = np.array([1, 1.002, 1.0001])   # For Earth use 1, 1.002, 1.0001
# RADII = np.array([1.0, 1.01, 1.001])
# RADII = np.array([1.0, 1.1, 1.01])
# RADII = np.array([1.0, 1.5, 1.2])
DENSITY_FALLOFF = np.array([2, 8])
NUM_SAMPLES = 10000
IMAGE_SIZE = 1024

def optical_depth(ray_origin: np.ndarray, ray_dir: np.ndarray) -> np.ndarray:
    step_size = 2 * RADII[1] / (NUM_SAMPLES - 1)
    k_values = np.arange(NUM_SAMPLES)
    p = ray_origin[:, np.newaxis] + k_values * ray_dir[:, np.newaxis] * step_size
    r = np.linalg.norm(p, axis=0)
    h01 = np.clip((r - RADII[0]) / (RADII[1] - RADII[0]), 0, 1)
    density = np.exp(-DENSITY_FALLOFF[:, np.newaxis] * h01) * (1 - h01)
    # density[:, r < 1 / RADII[1]] = 0
    depth = step_size * np.sum(density, axis=1) 
    return depth

def optical_depth_texture(h01: float, dp01: float) -> np.ndarray:
    ray_origin = np.array([0, RADII[2] + h01 * (RADII[1] - RADII[0]), 0])
    dp = 2 * dp01 - 1
    ray_dir = np.array([np.sqrt(1 - dp * dp), dp, 0])
    return optical_depth(ray_origin, ray_dir)

def generate_texture(dim: int):
    texture = np.zeros((dim, dim, 3))
    for y in range(dim):
        for x in range(dim):
            h01 = (x + 0.5) / dim
            dp01 = (y + 0.5) / dim
            t = optical_depth_texture(h01, dp01)
            tMapped = 1 / (2 - np.log(np.maximum(t, 1.0e-6)))
            # tMapped = np.clip(0.5*t, 0, 1)
            texture[y, x][:2] = tMapped
        print(f"\r{100*y/(dim-1):.1f} %", end='\n' if (y == dim-1) else '', flush=True)
    return texture

def save_texture():
    texture = generate_texture(IMAGE_SIZE)
    # print(texture)
    print(f"max value is {np.max(texture[:,:,:2])}")
    print(f"min value is {np.min(texture[:,:,:2])}")
    plt.imsave("depth.png", texture)

if __name__ == "__main__":
    save_texture()
