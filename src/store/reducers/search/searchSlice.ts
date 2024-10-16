import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookModel } from '../../../models/BookModel';

interface SearchState {
    text: string;
    result: Array<BookModel>;
}

const initialState: SearchState = {
    text: '',
    result: [],
};

const searchSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setText: (state: SearchState, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        setResult: (state: SearchState, action: PayloadAction<Array<BookModel>>) => {
            state.result = action.payload;
        },
    },
});

export const { setText, setResult } = searchSlice.actions;

export default searchSlice.reducer;
