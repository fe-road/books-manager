import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { Button, Card, CardContent, Typography } from '@mui/material';

import { login } from '../../store/reducers/auth/authSlice';
import { RootState } from '../../store/store';
import { LOGGED_IN_PAGE } from '../../constants/navigation-constants';
import { GOOGLE_BOOKS_SCOPE } from '../../constants/api-constants';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authToken = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        if (authToken) {
            navigate(LOGGED_IN_PAGE);
        }
    }, [authToken, navigate]);

    const loginGoogle = useGoogleLogin({
        onSuccess: (credentialResponse) => {
            dispatch(login(credentialResponse.access_token ?? ''));
            navigate(LOGGED_IN_PAGE);
        },
        onError: () => {
            console.error('Login failed!');
        },
        scope: GOOGLE_BOOKS_SCOPE,
    });

    return (
        <Card>
            <CardContent className='text-center'>
                <Typography variant='subtitle1'>Great to see you back!</Typography>
                <Button variant='contained' onClick={() => loginGoogle()}>
                    Login via Google
                </Button>
            </CardContent>
        </Card>
    );
};

export default Login;
