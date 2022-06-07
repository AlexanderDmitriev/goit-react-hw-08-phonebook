import { configureStore } from '@reduxjs/toolkit';
import { phoneBookApi } from './contacts';
import { filterSlice } from './filter';
import { authSlice,persistedToken } from './authSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import {contactsSlice} from './contactsSlice'

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    [authSlice.name]:persistedToken,
    [contactsSlice.name]:contactsSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    phoneBookApi.middleware,
  ],
});

export const persistor = persistStore(store);
