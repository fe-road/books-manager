import { Typography } from '@mui/material';

import SearchBooks from '../components/search/SearchBooks';

const BookSearchRoute = () => {
    return (
        <>
            <Typography variant='h2' component='h1'>
                Books Search
            </Typography>
            <SearchBooks />
        </>
    );
};

export default BookSearchRoute;
