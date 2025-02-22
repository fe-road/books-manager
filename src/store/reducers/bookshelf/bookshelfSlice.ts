import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookshelfModel } from '../../../models/BookshelfModel';

export interface BookshelfState {
    result: Array<BookshelfModel>;
}

const initialState: BookshelfState = {
    result: [],
};

const bookshelfSlice = createSlice({
    name: 'bookshelf',
    initialState,
    reducers: {
        setResult: (state: BookshelfState, action: PayloadAction<Array<BookshelfModel>>) => {
            state.result = action.payload;
        },
    },
});

export const { setResult } = bookshelfSlice.actions;

export default bookshelfSlice.reducer;
