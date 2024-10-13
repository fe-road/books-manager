import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardContent, Typography, Grid2 as Grid } from '@mui/material';

import { searchBooks } from '../../services/api-service';
import { RootState } from '../../store/store';
import { logout } from '../../store/reducers/auth/authSlice';

const SearchBooks = () => {
    const dispatch = useDispatch();
    const authToken = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        (async () => {
            if (authToken) {
                const response = await searchBooks(authToken, 'Lord of the Rings');
                console.log(response);
            }
        })();
    }, [authToken]);

    const performLogout = () => {
        dispatch(logout());
    };

    return (
        <Grid container className='full-width'>
            <Grid size={{ xs: 12, sm: 8, md: 6, lg: 4 }} offset={{ sm: 2, md: 3, lg: 4 }}>
                <Card>
                    <CardContent className='text-center'>
                        <Typography variant='subtitle1'>You are logged in!</Typography>
                        <Button variant='outlined' onClick={performLogout}>
                            Logout
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default SearchBooks;
