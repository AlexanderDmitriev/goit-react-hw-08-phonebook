import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authOperations from '../api/authification';

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
    [authOperations.addNewUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn=true;
    },
    [authOperations.loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn=true;
    },
    [authOperations.logoutUser.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn=false;
    }, 
    [authOperations.getUserInformation.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn=true;
    },
  },
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token']
};

export const persistedToken = persistReducer(persistConfig, authSlice.reducer);

/* export const {token} = authSlice.reducer; */

