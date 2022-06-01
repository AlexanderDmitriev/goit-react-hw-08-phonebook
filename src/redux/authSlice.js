import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { usersApi } from './user';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'authification',
  initialState,
  extraReducers: {
    [usersApi.addNewUser](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn=true;
    },
    [usersApi.loginUser](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn=true;
    },
  },
});

const persistConfig = {
  key: 'token',
  storage,
  /* whitelist: ['token'] */
};

export const persistedToken = persistReducer(persistConfig, authSlice.reducer);

/* export const {token} = authSlice.reducer; */

export default authSlice.reducer;
