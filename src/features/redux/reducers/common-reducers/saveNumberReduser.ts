import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NumberStatesType {
  [key: string]: number | null;
}

const initialState: NumberStatesType = {
  roomTabsMenuDeleteModalWindow: null,
};

const saveNumberSlice = createSlice({
  name: "saveNumber",
  initialState,
  reducers: {
    setSaveNumber: (
      state,
      action: PayloadAction<{
        key: string;
        value: number | null;
      }>
    ) => {
      console.log(
        `Updating state: ${action.payload.key} with value: ${action.payload.value}`
      );
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setSaveNumber } = saveNumberSlice.actions;

export default saveNumberSlice.reducer;
