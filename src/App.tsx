import React, { Suspense } from 'react';
import { Box, Container, Typography } from '@mui/material';
const ThreeScene = React.lazy(() => import('./ThreeScene'));

const App: React.FC = () => {
    return (
        <Container maxWidth="xl">
            <Box display="flex" justifyContent="center" sx={{py: 2}}>
                <Typography variant="h2">
                    Astro
                </Typography>
            </Box>
            <Box style={{ width: "100%", height: "600px" }}>
            <Suspense fallback={<Box display="flex" justifyContent="center"><Typography>Loading..</Typography></Box>}>
                <ThreeScene />
            </Suspense>
            </Box>
            <Box display="flex" justifyContent="center" sx={{py: 2}}>
                <Typography>
                    Text here
                </Typography>
            </Box>
            {/* <MUILink component={RouterLink} to="/" variant="body1" color="primary">
                Back
            </MUILink> */}
        </Container>
    );
};

export { App };