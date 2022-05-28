import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState={
    user:{name:null,
    email:null},
    token:null,
    isLoggedIn:false
}

export const authSlice = createSlice({
    name: 'authification',
    initialState,
    extraReducers:{},
  });
  
 

  const persistConfig = {
    key: 'token',
    storage,
    /* whitelist: ['token'] */
  }
  
  export const persistedToken = persistReducer(persistConfig,authSlice.reducer);
  
  /* export const {token} = authSlice.reducer; */

  export default authSlice.reducer;