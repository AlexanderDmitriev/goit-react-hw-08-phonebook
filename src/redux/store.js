import { configureStore } from '@reduxjs/toolkit';
import { phoneBookApi } from './contacts';
/* import { usersApi } from './user'; */
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

export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    /* [usersApi.reducerPath]: usersApi.reducer,  */
    [authSlice.name]:persistedToken,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    phoneBookApi.middleware,
    /* usersApi.middleware, */
  ],
});

export const persistor = persistStore(store);
