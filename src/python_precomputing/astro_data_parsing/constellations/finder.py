"""
py -m constellations.find_constellation
"""
import gzip
import json
import numpy as np
import matplotlib.pyplot as plt

import file_op

class ConstellationFinder:
    """
    find2 is not exact, just used for verification of find here
    """
    num_divisions: int
    table: any
    table2: any

    def __init__(self, num_divisions=10):
        self.num_divisions = num_divisions
        # Read constellation boundaries
        file_path = R'd:/resources/astro/astro.json.gz'
        fields = (('dec',10,18), ('ra',1,8), ('abbr',20,23)) 
        with gzip.open(file_path, 'rt', encoding='utf-8') as f:
            astro = json.load(f)

        # Read other boundary data
        file_path = R'd:/resources/astro/constellation_boundary_data2/data.dat'
        fields = (('ra1',1,9,'f'), ('ra2',9,17,'f'), ('dec',17,26,'f'), ('abbr',26,30)) 
        with file_op.regular_open(file_path, 'rt', encoding='utf-8') as f:
            self.table2 = file_op.read_fixed_length_format(f, fields)
        # print(self.table2)

        self.table = {}
        for con in astro['constellations']:
            if 'boundary_1875' not in astro['constellations'][con]:
                continue
            points = astro['constellations'][con]['boundary_1875']
            self.table[con] = points
        for con, points in self.table.items():
            points_new = []
            for k in range(len(points)):
                q1 = points[k]
                q2 = points[(k+1)%len(points)]
                for j in range(self.num_divisions):
                    t = j / self.num_divisions
                    if np.abs(q2[0]-q1[0]) < np.pi:
                        phi = q1[0] + t*(q2[0]-q1[0])
                    else:
                        if q1[0] > np.pi:
                            phi = q1[0] + t*(q2[0]+2.0*np.pi-q1[0])
                        else:
                            phi = q1[0] + t*(q2[0]-2.0*np.pi-q1[0])
                    theta = q1[1] + t*(q2[1]-q1[1])
                    points_new.append(spherical_to_cartesian(theta, phi))
            self.table[con] = points_new

        
    def find(self, theta, phi):
        """
        TODO In B1875.0 coordinates could order order segments by dec, then 
        rearrange each line of the table consists of 
        (Lower Right Ascension, Upper Right Ascension, Lower Declination) 
        Then just
        for (var i = 0; i < table.length; i++)
        {
            if (dec < table[i][2] || ra < table[i][0] || ra >= table[i][1])
            continue;
            return table[i][3];
        }
        See http://djm.cc/constellation.js
        (data formatted like this: http://cdsarc.u-strasbg.fr/ftp/VI/42/ReadMe)
        R'd:/resources/astro/constellation_boundary_data2/data.dat'
        """
        dec = theta / np.pi * 180.0
        ra = (phi / np.pi * 12.0 + 24.0) % 24.0
        for row in self.table2:
            if (dec < row['dec']) or (ra < row['ra1']) or (ra >= row['ra2']):
                continue
            return row['abbr'].upper()
        
        assert False

    def find2(self, theta, phi):
        """Find constellation containing point (theta, phi) using tangent space projection
        NOTE not exact
        """
        p = spherical_to_cartesian(theta, phi)
        t1, t2 = create_tangent_basis(p)
        
        for con, points in self.table.items():
            # Project boundary points to tangent plane
            polygon = []
            for bp in points:
                proj = bp - np.dot(bp, p) * p
                u = np.dot(proj, t1)
                v = np.dot(proj, t2)
                polygon.append((u, v))
            
            # Test if origin (which is p's projection) is in polygon
            wn = winding_number((0.0, 0.0), polygon)
            if wn < 0:
                return 'SER' if con.startswith('SER') else con
        
        raise Exception('Failed to find constellation')

def normalize(v):
    return v / np.linalg.norm(v)

def spherical_to_cartesian(theta, phi):
    """Convert spherical coordinates to Cartesian coordinates on unit sphere"""
    return np.array([
        np.cos(theta) * np.cos(phi),
        np.cos(theta) * np.sin(phi),
        np.sin(theta)
    ])

def create_tangent_basis(p):
    """Create orthonormal basis for tangent plane at point p on sphere"""
    # Normal vector is p itself
    if abs(p[2]) < 1e-6:
        t1 = normalize(np.cross((0.0, 0.0, 1.0), p))
    else:
        t1 = normalize(np.cross((1.0, 0.0, 0.0), p))
    t2 = np.cross(p, t1)
    return t1, t2

def winding_number(point, polygon):
    """Winding number algorithm for point-in-polygon test in 2D"""
    x, y = point
    wn = 0  # Winding number counter
    
    for i in range(len(polygon)):
        x1, y1 = polygon[i]
        x2, y2 = polygon[(i+1)%len(polygon)]
        
        if y1 <= y:
            if y2 > y and (x2-x1)*(y-y1) - (y2-y1)*(x-x1) > 0:
                wn += 1
        else:
            if y2 <= y and (x2-x1)*(y-y1) - (y2-y1)*(x-x1) < 0:
                wn -= 1
    return wn

def plot_constellation_segments(pts1, pts2, test_point=None):
    fig = plt.figure(figsize=(10, 8))
    ax = fig.add_subplot(111, projection='3d')
    
    # Create a sphere
    u = np.linspace(0, 2 * np.pi, 32)
    v = np.linspace(0, np.pi, 16)
    x = np.outer(np.cos(u), np.sin(v))
    y = np.outer(np.sin(u), np.sin(v))
    z = np.outer(np.ones(np.size(u)), np.cos(v))
    
    # Plot the sphere surface
    ax.plot_surface(x, y, z, color='lightblue', alpha=0.1)
    
    for k in range(len(pts1)):
        p1 = pts1[k]
        p2 = pts1[(k+1)%len(pts1)]
        ax.plot([p1[0], p2[0]], [p1[1], p2[1]], [p1[2], p2[2]], 'b-', linewidth=1)

    for k in range(len(pts2)):
        p1 = pts2[k]
        p2 = pts2[(k+1)%len(pts2)]
        ax.plot([p1[0], p2[0]], [p1[1], p2[1]], [p1[2], p2[2]], 'r-', linewidth=1)
    
    # Plot test point if provided
    if test_point:
        theta, phi = test_point
        x, y, z = spherical_to_cartesian(theta, phi)
        ax.scatter([x], [y], [z], color='green', s=100)
    
    # Equal aspect ratio
    ax.set_box_aspect([1, 1, 1])
    ax.set_xlim(-1, 1)
    ax.set_ylim(-1, 1)
    ax.set_zlim(-1, 1)
    ax.set_xlabel('X')
    ax.set_ylabel('Y')
    ax.set_zlabel('Z')
    plt.title('Constellation Boundaries Visualization')
    plt.show()

def _test():
    finder = ConstellationFinder()

    for _ in range(1000):
        theta, phi = np.pi*(np.random.rand()-0.5), 2.0*np.pi*np.random.rand()
        # theta, phi = -0.9397469916993487, 4.128649035659282
        print(theta, phi)

        con = finder.find(theta, phi)
        con2 = finder.find2(theta, phi)

        if con != con2:
            plot_constellation_segments(
                finder.table[con],
                finder.table[con2],
                (theta, phi)
            )
        assert con == con2, f'{con=}, {con2=}'

if __name__ == '__main__':
    _test()