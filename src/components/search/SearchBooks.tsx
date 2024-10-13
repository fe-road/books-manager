import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, CardContent, Typography } from '@mui/material';

import { searchBooks } from '../../services/api-service';
import { RootState } from '../../store/store';

const SearchBooks = () => {
    const authToken = useSelector((state: RootState) => state.auth.token);

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
            <CardContent>
                <Typography variant='subtitle1'>You are logged in!</Typography>
            </CardContent>
        </Card>
    );
};

export default SearchBooks;
