import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InputStatesType {
  addNewRoomsButtonModalWindow: string;
}

const initialState: InputStatesType = {
  addNewRoomsButtonModalWindow: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInput: (
      state,
      action: PayloadAction<{ key: keyof InputStatesType; value: string }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setInput } = inputSlice.actions;

export default inputSlice.reducer;
