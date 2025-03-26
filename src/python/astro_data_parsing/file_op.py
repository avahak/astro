"""
Collection of methods for reading and writing files.
"""
import numpy as np
import csv
import gzip
import contextlib
import json
import os

import tools

class JSONNumpy(json.JSONEncoder):
    """
    Json encoder and decoder for numpy arrays.
    """
    def default(self, obj):
        """
        Encodes a numpy array.
        """
        if isinstance(obj, np.ndarray):
            if obj.dtype.fields is None:
                return self._handle_nan(obj.tolist())
            return {
                '__numpy__': True, 
                'descr': obj.dtype.descr, 
                'data': self._handle_nan(obj.tolist())
            }
        return json.JSONEncoder.default(self, obj)
    
    @staticmethod
    def _handle_nan(obj):
        """
        Recursively replaces NaN values with None (null in JSON).
        """
        if isinstance(obj, list) or isinstance(obj, tuple):
            return [JSONNumpy._handle_nan(x) for x in obj]
        elif isinstance(obj, float) and np.isnan(obj):
            return None
        return obj

    @staticmethod
    def decode(dct):
        """
        Decodes a numpy array.
        """
        if '__numpy__' in dct:
            dt = [tuple(field) for field in dct['descr']]
            data = [tuple(entry) for entry in dct['data']]
            return np.array(data, dtype=dt)
        return dct

def _decomment(f, comment_separators):
    """
    Removes comments starting with a separator.
    """
    for line in f:
        for separator in comment_separators:
            line = line.split(separator)[0]
        if line.strip():
            yield line

def read_csv_format(f, fields, delimiter=',', comment_separators=('#',)):
    """
    Returns a structured numpy array constructed from reading a CSV-formatted file.

    Fields is a list of column descriptions of type (name,type,default_value_in_case_parsing_fails),
    where type can be 'f' (float), 'i' (int), and anything else or absence defaulting to a string.
    Example of fields: (('name',), ('i_field','i'), ('f_field','f',1.0))
    """
    values = []
    reader = csv.reader(_decomment(f, comment_separators), delimiter=delimiter, skipinitialspace=True)
    for line in reader:
        values_line = []
        for k, field in enumerate(fields):
            value = line[k]
            m = len(field)
            if (m > 1) and (field[1] == 'f'):
                value = tools.as_float(value, field[2]) if (m > 2) else tools.as_float(value)
            if (m > 1) and (field[1] == 'i'):
                value = tools.as_int(value, field[2]) if (m > 2) else tools.as_int(value)
            values_line.append(value)
        values.append(tuple(values_line))
    dt_types = []
    for field in fields:
        m = len(field)
        if (m > 1) and (field[1] == 'f'):
            dt_types.append(np.float64)
        elif (m > 1) and (field[1] == 'i'):
            dt_types.append(np.int32)
        else:
            dt_types.append('U128')     # TODO any better way to do this? 'O'?
    dt = np.dtype([(fields[k][0], dt_types[k]) for k in range(len(fields))])
    return np.array(values, dtype=dt)

def read_fixed_length_format(f, fields, comment_separators=('#',)):
    """
    Returns a structured numpy array constructed from reading a fixed length file.

    Fields is a list of column descriptions of type (name,first_char_pos,last_char_pos,type,default_value_in_case_parsing_fails),
    where type can be 'f' (float), 'i' (int), and anything else or absence defaulting to a string.
    Example of fields: (('name',5,14), ('i_field',26,31,'i',0), ('f_field',50,55))
    """
    values = []
    for line in _decomment(f, comment_separators):
        values_line = []
        for field in fields:
            value = line[field[1]-1:field[2]].strip()
            m = len(field)
            if (m > 3) and (field[3] == 'f'):
                value = tools.as_float(value, field[4]) if (m > 4) else tools.as_float(value)
            if (m > 3) and (field[3] == 'i'):
                value = tools.as_int(value, field[4]) if (m > 4) else tools.as_int(value)
            values_line.append(value)
        values.append(tuple(values_line))
    dt_types = []
    for field in fields:
        m = len(field)
        if (m > 3) and (field[3] == 'f'):
            dt_types.append(np.float64)
        elif (m > 3) and (field[3] == 'i'):
            dt_types.append(np.int32)
        else:
            dt_types.append(f'U{1+field[2]-field[1]}')
    dt = np.dtype([(fields[k][0], dt_types[k]) for k in range(len(fields))])
    return np.array(values, dtype=dt)

@contextlib.contextmanager
def regular_open(file_path, mode='rt', encoding='utf-8'):
    """
    Context manager for opening files.
    """
    try:
        with open(file_path, mode=mode, encoding=encoding) as f:
            yield f
    except OSError:
        print(f'Error reading {file_path}.')

@contextlib.contextmanager
def gzip_open(file_path, mode='rt'):
    """
    Context manager for opening gzip files.
    """
    try:
        with gzip.open(file_path, mode=mode) as f:
            yield f
    except OSError:
        print(f'Error reading {file_path}.')

def json_string_size(data): 
    """
    Returns length of the json string created from data
    """
    jd = json.dumps(data, cls=JSONNumpy, indent=None, separators=(',',':'))
    return len(jd)

def write_json(data, write_file=False, zip=True):
    """
    Writes given data to a json file on the disk.
    """
    if write_file:
        file_path = R'd:/resources/astro/astro.json'+('.gz' if zip else '')
        jd = json.dumps(data, cls=JSONNumpy, indent=None, separators=(',',':'))
        if zip:
            with gzip_open(file_path, 'wb') as f:
                f.write(jd.encode('utf-8'))
        else:
            with regular_open(file_path, 'wt') as f:
                f.write(jd.encode('utf-8'))
        print(f'File {file_path} written, size = {os.path.getsize(file_path)/1024/1024:.2f} MB.')

def _test():
    structured_arr = np.array([(1, np.nan), (2, 3)], dtype=[('a', 'i4'), ('b', 'f4')])
    print(json.dumps(structured_arr, cls=JSONNumpy))

if __name__ == "__main__":
    _test()
