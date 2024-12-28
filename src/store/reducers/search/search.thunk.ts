import { Dispatch } from 'redux';

import { searchBooks } from '../../../services/api-service';
import { setResult, setTotalAmountOfItems } from './searchSlice';
import { RootState } from '../../store';

export const doSearch = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        const { token: authToken } = getState().auth;
        const { text: searchText, currentPage, pageSize } = getState().search;

        if (authToken && searchText && currentPage) {
            const response = await searchBooks(authToken, searchText, currentPage, pageSize);
            dispatch(setResult(response.data.items));
            dispatch(setTotalAmountOfItems(response.data.totalItems));
        }
    };
};
