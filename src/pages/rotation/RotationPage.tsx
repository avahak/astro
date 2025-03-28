import React, { Suspense, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { RotationScene } from './sceneRotation';

const SceneComponent: React.FC = () => { 
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log("useEffect: ", containerRef.current);
        const scene = new RotationScene(containerRef.current!);
        return () => {
            scene.cleanUp();
        };
    }, []);

    return (
        <Box style={{ width: "100%", height: "600px" }}>
            <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
        </Box>
    );
};

const RotationPage: React.FC = () => {
    return (
        <Container maxWidth="xl">
            <Box display="flex" justifyContent="center" sx={{py: 2}}>
                <Typography variant="h2">
                    Rotation
                </Typography>
            </Box>
            <SceneComponent />
            <Box display="flex" justifyContent="center" sx={{py: 2}}>
                <Typography>
                    Text here
                </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
                <MUILink component={RouterLink} to="/" variant="body1" color="primary">
                    Back
                </MUILink>
            </Box>
        </Container>
    );
}

export { RotationPage };