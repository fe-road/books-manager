import { useGoogleLogin } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import { searchBooks } from '../../services/api-service';
import { Button, Card, CardContent, Typography } from '@mui/material';

import './login.scss';

const Login = () => {
    const [authToken, setAuthToken] = useState('');

    const login = useGoogleLogin({
        onSuccess: (credentialResponse) => {
            console.log(credentialResponse);
            setAuthToken(credentialResponse.access_token ?? '');
        },
        onError: () => {
            console.error('Login failed!');
        },
        scope: 'https://www.googleapis.com/auth/books',
    });

    useEffect(() => {
        (async () => {
            if (authToken) {
                const response = await searchBooks(authToken, 'Lord of the Rings');
                console.log(response);
            }
        })();
    }, [authToken]);

    return (
        <Card>
            <CardContent className='login-card'>
                <Typography variant='subtitle1'>Great to see you back!</Typography>
                <Button variant='contained' onClick={() => login()}>
                    Login via Google
                </Button>
            </CardContent>
        </Card>
    );
};

export default Login;
