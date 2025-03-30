"""
Preliminary work investigating how constellation boundaries could be computed better.
"""
from fractions import Fraction
from math import lcm
import re
import numpy as np
from PIL import Image

import file_op
from .finder import ConstellationFinder

def save_array_as_png(array, filename):
    """
    Save a 2D numpy array as a black-and-white PNG file.
    """
    array = array.astype(np.uint8)
    img = Image.fromarray(array, mode='L')  # 'L' for grayscale
    img.save(filename)
    print(f'Saved image to {filename}, shape={array.shape}.')

def create_texture(table):
    """
    Creates the constellation texture.
    """
    names = set([name for name in table['abbr'] if not name.startswith('SER')])
    names.add('SER')
    names = np.array(sorted(names))

    finder = ConstellationFinder(10)
    ra_list = sorted(set([*table['ra'], 0.0, 1.0]))
    dec_list = sorted(set([*table['dec'], 0.0, 1.0]))

    # Both lists have 0 and 1 and values in between. 
    # For ra_list 0 and 1 are the same - so there needs to be len(ra_list)-1 intervals (pixels)
    # For dec_list 0 and 1 are the caps
    n_ra = len(ra_list) - 1
    n_dec = len(dec_list) - 1
    count = 0
    values = np.zeros((n_dec, n_ra))
    for k_ra in range(n_ra):
        ra1 = ra_list[k_ra] 
        ra2 = ra_list[k_ra+1]
        ra = (ra1 + ra2) / 2
        for k_dec in range(n_dec):
            dec1 = dec_list[k_dec] 
            dec2 = dec_list[k_dec+1]
            dec = (dec1 + dec2) / 2

            theta = (dec-0.5) * np.pi
            phi = ra * 2.0*np.pi
            con = finder.find(theta, phi)

            # con2 = finder.find2(theta, phi)
            # print(con, con2, f'{100*count/(n_ra*n_dec):.3f}%')
            # assert con == con2

            values[k_dec,k_ra] = np.where(names == con)[0][0]

            count += 1

    # values = 256/88*values
    save_array_as_png(values, 'd:/resources/astro/cons.png')



def denominators_LCM(arr):
    """
    Finds smallest n such that n*x is an integer for each x in arr.
    """
    denominators = [Fraction(x).limit_denominator().denominator for x in arr]
    return lcm(*denominators)

def create_interval_lookup(arr):
    # We assume that 0<=arr[k]<=1 for all k

    arr_distinct = sorted(set([*arr, 0.0, 1.0]))
    n0 = len(arr_distinct) - 1
    n1 = denominators_LCM(arr_distinct)
    print(f'{n0 = }, {n1 = }')

    lut = np.zeros(n1, dtype=float)

    index = 0
    for k in range(n1):
        x = (k + 0.5) / n1
        x2 = arr_distinct[index + 1]
        if x >= x2:
            index = index + 1
        lut[k] = (0.5 + index) #/ n0

    # Check the results:
    for _ in range(100000):
        x = np.random.rand()

        index = int(x*n1)

        x1 = arr_distinct[int(np.floor(lut[index]))]
        x2 = arr_distinct[int(np.ceil(lut[index]))]
        # print(index, lut[index], x1, x, x2)
        assert lut[index] > 0 and lut[index] < n0
        if x1 < x2:
            assert x1 <= x and x <= x2, f'{x1=}, {x=}, {x2=}'
        else:
            # no wrapping around
            assert False
            # assert (x1 <= x) or (x <= x2), f'{x1=}, {x=}, {x2=}'
    
    return lut

def fix_truncation(s: str) -> str:
    # Fixes truncation used in the tables
    s = re.sub(r'66$', '6666666666666', s)
    s = re.sub(r'67$', '6666666666666', s)
    s = re.sub(r'33$', '3333333333333', s)
    s = re.sub(r'22$', '2222222222222', s)
    s = re.sub(r'83$', '8333333333333', s)
    return s

def smallest_gap(numbers):
    numbers = sorted(numbers)
    return min(numbers[i+1] - numbers[i] for i in range(len(numbers) - 1))

def main():
    # Read constellation boundaries
    file_path = R'd:/resources/astro/constellation_boundary_data/constbnd.dat'
    fields = (('dec',10,18), ('ra',1,8), ('abbr',20,23)) 
    with file_op.regular_open(file_path, 'rt', encoding='utf-8') as f:
        constbnd = file_op.read_fixed_length_format(f, fields, ())

    # Check the endings
    last2_set = set()
    for row in constbnd:
        last2_set.add(row['ra'][-2:])
        last2_set.add(row['dec'][-2:])
    # print(f'{last2_set = }')

    # Undo truncation used in the data
    ra_list = []
    dec_list = []
    for row in constbnd:
        ra = row['ra']
        dec = row['dec']
        ra_fixed = fix_truncation(ra)
        dec_fixed = fix_truncation(dec)
        # f_ra = float(ra)
        # f_dec = float(dec)
        f_ra_fixed = float(ra_fixed) / 24
        f_dec_fixed = 0.5 + float(dec_fixed) / 180
        ra_list.append(f_ra_fixed)
        dec_list.append(f_dec_fixed)
    ra_list = np.array(ra_list)
    dec_list = np.array(dec_list)

    table = np.zeros(len(constbnd), dtype=[('ra', float), ('dec', float), ('abbr', 'O')])
    table['ra'] = ra_list
    table['dec'] = dec_list
    table['abbr'] = [con.upper() for con in constbnd['abbr']]

    print('ra min, max', np.min(table['ra']), np.max(table['ra']))
    print('dec min, max', np.min(table['dec']), np.max(table['dec']))

    print(create_interval_lookup(ra_list))
    print(create_interval_lookup(dec_list))

    create_texture(table)

if __name__ == '__main__':
    main()