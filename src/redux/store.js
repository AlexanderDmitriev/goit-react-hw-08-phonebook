import { configureStore } from '@reduxjs/toolkit';
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
  ],
});

export const persistor = persistStore(store);
