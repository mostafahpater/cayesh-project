import { configureStore } from '@reduxjs/toolkit'
// Import Slices 
import UsersSlice from './Slices/UsersSlice';
import NomineeSlice from './Slices/NomineeSlice';
import {authApi} from './Services/authService';

export const store = configureStore({
  reducer: {
    users: UsersSlice,
    nominee: NomineeSlice,
    [authApi.reducerPath]:authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(authApi.middleware),
});