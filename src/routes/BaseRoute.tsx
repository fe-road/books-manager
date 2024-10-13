import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';

import store from '../store/store';
import { API_CLIENT_ID } from '../env/api';
import theme from '../theme';

import '../styles/base.scss';
import '../styles/utils.scss';

const BaseRoute = () => {
    return (
        <GoogleOAuthProvider clientId={API_CLIENT_ID}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Container fixed className='base-container'>
                        <Outlet />
                    </Container>
                </ThemeProvider>
            </Provider>
        </GoogleOAuthProvider>
    );
};

export default BaseRoute;
