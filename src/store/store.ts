import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth/authSlice';
import searchReducer from './reducers/search/searchSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        search: searchReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
