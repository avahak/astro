import { Box, Container, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { Link as MUILink } from '@mui/material';
import { BUILD_TIMESTAMP } from "../buildInfo";

const FrontPage = () => {
    return (<>
        <Container maxWidth="xl">
            <Typography variant="h2" textAlign="center" sx={{py: 2}}>
                In progress...
            </Typography>
            <Typography variant="h6">
                Pages
            </Typography>
            <Box sx={{p: 2}}>
                <MUILink component={RouterLink} to="/sky" variant="body1" color="primary">
                    Sky
                </MUILink>
                <br />
                <MUILink component={RouterLink} to="/precession" variant="body1" color="primary">
                    Precession
                </MUILink>
                <br />
                <MUILink component={RouterLink} to="/rotation" variant="body1" color="primary">
                    Rotation
                </MUILink>
            </Box>
            <Typography variant="h6">
                Helpers (ignore these)
            </Typography>
            <Box sx={{p: 2}}>
                <MUILink component={RouterLink} to="/test" variant="body1" color="primary">
                    Test
                </MUILink>
            </Box>
            <Typography variant="body2" color="textSecondary" sx={{mt: 10}}>{`Build: ${BUILD_TIMESTAMP}`}</Typography>
        </Container>
    </>);
};

export { FrontPage };