type ComparsionResult = {
    obj: string;
    t: number;
    angle: number;
    p: number[];
    pRef: number[];
    info: any;
    infoRef: any;
};

type AstropyStar = {
    hip: number;
    datetime_ut1: string;
    jd_ut1: number;
    lon: number;
    lat: number;
    h: number;
    ra: number;
    dec: number;
    ra_date: number;
    dec_date: number;
    az: number;
    alt: number;
};

export type { AstropyStar, ComparsionResult };