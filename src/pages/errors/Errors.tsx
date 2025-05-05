import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ComparsionResult } from './types';
import { Graph } from '../../tools/graph/Graph';
import { DataSet } from '../../tools/graph/types';
import { cst } from '../../astro/constants';
import { applySavitzkyGolayFilter } from '../../tools/savitzkyGolayFilter';



const Errors: React.FC<{ results: Map<string, ComparsionResult[]> }> = ({ results }) => {
    const keys = [...results.keys()];
    const [selectedObject, setSelectedObject] = useState<string>(keys.length > 0 ? keys[0] : "");

    useEffect(() => {
    }, [results]);

    if (!selectedObject)
        return <><Typography>Loading..</Typography></>

    const data0: DataSet = {
        points: results.get(selectedObject)!.map((cr) => ({ x: cr.t, y: cr.angle/cst.ARCSEC })),
        scale: 5, 
        color: "rgb(92, 193, 233)",
        opacity: 0.5,
        drawPoints: true,
        drawLines: false,
        label: "Datapoints",
    };

    const sg = applySavitzkyGolayFilter(data0.points.map((v) => v.x), data0.points.map((v) => v.y), 20, 3, 1000);
    const sgData: DataSet = { 
        points: sg[0].map((x, k) => ({ x: x, y: sg[1][k] })),
        scale: 5, 
        color: "rgb(255, 0, 0)",
        drawPoints: false,
        drawLines: true,
        label: "Savitzky-Golay filtered",
    };

    return (
        <Box sx={{ width: '100%' }}>
            {/* Wrapping Tabs */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, m: 1 }}>
                {keys.map((s) => (
                    <Button
                        key={s}
                        variant={selectedObject === s ? 'contained' : 'outlined'}
                        onClick={() => setSelectedObject(s)}
                    >
                        {s}
                    </Button>
                ))}
            </Box>
            
            <Box>
                <Typography variant="h4" gutterBottom>
                    {selectedObject} Error Analysis
                </Typography>
                
                <Graph data={[data0, sgData]} location={{ x: 0, y: 1, scale: 10 }}/>
                
                <Typography variant="h5" gutterBottom>
                    Analysis
                </Typography>
                <Typography component="p">
                    Error analysis content for {selectedObject}...
                </Typography>
            </Box>
        </Box>
    );
};

export default Errors;