// Source: Greg Miller (gmiller@gregmiller.net) 2024
// Conversion from original Fortran code to JavaScript by Greg Miller
// https://www.aanda.org/articles/aa/full_html/2011/10/aa17274-11/aa17274-11.html

function ltp_PECL ( EPJ: any, VEC: any ){
    /*
    //+
    // - - - - -
    // P E C L
    // - - - - -
    //
    // Long-term precession of the ecliptic.
    //
    // Given:
    // EPJ d Julian epoch (TT)
    //
    // Returned:
    // VEC d ecliptic pole unit vector
    //
    // The vector is with respect to the J2000.0 mean equator and equinox.
    //
    // Reference: Vondrak et al., A&A (2011), Eq.8, Tab.1
    //
    // Date: 2011 May 14
    //
    // Authors: J.Vondrak, N.Capitaine, P.Wallace
    //
    //-----------------------------------------------------------------------
    */
    // Arcseconds to radians
    const AS2R = 4.848136811095359935899141E-6;

    // 2Pi
    const D2PI = 6.283185307179586476925287E0;

    // Obliquity at J2000.0 (radians).
    const EPS0 = 84381.406E0 * AS2R;

    // Number of polynomial terms
    const NPOL = 4;

    // Number of periodic terms
    const NPER = 8;

    // Miscellaneous
    let I, J;
    let T, P, Q, W, A, S, C, Z;

    // Polynomial and periodic coefficients
    //REAL*16 PQPOL(NPOL,2), PQPER(5,NPER)

    // Polynomials
    //DATA ((PQPOL(I,J),I=1,NPOL),J=1,2) / +5851.607687E0, -0.1189000E0, -0.00028913E0, +0.000000101E0, 
    //    -1600.886300E0, +1.1689818E0, -0.00000020E0, -0.000000437E0 /
    const PQPOL=[
        [+5851.607687E0, -0.1189000E0, -0.00028913E0, +0.000000101E0], 
        [-1600.886300E0, +1.1689818E0, -0.00000020E0, -0.000000437E0]
    ];

    // Periodics
	//DATA ((PQPER(I,J),I=1,5),J=1,NPER) /
    const PQPER=[
        [708.15E0, -5486.751211E0, -684.661560E0, 667.666730E0, -5523.863691E0],
        [2309.00E0, -17.127623E0, 2446.283880E0, -2354.886252E0, -549.747450E0],
        [1620.00E0, -617.517403E0, 399.671049E0, -428.152441E0, -310.998056E0],
        [492.20E0, 413.442940E0, -356.652376E0, 376.202861E0, 421.535876E0],
        [1183.00E0, 78.614193E0, -186.387003E0, 184.778874E0, -36.776172E0],
        [622.00E0, -180.732815E0, -316.800070E0, 335.321713E0, -145.278396E0],
        [882.00E0, -87.676083E0, 198.296071E0, -185.138669E0, -34.744450E0],
        [547.00E0, 46.140315E0, 101.135679E0, -120.972830E0, 22.885731E0]
    ];


    // Centuries Math.since J2000.
    T = (EPJ-2000E0)/100E0;

    // Initialize P_A and Q_A accumulators.
    P = 0E0;
    Q = 0E0;

    // Periodic terms.
    for(I=0;I<NPER;I++){
        W = D2PI*T;
        A = W/PQPER[I][0];
        S = Math.sin(A);
        C = Math.cos(A);
        P = P + C*PQPER[I][1] + S*PQPER[I][3];
        Q = Q + C*PQPER[I][2] + S*PQPER[I][4];
    }

    // Polynomial terms.
    W = 1E0;
    for(I=0;I<NPOL;I++){
        P = P + PQPOL[0][I]*W;
        Q = Q + PQPOL[1][I]*W;
        W = W*T;
    }

    // P_A and Q_A (radians).
    P = P*AS2R;
    Q = Q*AS2R;

    // Form the ecliptic pole vector.
    Z = Math.sqrt(Math.max(1E0-P*P-Q*Q,0E0));
    S = Math.sin(EPS0);
    C = Math.cos(EPS0);
    VEC[0] = P;
    VEC[1] = - Q*C - Z*S;
    VEC[2] = - Q*S + Z*C;

}
function ltp_PEQU ( EPJ: any, VEQ: any ){
    /*
    !*+
    !* - - - - -
    !* P E Q U
    !* - - - - -
    !*
    !* Long-term precession of the equator.
    !*
    !* Given:
    !* EPJ d Julian epoch (TT)
    !*
    !* Returned:
    !* VEQ d equator pole unit vector
    !*
    !* The vector is with respect to the J2000.0 mean equator and equinox.
    !*
    !* Reference: Vondrak et al., A&A (2011), Eq.9, Tab.2
    !*
    !* Date: 2011 May 14
    !*
    !* Authors: J.Vondrak, N.Capitaine, P.Wallace
    !*
    !*-----------------------------------------------------------------------
    */

    // Arcseconds to radians
    const AS2R = 4.848136811095359935899141E-6;

    // 2Pi
    const D2PI = 6.283185307179586476925287E0;

    // Number of polynomial terms
    const NPOL = 4;

    // Number of periodic terms
    const NPER = 14;

    // Miscellaneous
    let I, J;
    let T, X, Y, W, A, S, C;

    // Polynomial and periodic coefficients
    //DOUBLE PRECISION XYPOL(NPOL,2), XYPER(5,NPER)

    // Polynomials
    //DATA ((XYPOL(I,J),I=1,NPOL),J=1,2) 
    const XYPOL=[
        [+5453.282155E0, +0.4252841E0, -0.00037173E0, -0.000000152E0],
        [-73750.930350E0, -0.7675452E0, -0.00018725E0, +0.000000231E0]
    ];

    // Periodics
    //DATA ((XYPER(I,J),I=1,5),J=1,NPER)
    const XYPER=[
        [256.75E0, -819.940624E0, 75004.344875E0, 81491.287984E0, 1558.515853E0],
        [708.15E0, -8444.676815E0, 624.033993E0, 787.163481E0, 7774.939698E0],
        [274.20E0, 2600.009459E0, 1251.136893E0, 1251.296102E0, -2219.534038E0],
        [241.45E0, 2755.175630E0, -1102.212834E0, -1257.950837E0, -2523.969396E0],
        [2309.00E0, -167.659835E0, -2660.664980E0, -2966.799730E0, 247.850422E0],
        [492.20E0, 871.855056E0, 699.291817E0, 639.744522E0, -846.485643E0],
        [396.10E0, 44.769698E0, 153.167220E0, 131.600209E0, -1393.124055E0],
        [288.90E0, -512.313065E0, -950.865637E0, -445.040117E0, 368.526116E0],
        [231.10E0, -819.415595E0, 499.754645E0, 584.522874E0, 749.045012E0],
        [1610.00E0, -538.071099E0, -145.188210E0, -89.756563E0, 444.704518E0],
        [620.00E0, -189.793622E0, 558.116553E0, 524.429630E0, 235.934465E0],
        [157.87E0, -402.922932E0, -23.923029E0, -13.549067E0, 374.049623E0],
        [220.30E0, 179.516345E0, -165.405086E0, -210.157124E0, -171.330180E0],
        [1200.00E0, -9.814756E0, 9.344131E0, -44.919798E0, -22.899655E0]
    ]


    // Centuries Math.since J2000.
    T = (EPJ-2000E0)/100E0;

    // Initialize X and Y accumulators.
    X = 0E0;
    Y = 0E0;

    // Periodic terms.
    for(I=0;I<NPER;I++){
        W = D2PI*T;
        A = W/XYPER[I][0];
        S = Math.sin(A);
        C = Math.cos(A);
        X = X + C*XYPER[I][1] + S*XYPER[I][3];
        Y = Y + C*XYPER[I][2] + S*XYPER[I][4];
    }

    // Polynomial terms.
    W = 1E0;
    for(I=0;I<NPOL;I++){
        X = X + XYPOL[0][I]*W;
        Y = Y + XYPOL[1][I]*W;
        W = W*T;
    }

    // X and Y (direction coMath.sines).
    X = X*AS2R;
    Y = Y*AS2R;

    // Form the equator pole vector.
    VEQ[0] = X;
    VEQ[1] = Y;
    W = X*X + Y*Y;

    if ( W < 1E0 ){
        VEQ[2] = Math.sqrt(1E0-W)
    } else {
        VEQ[2] = 0E0;
    }

}
function ltp_PMAT ( EPJ: any, RP: any ){
    /*
    !*+
    !* - - - - -
    !* P M A T
    !* - - - - -
    !*
    !* Long-term precession matrix.
    !*
    !* Given:
    !* EPJ d Julian epoch (TT)
    !*
    !* Returned:
    !* RP d precession matrix, J2000.0 to date
    !*
    !* The matrix is in the sense
    !*
    !* P_date = RP x P_J2000,
    !*
    !* where P_J2000 is a vector with respect to the J2000.0 mean
    !* equator and equinox and P_date is the same vector with respect to
    !* the equator and equinox of epoch EPJ.
    !*
    !* Called:
    !* ltp_PEQU equator pole
    !* ltp_ECL ecliptic pole
    !* iau_PXP vector product (SOFA)
    !* iau_PN normalize vector (SOFA)
    !*
    !* Reference: Vondrak et al., A&A (2011), Eq.23
    !*
    !* Date: 2011 April 30
    !*
    !* Authors: J.Vondrak, N.Capitaine, P.Wallace
    !*
    !*-----------------------------------------------------------------------
    */

    const PEQR=[0,0,0];
    const PECL=[0,0,0];
    const V=[0,0,0];
    const EQX=[0,0,0];
    let W=0;

    //!* Equator pole (bottom row of matrix).
    ltp_PEQU ( EPJ, PEQR )

    //!* Ecliptic pole.
    ltp_PECL ( EPJ, PECL )

    //!* Equinox (top row of matrix).
    PXP ( PEQR, PECL, V )
    W=PN ( V, W, EQX )

    //!* Middle row of matrix.
    PXP ( PEQR, EQX, V )

    //!* The matrix elements.
    RP[0][0] = EQX[0];
    RP[0][1] = EQX[1];
    RP[0][2] = EQX[2];
    RP[1][0] = V[0];
    RP[1][1] = V[1];
    RP[1][2] = V[2];
    RP[2][0] = PEQR[0];
    RP[2][1] = PEQR[1];
    RP[2][2] = PEQR[2];
}

function PXP ( A: any, B: any, AXB: any ){
    //Converted from IAU SOFA Fortran version
    const XA = A[0];
    const YA = A[1];
    const ZA = A[2];
    const XB = B[0];
    const YB = B[1];
    const ZB = B[2];
    AXB[0] = YA*ZB - ZA*YB;
    AXB[1] = ZA*XB - XA*ZB;
    AXB[2] = XA*YB - YA*XB;
}

function PN ( P: any, R: any, U: any ){
    //Converted from IAU SOFA Fortran version
    const W=Math.sqrt(P[0]*P[0] +P[1]*P[1] +P[2]*P[2]);
    if ( W == 0E0 ){
        U[0]=0;
        U[1]=0;
        U[2]=0;
    } else {
        //iau_SXP ( 1E0/W, P, U );
        U[0]=P[0]*1.0/W;
        U[1]=P[1]*1.0/W;
        U[2]=P[2]*1.0/W;
    }

    //Return the modulus.
    R = W
    return W;
}

function ltp_PBMAT ( EPJ: any, RPB: any ){
    /*
    !+
    !* - - - - - -
    !* P B M A T
    !* - - - - - -
    !*
    !* Long-term precession matrix, including GCRS frame bias.
    !*
    !* Given:
    !* EPJ d Julian epoch (TT)
    !*
    !* Returned:
    !* RPB d precession-bias matrix, J2000.0 to date
    !*
    !* The matrix is in the sense
    !*
    !* P_date = RPB x P_J2000,
    !*
    !* where P_J2000 is a vector in the Geocentric Celestial Reference
    !* System, and P_date is the vector with respect to the Celestial
    !* Intermediate Reference System at that date but with nutation
    !* neglected.
    !*
    !* A first order bias formulation is used, of sub-microarcsecond
    !* accuracy compared with a full 3D rotation.
    !*
    !* Called:
    !* ltp_PMAT precession matrix
    !*
    !* Reference: Vondrak et al., A&A (2011), Section A.4.
    !*
    !* Date: 2011 April 30
    !*
    !* Authors: J.Vondrak, N.Capitaine, P.Wallace
    !*
    !*-----------------------------------------------------------------------
    */
    //Arcseconds to radians
    const AS2R = 4.848136811095359935899141E-6;

    //Frame bias (IERS Conventions 2010, Eqs. 5.21 and 5.33)
    const DX = -0.016617E0 * AS2R;
    const DE = -0.0068192E0 * AS2R;
    const DR = -0.0146E0 * AS2R;

    const RP=[[0,0,0],[0,0,0],[0,0,0]];

    //Precession matrix.
    ltp_PMAT ( EPJ, RP )

    //!* Apply the bias.
    RPB[0][0] =   RP[0][0]    - RP[0][1]*DR + RP[0][2]*DX;
    RPB[0][1] =   RP[0][0]*DR + RP[0][1]    + RP[0][2]*DE;
    RPB[0][2] = - RP[0][0]*DX - RP[0][1]*DE + RP[0][2];
    RPB[1][0] =   RP[1][0]    - RP[1][1]*DR + RP[1][2]*DX;
    RPB[1][1] =   RP[1][0]*DR + RP[1][1]    + RP[1][2]*DE;
    RPB[1][2] = - RP[1][0]*DX - RP[1][1]*DE + RP[1][2];
    RPB[2][0] =   RP[2][0]    - RP[2][1]*DR + RP[2][2]*DX;
    RPB[2][1] =   RP[2][0]*DR + RP[2][1]    + RP[2][2]*DE;
    RPB[2][2] = - RP[2][0]*DX - RP[2][1]*DE + RP[2][2];

}

function precessionTest_GM() {
    //Test value
    const EPJ=- 1373.5959534565e0;

    const VEC=[0,0,0];
    ltp_PECL(EPJ,VEC);
    console.log("PECL",VEC);

    const VEC2=[0,0,0];
    ltp_PEQU(EPJ,VEC2);
    console.log("PEQU",VEC2);

    const RP=[[0,0,0],[0,0,0],[0,0,0]];
    ltp_PMAT(EPJ,RP);
    console.log("PMAT",RP);

    const RP2=[[0,0,0],[0,0,0],[0,0,0]];
    ltp_PBMAT(EPJ,RP2);
    console.log("PBMAT",RP2);
}

export { precessionTest_GM, ltp_PECL, ltp_PEQU, ltp_PMAT, ltp_PBMAT };