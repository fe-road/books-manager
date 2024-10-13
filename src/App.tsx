import { GoogleOAuthProvider } from '@react-oauth/google';
import { Container, CssBaseline, Grid2 as Grid, ThemeProvider, Typography } from '@mui/material';
import { API_CLIENT_ID } from './env/api';
import Login from './components/login/Login';

import theme from './theme';

import './app.scss';

function App() {
    return (
        <GoogleOAuthProvider clientId={API_CLIENT_ID}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container fixed className='app-container'>
                    <Typography variant='h2' component='h1'>
                        Books Manager
                    </Typography>
                    <Grid container className='main-grid'>
                        <Grid size={{ xs: 12, sm: 8, md: 6, lg: 4 }} offset={{ sm: 2, md: 3, lg: 4 }}>
                            <Login />
                        </Grid>
                    </Grid>
                </Container>
            </ThemeProvider>
        </GoogleOAuthProvider>
    );
}

export default App;
