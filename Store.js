import { configureStore } from '@reduxjs/toolkit';
import navReducer from './redux/NavSlice';

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
}); //revisit this later based on reducers