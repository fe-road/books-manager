import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BookModel } from '../../../models/BookModel';

export interface SearchState {
    text: string;
    currentPage: number;
    pageSize: number;
    totalAmountOfItems: number;
    result: Array<BookModel>;
}

const initialState: SearchState = {
    text: '',
    currentPage: 1,
    pageSize: 10,
    totalAmountOfItems: 0,
    result: [],
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setText: (state: SearchState, action: PayloadAction<string>) => {
            state.text = action.payload;
            state.currentPage = 1;
        },
        setCurrentPage: (state: SearchState, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setPageSize: (state: SearchState, action: PayloadAction<number>) => {
            state.pageSize = action.payload;
            state.currentPage = 1;
        },
        setTotalAmountOfItems: (state: SearchState, action: PayloadAction<number>) => {
            state.totalAmountOfItems = action.payload;
        },
        setResult: (state: SearchState, action: PayloadAction<Array<BookModel>>) => {
            state.result = action.payload;
        },
        resetToState: (state: SearchState, action: PayloadAction<Partial<SearchState>>) => {
            state.text = action.payload.text ?? initialState.text;
            state.currentPage = action.payload.currentPage ?? initialState.currentPage;
            state.pageSize = action.payload.pageSize ?? initialState.pageSize;
            state.totalAmountOfItems = 0;
            state.result = [];
        },
    },
});

export const { setText, setCurrentPage, setPageSize, setTotalAmountOfItems, setResult, resetToState } = searchSlice.actions;

export default searchSlice.reducer;
