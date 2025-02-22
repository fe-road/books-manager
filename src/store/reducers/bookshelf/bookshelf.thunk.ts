import { Dispatch } from 'redux';

import { searchBookshelves } from '../../../services/api-service';
import { setResult } from './bookshelfSlice';
import { RootState } from '../../store';

export const getBookshelfList = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        const { token: authToken } = getState().auth;

        if (authToken) {
            const response = await searchBookshelves(authToken);
            console.log(response);
            dispatch(setResult(response.data.items));
        }
    };
};
