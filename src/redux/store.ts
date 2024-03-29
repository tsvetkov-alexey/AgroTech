import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter';
import startup from './slices/startup';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    startup,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
