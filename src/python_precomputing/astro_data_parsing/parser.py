"""
Parses multiple catalogues and merges them into one list of objects.

Collects and parses data from multiple catalogues of celestial objects
to form a one selected list of objects in the sky which is then written 
to disk as a .json.gz file.
Sources used:
    Constellations
        Boundaries from
            https://pbarbier.com/constellations/boundaries.html or 
            https://cdsarc.cds.unistra.fr/viz-bin/cat/VI/49
        Names from https://www.iau.org/public/themes/constellations/ formatted into
            d:/resources/astro/constellations.txt
        Figures from (source maybe http://mkweb.bcgsc.ca/universe-superclusters-and-voids)
            d:/resources/astro/generated/constellation_star_pairs.txt
    Stars
        Names, HR numbers from BSC5 (Yale catalogue of bright stars)
            http://cdsarc.u-strasbg.fr/viz-bin/Cat?V/50
        Proper names from IAU
            https://www.iau.org/public/themes/naming_stars/ or in ascii: 
            http://www.pas.rochester.edu/~emamajek/WGSN/IAU-CSN.txt
        Data from XHIP, Extended Hipparcos Compilation
            https://cdsarc.cds.unistra.fr/viz-bin/cat/V/137D
    Star clusters
        Data from Star clusters, associations, & candidates in the MW
            https://cdsarc.cds.unistra.fr/viz-bin/cat/J/AJ/157/12
    Galaxies 
        Data from PGC2003 (Principal Galaxy Catalog)
            https://cdsarc.cds.unistra.fr/viz-bin/cat/VII/237
        (REMOVE?) Magnitudes from RC3, Third Reference Cat. of Bright Galaxies
            https://cdsarc.cds.unistra.fr/viz-bin/cat/VII/155
        Names from https://littleastronomy.com/galaxy-names/ formatted into
            d:/resources/astro/galaxy_names.txt
    Nebulae
        Data and names from NGC 2000.0, The Complete New General Catalogue 
        and Index Catalogue of Nebulae and Star Clusters
            https://cdsarc.cds.unistra.fr/viz-bin/cat/VII/118
For a catalogue of catalogs, see http://www.messier.seds.org/xtra/supp/cats.html
"""

import numpy as np
import json
import re
# import numpy.lib.recfunctions as rfn

import file_op, tools, cst, precession

def rewrite_constellation_star_pairs_using_hip():
    """
    Rewrite constellation figure pairs using HIP designations instead of HR.
    """
    stars = parse_stars()
    stars_hr_index = tools.build_index(stars, 'HR', ignore=0)

    file_path = R'd:/resources/astro/generated/constellation_star_pairs.txt'
    fields = (('con',), ('hr1','i'), ('hr2','i')) 
    with file_op.regular_open(file_path, 'rt', encoding='utf-8') as f:
        values = file_op.read_csv_format(f, fields)

    # Multiple star systems can cause problems with the designations since they may not be 
    # resolved as separate sources in HIP. Problem stars HR's: 
    # 604, 5478, 5506, 3206, 4210, 898, 2890, 868, 596, 4375.
    # (HR, HIP) pairs for direct substitution
    substitutions = {
        604: [9640],
        5478: [71795],
        5506: [72105],
        3206: [39953],
        4210: [52468],      # NOTE Replaced eta Carinae (no HIP) with V520 Carinae (HR 4200)
        898: [13847],
        2890: [36850],
        # HR 868 = HIP 13502 is variable star with high brightness range, included by hand now
        596: [9487],
        4375: [55203],
    }

    get_hip = lambda hr: substitutions.get(hr, stars['HIP'][stars_hr_index.get(hr, [])].tolist())

    new_dict = {}
    for row in values:
        hr1 = row['hr1']
        hr2 = row['hr2']
        hip1 = get_hip(hr1)
        hip2 = get_hip(hr2)
        assert len(hip1) == 1, f'problem HR1 {hr1}: {hip1}'
        assert len(hip2) == 1, f'problem HR2 {hr2}: {hip2}'

        new_dict.setdefault(row['con'], []).append((*hip1, *hip2))

    file_path = R'd:/resources/astro/generated/constellation_star_pairs_hip.json'
    jd = json.dumps(new_dict, indent=None, separators=(',',':'))
    with open(file_path, 'wt', encoding='utf-8') as f:
        f.write(jd)
    print(f'Wrote to {file_path}, size {len(jd)/1024:.2f} KB')

def parse_stars(vmag_limit=10.0):
    """
    Returns table build from star catalogues. 
    Based on Extended Hipparcos Compilation (XHIP) (Anderson+, 2012)
    """
    # NOTE Read data from XHIP. Since XHIP data is in ICRF (which uses the mean equator 
    # and equinox of J2000.0), no precession is needed. To obtain positions at epoch J2000.0, 
    # only proper motion needs to be applied from 1991.25 to 2000.0.
    fields = (('HIP',1,6,'i',0), ('Comp',8,13), ('SpType',237,262), ('RA',59,70,'f'), ('DE',72,83,'f'), 
            ('pmRA',92,99,'f'), ('pmDE',101,108,'f'), ('Plx',85,90,'f'), ('RV',270,276,'f')) 
    file_path = R'd:/resources/astro/xhip/main.dat.gz'
    with file_op.gzip_open(file_path, 'rt') as f:
        xhip_main = file_op.read_fixed_length_format(f, fields)

    # NOTE in rare cases Bmag is defined but B-V is not, but never the other way around, 
    # so use Bmag. By definition B-V = Bmag-Vmag so given Vmag having either is enough.
    fields = (('HIP',1,6,'i',0), ('Vmag',60,64,'f'), ('Bmag',53,58,'f')) 
    file_path = R'd:/resources/astro/xhip/photo.dat.gz'
    with file_op.gzip_open(file_path, 'rt') as f:
        xhip_photo = file_op.read_fixed_length_format(f, fields)

    # NOTE Only 57 HD-designations have two HIP-designations in XHIP and none have more. 
    # Example: HIP 15019=HD 19923, HIP 15017=HD 19923B
    fields = (('HIP',1,6,'i',0), ('HD',8,13,'i',0), ('Cst',15,17), ('XHIP_Name',35,82), ('GrpName',84,189))
    file_path = R'd:/resources/astro/xhip/biblio.dat.gz'
    with file_op.gzip_open(file_path, 'rt') as f:
        xhip_biblio = file_op.read_fixed_length_format(f, fields)

    # Extended XHIP with: HR, BSC_Name, IAU_Name
    stars = np.zeros(len(xhip_main), dtype=[
        ('HIP','i'), ('Comp','U6'), ('HD','i'), ('HR', 'i'), ('bayer','U20'),   # designations
        ('XHIP_Name','U48'), ('BSC_Name', 'U9'), ('IAU_Name', 'U18'),           # names
        ('RA','f8'), ('DE','f8'), ('Plx','f8'),                                 # position
        ('pmRA','f8'), ('pmDE','f8'), ('RV','f8'),                              # motion
        ('Vmag','f8'), ('Bmag','f8'), ('SpType','U26'),                         # photometric data
        ('Cst','U3'), ('GrpName','U106'),                                       # grouping
    ])

    # Copy columns from xhip_main to stars:
    for field in ('HIP', 'Comp', 'SpType', 'RA', 'DE', 'pmRA', 'pmDE', 'Plx', 'RV'):
        stars[field] = xhip_main[field]

    # Convert units
    for field in ('RA', 'DE'):
        stars[field] *= np.pi/180.0
        stars[f'pm{field}'] *= 0.1*cst.ARCSEC       # mas/year -> rad/jc
    stars['Plx'] *= 0.001                           # mas -> as
    stars['RV'] *= cst.KM/cst.S/cst.PC              # km/s -> pc/jc

    stars_hip_index = tools.build_index(stars, 'HIP', ignore=0)

    # Copy photometric data from xhip_photo to stars:
    for xhip_photo_row in xhip_photo:
        hip = xhip_photo_row['HIP']
        for field in ('Vmag', 'Bmag'):
            stars[field][stars_hip_index.get(hip, [])] = xhip_photo_row[field]

    # Copy star reference data from xhip_biblio to stars
    for xhip_biblio_row in xhip_biblio:
        hip = xhip_biblio_row['HIP']
        for field in ('HD', 'Cst', 'XHIP_Name', 'GrpName'):
            stars[field][stars_hip_index.get(hip, [])] = xhip_biblio_row[field]

    stars_hd_index = tools.build_index(stars, 'HD', ignore=0)
    
    # Read identifiers from BSC5:
    file_path = R'd:/resources/astro/yale_catalogue/bsc5.dat.gz'
    fields = (('HR',1,4,'i',0), ('HD',26,31,'i',0), ('BSC_Name',5,14), ('VarID',52,60))
    with file_op.gzip_open(file_path, 'rt') as f:
        bsc5 = file_op.read_fixed_length_format(f, fields, ())

    # Assign HR, BSC_Name from bsc5
    for bsc_row in bsc5:
        hd = bsc_row['HD']
        for field in ('HR', 'BSC_Name'):
            stars[field][stars_hd_index.get(hd, [])] = bsc_row[field]

    # "proper names","Designation","HIP","Bayer ID","Constellation","Origin","Ethnic-Cultural_Group_or_Language","Reference","Additional info, e.g. language corruptions","Date of Adoption"
    file_path = R'd:/resources/astro/IAU-Catalog of Star Names (2025).csv'
    fields = (('name',), ('designation',), ('HIP','i'), ('bayer',), ('con',),) 
    with file_op.regular_open(file_path, 'rt', encoding='utf-8') as f:
        iau_names = file_op.read_csv_format(f, fields, skip_header_lines=1)
    iau_names = iau_names[iau_names['HIP'] != 0]

    # Assign IAU_Name and bayer from iau_names
    for row in iau_names:
        hip = row['HIP']
        stars['IAU_Name'][stars_hip_index.get(hip, [])] = row['name']
        if row['bayer']:
            stars['bayer'][stars_hip_index.get(hip, [])] = re.sub(r'\s+', ' ', row['bayer']).strip()

    # Apply true motion from J1991.25 to J2000.0:
    for row in stars:
        rade0 = np.array((row['RA'], row['DE']))
        pm_rade0 = np.array((row['pmRA']/np.cos(rade0[1]), row['pmDE']))
        # pm_rade0 is proper motion in (RA,DE) in rad/century
        r0, rv0 = None, None      # distance in PC, radial velocity in PC/century
        if row['Plx'] > 0:
            r0 = 1.0 / row['Plx']
            if not np.isnan(row['RV']):
                rv0 = row['RV']
        rade1, pm_rade1, r1, rv1 = precession.apply_true_motion_spherical(
                -0.0875, 0.0, rade0, pm_rade0, r0, rv0, include_precession=False)
        row['RA'] = rade1[0]
        row['DE'] = rade1[1]
        row['pmRA'] = pm_rade1[0]*np.cos(rade1[1])
        row['pmDE'] = pm_rade1[1]
        row['Plx'] = 1.0/r1 if r1 is not None else float('nan')
        row['RV'] = rv1 if rv1 is not None else float('nan')

    # Filter out stars with Vmag >= vmag_limit or undefined bmag (almost all have bmag).
    # We might need to keep some special stars (variable stars with high brightness range 
    # for example) even if Vmag is too high
    special_star_hips = [13502]
    special_stars_mask = np.isin(stars['HIP'], special_star_hips)
    mask = (stars['Vmag'] < vmag_limit) & np.isfinite(stars['Bmag'])
    stars = stars[mask | special_stars_mask]
    
    print(f'parse_stars: stars: {len(stars)}, {file_op.json_string_size(stars)/1024:.2f} KB')
    return stars

def undo_truncation(s: str) -> str:
    """
    Undos truncation used in constbnd.dat
    """
    s = re.sub(r'66$', '6666666666666', s)
    s = re.sub(r'67$', '6666666666666', s)
    s = re.sub(r'33$', '3333333333333', s)
    s = re.sub(r'22$', '2222222222222', s)
    s = re.sub(r'83$', '8333333333333', s)
    return s

def parse_constellations():
    """
    Returns tables parsed from contellation data.
    NOTE Serpens creates three entries: SER, SER1, SER2. SER1 and SER2 contain only
    boundary data for the two parts of the constellation boundary.
    """
    # Constellation boundaries
    file_path = R'd:/resources/astro/constellation_boundary_data/constbnd.dat'
    fields = (('dec',10,18), ('ra',1,8), ('abbr',20,23)) 
    with file_op.regular_open(file_path, 'rt', encoding='utf-8') as f:
        constbnd = file_op.read_fixed_length_format(f, fields, ())

    # Constellation star pairs (abbr, hr1, hr2)
    file_path = R'd:/resources/astro/generated/constellation_star_pairs_hip.json'
    with open(file_path, 'rt', encoding='utf-8') as f:
        star_pairs = json.loads(f.read())
    
    # Constellation name data (name, name_p, name_abbr, name_e, name_g, name_gp)
    file_path = R'd:/resources/astro/constellations.txt'
    fields = (('name',), ('name_p',), ('name_abbr',), ('name_e',), ('name_g',), ('name_gp',))
    with file_op.regular_open(file_path, 'rt', encoding='utf-8') as f:
        names = file_op.read_csv_format(f, fields, delimiter=';')

    constellations = {}
    for abbr in star_pairs: 
        constellations[abbr.upper()] = { 'figure': star_pairs[abbr] }

    for k in range(len(constbnd)):
        row = constbnd[k]
        next_row = constbnd[(k+1) % len(constbnd)]
        if row['abbr'] == next_row['abbr']:
            # First and last row in the same constellation are the same, so drop last
            con: dict = constellations.setdefault(row['abbr'].upper(), {})
            ra = cst.HOUR_AS_ANGLE * float(undo_truncation(row['ra']))
            dec = cst.DEG * float(undo_truncation(row['dec']))
            boundary: list = con.setdefault('boundary_1875', [])
            boundary.append((ra, dec))

    for row in names:
        con: dict = constellations.setdefault(row['name_abbr'].upper(), {})
        con['names'] = (row['name'], row['name_e'], row['name_g'])

    print(f'parse_constellations: constellations: {len(constellations)}, {file_op.json_string_size(constellations)/1024:.2f} KB')
    return constellations


def parse_clusters():
    """
    Returns a table parsed from star cluster data.
    Catalogue: Star clusters, associations, & candidates in the MW  (Bica+, 2019)
    """    
    file_path = R'd:/resources/astro/star_clusters_associations/table3.dat.gz'
    fields = (('Name',50,161), ('RAh',15,16,'i'), ('RAm',18,19,'i'), ('RAs',21,22,'i'), 
            ('DE-',24,24), ('DEd',25,26,'i'), ('DEm',28,29,'i'), ('DEs',31,32,'i'),
            ('Diam-a',34,40,'f'), ('Diam-b',42,48,'f'), ('Class',163,167))
    with file_op.gzip_open(file_path, 'rt') as f:
        table3 = file_op.read_fixed_length_format(f, fields, ())

    # Local group clusters and galaxies:
    file_path = R'd:/resources/astro/star_clusters_associations/table5.dat'
    fields = (('Name',47,102), ('RAh',15,16,'i'), ('RAm',18,19,'i'), ('RAs',21,22,'i'), 
            ('DE-',24,24), ('DEd',25,26,'i'), ('DEm',28,29,'i'), ('DEs',31,32,'i'),
            ('Diam-a',34,39,'f'), ('Diam-b',41,45,'f'), ('Class',104,107))
    with file_op.regular_open(file_path, 'rt', encoding='utf-8') as f:
        table5 = file_op.read_fixed_length_format(f, fields, ())

    # Combine table3 and table5:
    clusters = np.zeros(len(table3)+len(table5), 
            dtype=[('name','U128'), ('rade','f',(2,)), ('diam','f',(2,)), ('class','U5')])
    count = 0
    for table in (table3, table5):
        for row in table:
            clusters[count]['name'] = row['Name']
            clusters[count]['rade'] = tools.parse_rade(row['RAh'], row['RAm'], row['RAs'], 
                    row['DE-'], row['DEd'], row['DEm'], row['DEs'])
            clusters[count]['diam'] = (row['Diam-a'], row['Diam-b'])
            clusters[count]['class'] = row['Class']
            count += 1

    # Include star clusters from Messier and those with defined size from Melotte/Collinder
    messier_pattern = r'(^|,)M\s\d{1,3}'
    messier_search = np.vectorize(lambda x: bool(re.search(messier_pattern, x)))
    include_criteria = (
        messier_search(clusters['name']) |
        (((np.char.find(clusters['name'], 'Melotte') != -1) | 
        (np.char.find(clusters['name'], 'Collinder') != -1)) &
        (np.pi*clusters['diam'][:,0]*clusters['diam'][:,1] > 0.0))
    )
    clusters = clusters[include_criteria]

    print(f'parse_clusters: clusters: {len(clusters)}, {file_op.json_string_size(clusters)/1024:.2f} KB')
    return clusters

def parse_galaxies(vmag_limit=10.0):
    """
    Returns a table parsed from galaxy data.
    Primary reference: PGC2003 (Principal Galaxy Catalog)
    """
    # Reading PGC2003, primary key is PGC number
    file_path = R'd:/resources/astro/pgc2003/pgc.dat.gz'
    fields = (('PGC',4,10,'i',0), ('RAh',13,14,'i'), ('RAm',15,16,'i'), ('RAs',17,20,'f'), 
            ('DE-',21,21), ('DEd',22,23,'i'), ('DEm',24,25,'i'), ('DEs',26,27,'i'),
            ('logD25',37,41,'f'), ('logR25',51,54,'f'), ('PA',64,66,'i'), ('ANames',79,341))
    with file_op.gzip_open(file_path, 'rt') as f:
        pgc2003 = file_op.read_fixed_length_format(f, fields, ())

    # Basic data in PGC2003:
    # NOTE PA refers to "1950-position angle", presumably angle at epoch B1950. 
    galaxies = np.zeros(len(pgc2003), dtype=[('PGC','i'), ('rade','f',(2,)), ('angle','f'), \
            ('diam','f',(2,)), ('alt_names','O'), ('vmag_total','f')])
    for k, pgc_row in enumerate(pgc2003):
        rade = tools.parse_rade(pgc_row['RAh'], pgc_row['RAm'], pgc_row['RAs'], 
                pgc_row['DE-'], pgc_row['DEd'], pgc_row['DEm'], pgc_row['DEs'])
        galaxies[k]['PGC'] = pgc_row['PGC']
        galaxies[k]['rade'] = rade
        if pgc_row['PA'] != 999:
            pa1950 = pgc_row['PA']*cst.DEG
            galaxies[k]['angle'] = pa1950
        else:
            galaxies[k]['angle'] = float('nan')
        # logD25 is log_10(diam/(0.1*arcmin))
        diam_major = 0.1*pow(10.0, pgc_row['logD25'])
        diam_minor = diam_major / pow(10.0, pgc_row['logR25'])
        galaxies[k]['diam'] = (diam_major, diam_minor)
        galaxies[k]['alt_names'] = pgc_row['ANames'].split()
        galaxies[k]['vmag_total'] = 1.0e9           # initialize as invisible

    galaxies_pgc_index = tools.build_index(galaxies, 'PGC', ignore=0)

    # Add a few proper names:
    file_path = R'd:/resources/astro/galaxy_names.txt'
    fields = (('proper_name',), ('alt_names',))
    with file_op.regular_open(file_path, 'rt', encoding='utf-8') as f:
        galaxy_names = file_op.read_csv_format(f, fields, delimiter=';')
    for name_row in galaxy_names:
        names_list = [name.strip() for name in name_row['alt_names'].split(',')]
        for name in names_list:
            if name[:3] == 'PGC':
                num = tools.as_int(name[3:], -1)
                if num != -1:
                    for k in galaxies_pgc_index.get(num, []):
                        galaxies[k]['alt_names'].insert(0, name_row['proper_name'])

    # Add magnitudes (if found) from RC3, Third Reference Cat. of Bright Galaxies
    # Here we use vmag_total = BT - (B-VT)
    file_path = R'd:/resources/astro/rc3_bright_galaxy_catalogue/rc3.gz'
    fields = (('PGC',109,116,'i'), #('name',63,74), ('altname',75,89), 
              ('BT',190,194,'f'), ('B-VT',253,256,'f'))
    with file_op.gzip_open(file_path, 'rt') as f:
        rc3 = file_op.read_fixed_length_format(f, fields, ())
    for rc3_row in rc3:
        pgc = rc3_row['PGC']
        if galaxies_pgc_index.get(pgc) is None:
            # Ignore entries found in RC3 but not in PGC2003
            continue
        bt, bvt = rc3_row['BT'], rc3_row['B-VT']
        if (not np.isnan(bt)) and (not np.isnan(bvt)):
            galaxies['vmag_total'][galaxies_pgc_index.get(pgc, [])] = bt-bvt

    # Filter out dim galaxies
    galaxies = galaxies[galaxies['vmag_total'] < vmag_limit]

    # Precess the position angle from B1950 to J2000.0. B1950 is very close to 
    # -0.5 jc since J2000.0. Precession is slow to compute so compute it now after filtering
    for row in galaxies:
        pa1950 = row['angle']
        if not np.isnan(pa1950):
            rade = row['rade']
            pa2000 = precession.precess_pa(-0.5, 0.0, rade, pa1950)
            row['angle'] = pa2000
        else: 
            row['angle'] = 0.0

    print(f'parse_galaxies: galaxies: {len(galaxies)}, {file_op.json_string_size(galaxies)/1024:.2f} KB')
    return galaxies

def parse_nebulae(vmag_limit):
    """
    Returns a table parsed from nebula data from NGC 2000.0.
    """
    # Read from NGC 2000.0:
    # Num is IC number if IC is 'I', otherwise NGC number
    file_path = R'd:/resources/astro/ngc2000/ngc2000.dat'
    fields = (('IC',1,1), ('Num',2,5,'i'), ('type',7,9), ('RAh',11,12,'i'), ('RAm',14,17,'f'), 
            ('DE-',20,20), ('DEd',21,22,'i'), ('DEm',24,25,'i'),
            ('size',34,38,'f'), ('mag',41,44,'f',1.0e9))
    with file_op.regular_open(file_path, 'rt', encoding='utf-8') as f:
        ngc2000 = file_op.read_fixed_length_format(f, fields, ())

    nebulae = np.empty(len(ngc2000), dtype=[('NGC_number','i'), ('IC_number','i'), ('name','U36'), 
            ('type','U3'), ('rade','f',(2,)), ('size','f'), ('mag','f')])
    for k, ngc2000_row in enumerate(ngc2000):
        is_ic = (ngc2000_row['IC'] == 'I')
        num = ngc2000_row['Num']
        nebulae[k]['NGC_number'] = num if not is_ic else 0
        nebulae[k]['IC_number'] = num if is_ic else 0
        nebulae[k]['name'] = f'IC {num}' if is_ic else f'NGC {num}'
        nebulae[k]['rade'] = tools.parse_rade(ngc2000_row['RAh'], ngc2000_row['RAm'], 0,
                ngc2000_row['DE-'], ngc2000_row['DEd'], ngc2000_row['DEm'], 0)
        for field in ('type', 'size', 'mag'):
            nebulae[k][field] = ngc2000_row[field]
    
    # NOTE Num can refer to NGC_number or IC_number, so be careful with this index
    ngc2000_num_index = tools.build_index(ngc2000, 'Num', ignore=0)

    # Read names of nebulae from names.dat:
    file_path = R'd:/resources/astro/ngc2000/names.dat'
    fields = (('name',1,36), ('IC',37,37), ('Num',38,41,'i',0))
    with file_op.regular_open(file_path, 'rt', encoding='utf-8') as f:
        nebula_names = file_op.read_fixed_length_format(f, fields, ('#', '$'))

    # Add names to the nebulae table:
    for names_row in nebula_names:
        num = names_row['Num']
        for k in ngc2000_num_index.get(num, []):
            if names_row['IC'] != ngc2000[k]['IC']:
                continue
            nebulae[k]['name'] = re.sub(r'\s+', ' ', names_row['name']).strip()

    # Filter out objects that are not nebulae or have no size. After this keep Messier
    # objects and bright nebulae.
    messier_pattern = r'(^|,)M\s\d{1,3}'
    messier_search = np.vectorize(lambda x: bool(re.search(messier_pattern, x)))
    nebulae = nebulae[
        np.isin(nebulae['type'], ('Nb', 'Pl', 'C+N', 'Kt')) & 
        (nebulae['size'] > 0.0) & 
        (messier_search(nebulae['name']) |
        (nebulae['mag'] < vmag_limit))
    ]

    print(f'parse_nebulae: nebulae: {len(nebulae)}, {file_op.json_string_size(nebulae)/1024:.2f} KB')
    return nebulae

@tools.time_it
def main():
    vmag_limit = 7.0

    data = {}
    data['stars'] = parse_stars(vmag_limit)
    data['constellations'] = parse_constellations()
    # data['cons_boundary_pairs_B1875'], data['cons_star_pairs'], data['cons_id_and_names'] = parse_constellations()
    data['clusters'] = parse_clusters()
    data['galaxies'] = parse_galaxies(vmag_limit)
    data['nebulae'] = parse_nebulae(vmag_limit)

    file_op.write_json(data, write_file=True, zip=True)

if __name__ == "__main__":
    # rewrite_constellation_star_pairs_using_hip()
    main()