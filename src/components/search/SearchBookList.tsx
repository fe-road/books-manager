import { useSelector } from 'react-redux';
import { Typography, Grid2 as Grid, Card, CardContent } from '@mui/material';

import { RootState } from '../../store/store';
import SearchBookListItem from './SearchBookListItem';
import SearchPagination from './SearchPagination';

const SearchBookList = () => {
    const searchText = useSelector((state: RootState) => state.search.text);
    const bookList = useSelector((state: RootState) => state.search.result);

    return (
        <>
            <Typography variant='h4' component='h1'>
                {searchText ? `Searching books for "${searchText}"` : 'Please use the search field to perform a search'}
            </Typography>
            <Grid container spacing={1} className='full-width'>
                {(bookList || []).map((item) => (
                    <Grid key={item.id} size={{ xs: 12, md: 6 }}>
                        <SearchBookListItem item={item} />
                    </Grid>
                ))}
                {!!searchText && !bookList?.length && (
                    <Grid size={{ xs: 12 }}>
                        <Card>
                            <CardContent>
                                <Typography variant='subtitle1'>
                                    Something went wrong during the search. Please search something different or try again later.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>

            {!!searchText && !!bookList?.length && <SearchPagination />}
        </>
    );
};

export default SearchBookList;
