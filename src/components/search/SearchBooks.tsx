import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography, Grid2 as Grid } from '@mui/material';

import { searchBooks } from '../../services/api-service';
import { RootState } from '../../store/store';

const SearchBooks = () => {
    const authToken = useSelector((state: RootState) => state.auth.token);

    useEffect(() => {
        (async () => {})();
    }, [authToken]);

    return (
        <Grid container className='full-width'>
            <Grid size={{ xs: 12, sm: 8, md: 6, lg: 4 }} offset={{ sm: 2, md: 3, lg: 4 }}>
                <Card>
                    <CardContent className='text-center'>
                        <Typography variant='subtitle1'>You are logged in!</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default SearchBooks;
