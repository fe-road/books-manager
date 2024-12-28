import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { AppDispatch, RootState } from '../../store/store';
import { useEffect } from 'react';
import { resetToState } from '../../store/reducers/search/searchSlice';
import { doSearch } from '../../store/reducers/search/search.thunk';

const QueryParamsSync = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchText = useSelector((state: RootState) => state.search.text);
    const searchPageSize = useSelector((state: RootState) => state.search.pageSize);
    const searchCurrentPage = useSelector((state: RootState) => state.search.currentPage);

    useEffect(() => {
        const searchQuery = searchParams.get('search');
        const pageSizeQuery = Number(searchParams.get('pageSize'));
        const currentPageQuery = Number(searchParams.get('currentPage'));

        if (searchQuery !== searchText || pageSizeQuery !== searchPageSize || currentPageQuery !== searchCurrentPage) {
            dispatch(
                resetToState({
                    text: searchQuery || '',
                    currentPage: currentPageQuery,
                    pageSize: pageSizeQuery,
                })
            );
            dispatch(doSearch());
        }
    }, [searchParams, dispatch, resetToState]);

    useEffect(() => {
        setSearchParams({
            search: searchText,
            pageSize: `${searchPageSize}`,
            currentPage: `${searchCurrentPage}`,
        });
    }, [searchText, searchPageSize, searchCurrentPage, setSearchParams]);

    return null;
};

export default QueryParamsSync;
