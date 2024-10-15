import { createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: ['"Work Sans"', 'sans-serif'].join(','),
    },
    palette: {
        secondary: {
            main: '#ffffff',
        },
    },
});

export default theme;
