import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface StringStatesDynamicType {
  stringStatesDynamic: { [key: string | number]: string };
}

const initialState: StringStatesDynamicType = {
  stringStatesDynamic: {},
};

const stringDynamicSlice = createSlice({
  name: "stringDynamic",
  initialState,
  reducers: {
    setStringDynamic: (
      state,
      action: PayloadAction<{ key: string | number; value: string }>
    ) => {
      state.stringStatesDynamic[action.payload.key] = action.payload.value;
    },
    resetStringDynamic: (state) => {
      state.stringStatesDynamic = {};
    },
  },
});

export const { setStringDynamic, resetStringDynamic } =
  stringDynamicSlice.actions;

export default stringDynamicSlice.reducer;
