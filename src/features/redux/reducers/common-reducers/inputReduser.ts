import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InputStatesType {
  [key: string]: string;
}

const initialState: InputStatesType = {
  addNewRoomsButtonModalWindow: "",
};

const inputSlice = createSlice({
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
