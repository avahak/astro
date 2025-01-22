import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouter } from './AppRouter.tsx';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontSize: 14,
    }
});

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppRouter />
    </ThemeProvider>
);