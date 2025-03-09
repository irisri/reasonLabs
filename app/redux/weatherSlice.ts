import { City } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WeatherState = {
  selectedCity: string | null;
  cities: City[];
};

const initialState: WeatherState = {
  selectedCity: null,
  cities: [],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setSelectedCity: (state, action: PayloadAction<string>) => {
      state.selectedCity = action.payload;
    },
    setCities: (state, action: PayloadAction<City[]>) => {
      state.cities = action.payload;
    },
  },
});

export const { setSelectedCity, setCities } = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
