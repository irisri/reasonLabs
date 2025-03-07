import { Variant } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type VariantState = {
  testVariant: Variant;
};

const initialState: VariantState = {
  testVariant: "A",
};

const variantSlice = createSlice({
  name: "variant",
  initialState,
  reducers: {
    setTestVariant: (state, action: PayloadAction<"A" | "B">) => {
      state.testVariant = action.payload;
    },
  },
});

export const { setTestVariant } = variantSlice.actions;
export const variantReducer = variantSlice.reducer;
