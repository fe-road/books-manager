import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { Button, Card, CardContent, Typography } from '@mui/material';

import { login } from '../../store/reducers/auth/authSlice';

import './login.scss';
import { RootState } from '../../store/store';
import { useEffect } from 'react';

const loggedInPage = '/app/search';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authToken = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        if (authToken) {
            navigate(loggedInPage);
        }
    }, [authToken, navigate]);

    const loginGoogle = useGoogleLogin({
        onSuccess: (credentialResponse) => {
            dispatch(login(credentialResponse.access_token ?? ''));
            navigate(loggedInPage);
        },
        onError: () => {
            console.error('Login failed!');
        },
        scope: 'https://www.googleapis.com/auth/books',
    });

    return (
        <Card>
            <CardContent className='login-card'>
                <Typography variant='subtitle1'>Great to see you back!</Typography>
                <Button variant='contained' onClick={() => loginGoogle()}>
                    Login via Google
                </Button>
            </CardContent>
        </Card>
    );
};

export default Login;
