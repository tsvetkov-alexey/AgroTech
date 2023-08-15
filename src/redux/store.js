import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter';
import startup from './slices/startup';

const store = configureStore({
  reducer: {
    startup,
    filter,
  },
});

export default store;
