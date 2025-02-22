import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth/authSlice';
import searchReducer from './reducers/search/searchSlice';
import bookshelfReducer from './reducers/bookshelf/bookshelfSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        search: searchReducer,
        bookshelf: bookshelfReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
