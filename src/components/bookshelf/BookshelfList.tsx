import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid2 as Grid } from '@mui/material';

import BookshelfListItem from './BookshelfListItem';

import { AppDispatch, RootState } from '../../store/store';
import { getBookshelfList } from '../../store/reducers/bookshelf/bookshelf.thunk';

const BookshelfList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const bookshelfList = useSelector((state: RootState) => state.bookshelf.result);

    useEffect(() => {
        dispatch(getBookshelfList());
    }, [dispatch]);

    return (
        <>
            <Typography variant='h4' component='h1'>
                Bookshelves
            </Typography>
            <Grid container spacing={1} className='full-width'>
                {(bookshelfList || []).map((item) => (
                    <Grid key={item.id} size={{ xs: 6, md: 4 }}>
                        <BookshelfListItem item={item} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default BookshelfList;
