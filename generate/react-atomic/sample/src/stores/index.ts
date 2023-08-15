import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth.slice';
import modalSlice from './modal.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    modal: modalSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
