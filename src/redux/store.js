import { configureStore } from '@reduxjs/toolkit';
import { phoneBookApi } from './contacts';
import {usersApi} from './user';
import {filterSlice} from './filter';

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    phoneBookApi.middleware,
  ],
});

