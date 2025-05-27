import React from 'react';
import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { StarChart } from './StarChart';

const ChartTest: React.FC = () => {
    return (<>
        <Box display="flex" flexDirection="column" margin="20px">
            <MUILink component={RouterLink} to="/" variant="body1" color="primary">
                Back
            </MUILink>

            <StarChart x={4} />
            
        </Box>
    </>)
}

export { ChartTest };