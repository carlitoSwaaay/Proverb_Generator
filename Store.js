import { configureStore } from '@reduxjs/toolkit';
import navReducer from './NavSlice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});