import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const AUTH_TOKEN_PERSISTED_KEY = 'authToken';

interface AuthState {
    token: string;
}

const persistToken = (authToken: string) => {
    localStorage.setItem(AUTH_TOKEN_PERSISTED_KEY, authToken);
};

const loadPersistedToken = (): string => {
    return localStorage.getItem(AUTH_TOKEN_PERSISTED_KEY) ?? '';
};

const initialState: AuthState = {
    token: loadPersistedToken(),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            persistToken(state.token);
        },
        logout: (state) => {
            state.token = '';
            persistToken(state.token);
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
