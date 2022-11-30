import { configureStore } from '@reduxjs/toolkit';
import style from "../features/slices/style_slice";

export const store = configureStore({
    reducer: {
      style
    },
  });