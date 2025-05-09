import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ComparsionResult } from './types';
import { Graph } from '../../tools/graph/Graph';
import { DataSet } from '../../tools/graph/types';
import { cst } from '../../astro/constants';
import { applySavitzkyGolayFilter } from '../../tools/savitzkyGolayFilter';

function sgFilter(ds: DataSet, color: string) {
    const sg = applySavitzkyGolayFilter(ds.points.map((v) => v.x), ds.points.map((v) => v.y), 30, 3, 1000);
    const sgData: DataSet = { 
        points: sg[0].map((x, k) => ({ x: x, y: sg[1][k] })),
        scale: 5, 
        color: color,
        drawPoints: false,
        drawLines: true,
        label: `SG-filtered ${ds.label}`,
        groupName: ds.groupName,
        isVisible: ds.isVisible,
    };
    return sgData;
}

const Errors: React.FC<{ results: Map<string, ComparsionResult[]> }> = ({ results }) => {
    const keys = [...results.keys()];
    const prefixes = [...new Set(keys.map(s => s.split('_')[0]))];
    const [selectedPrefix, setSelectedPrefix] = useState<string>(prefixes.length > 0 ? prefixes[0] : "");

    useEffect(() => {
    }, [results]);

    if (!selectedPrefix)
        return <><Typography>Loading..</Typography></>

    const key0 = `${selectedPrefix}_0`;
    const key1 = `${selectedPrefix}_1`;
    const keyCIO = `${selectedPrefix}_CIO`;

    const colors = [
        ["rgb(93, 251, 188)", "rgb(251, 93, 127)"],
        ["rgb(89, 255, 249)", "rgb(251, 93, 201)"],
        ["rgb(147, 141, 255)", "rgb(255, 161, 94)"],
    ];

    const data0: DataSet = {
        points: results.get(key0)!.map((cr) => ({ x: 2000+cr.t*100, y: cr.angle/cst.ARCSEC })),
        scale: 4, 
        color: colors[0][0],
        opacity: 0.4,
        drawPoints: true,
        drawLines: false,
        label: "GSMT IAU 2006",
        groupName: "GMST_2006",
        isVisible: false,
        inspectInfo: (k) => results.get(key0)![k].infoRef,
    };
    const data1: DataSet = {
        points: results.get(key1)!.map((cr) => ({ x: 2000+cr.t*100, y: cr.angle/cst.ARCSEC })),
        scale: 4, 
        color: colors[1][0],
        opacity: 0.4,
        drawPoints: true,
        drawLines: false,
        label: "GSMT IAU 1982",
        groupName: "GMST_1982",
        isVisible: false,
        inspectInfo: (k) => results.get(key1)![k].infoRef,
    };
    const dataCIO: DataSet = {
        points: results.get(keyCIO)!.map((cr) => ({ x: 2000+cr.t*100, y: cr.angle/cst.ARCSEC })),
        scale: 4, 
        color: colors[2][0],
        opacity: 0.4,
        drawPoints: true,
        drawLines: false,
        label: "CIO",
        groupName: "CIO",
        // isVisible: false,
        inspectInfo: (k) => results.get(keyCIO)![k].infoRef,
    };
    const sgData0 = sgFilter(data0, colors[0][1]);
    const sgData1 = sgFilter(data1, colors[1][1]);
    const sgDataCIO = sgFilter(dataCIO, colors[2][1]);


    return (
        <Box sx={{ width: '100%' }}>
            {/* Wrapping Tabs */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, m: 1 }}>
                {prefixes.map((s) => (
                    <Button
                        key={s}
                        variant={selectedPrefix === s ? 'contained' : 'outlined'}
                        onClick={() => setSelectedPrefix(s)}
                    >
                        {s}
                    </Button>
                ))}
            </Box>
            
            <Box>
                <Typography variant="h4" gutterBottom>
                    {selectedPrefix} Error Analysis
                </Typography>
                
                <Graph 
                    data={[data0, data1, dataCIO, sgData0, sgData1, sgDataCIO]} 
                    location={{ x: 2000, y: 5, scaleX: 2000, scaleY: 10 }}
                    xLabel='Time [Julian years]'
                    yLabel='Error [arcseconds]'
                    title='Error graph'
                    height='600px'
                />
                
                {/* <Typography component="p">
                    Todo
                </Typography>*/ }
            </Box>
        </Box>
    );
};

export default Errors;