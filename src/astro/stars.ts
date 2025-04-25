type StarData = {
    HIP: number;
    Comp: string;
    HD: number;
    HR: number;
    bayer: string;
    XHIP_Name: string;
    BSC_Name: string;
    IAU_Name: string;
    RA: number;
    DE: number;
    Plx: number;
    pmRA: number;
    pmDE: number;
    RV: number;
    Vmag: number;
    Bmag: number;
    SpType: string;
    Cst: string;
    GrpName: string;
};
  
// Utility function to destructure the array into named variables
function destructureStarData(data: any[]) {
    const [
        HIP, Comp, HD, HR, bayer, XHIP_Name, BSC_Name, IAU_Name,
        RA, DE, Plx, pmRA, pmDE, RV, Vmag, Bmag, SpType, Cst, GrpName
    ] = data;

    return {
        HIP, Comp, HD, HR, bayer, XHIP_Name, BSC_Name, IAU_Name,
        RA, DE, Plx, pmRA, pmDE, RV, Vmag, Bmag, SpType, Cst, GrpName
    };
}

export type { StarData };
export { destructureStarData };