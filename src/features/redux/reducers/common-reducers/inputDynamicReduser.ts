import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InputStatesDynamicType {
  inputStatesDynamic: { [key: string | number]: string };
}

const initialState: InputStatesDynamicType = {
  inputStatesDynamic: {},
};

const inputDynamicSlice = createSlice({
  name: "inputDynamic",
  initialState,
  reducers: {
    setDynamicInput: (
      state,
      action: PayloadAction<{ key: string | number; value: string }>
    ) => {
      state.inputStatesDynamic[action.payload.key] = action.payload.value;
    },
    resetDynamicInput: (state) => {
      state.inputStatesDynamic = {};
    },
  },
});

export const { setDynamicInput, resetDynamicInput } = inputDynamicSlice.actions;

export default inputDynamicSlice.reducer;
