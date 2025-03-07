import { configureStore } from "@reduxjs/toolkit";
import { variantReducer } from "./redux/variantSlice";
import { weatherReducer } from "./redux/weatherSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    variant: variantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
