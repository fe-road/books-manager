import { useDispatch, useSelector } from 'react-redux';
import { Stack, Pagination } from '@mui/material';

import { setCurrentPage } from '../../store/reducers/search/searchSlice';
import { AppDispatch, RootState } from '../../store/store';
import { doSearch } from '../../store/reducers/search/search.thunk';

import './search-pagination.scss';

const SearchPagination = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentPage = useSelector((state: RootState) => state.search.currentPage);
    const pageSize = useSelector((state: RootState) => state.search.pageSize);
    const totalAmountOfItems = useSelector((state: RootState) => state.search.totalAmountOfItems);

    const changePage = (_: React.ChangeEvent<unknown>, newPage: number) => {
        dispatch(setCurrentPage(newPage));
        dispatch(doSearch());
    };

    return (
        <Stack spacing={2} className='pagination'>
            <Pagination page={currentPage} count={Math.ceil(totalAmountOfItems / pageSize)} color='primary' onChange={changePage} />
        </Stack>
    );
};

export default SearchPagination;
