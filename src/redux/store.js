import { configureStore } from '@reduxjs/toolkit'
// Import Slices 
import UsersSlice from './Slices/UsersSlice';
import NomineeSlice from './Slices/NomineeSlice';

export const store = configureStore({
  reducer: {
    users: UsersSlice,
    nominee: NomineeSlice,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});