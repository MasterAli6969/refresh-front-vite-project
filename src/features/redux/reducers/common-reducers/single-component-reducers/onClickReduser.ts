import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OnClickStatesType {
  [key: string]: boolean;
}

const initialState: OnClickStatesType = {
  addNewRoomsButtonModalWindow: false,
  roomTabsMenuDeleteModalWindow: false,
};

export const onClickSlice = createSlice({
  name: "onClick",
  initialState,
  reducers: {
    setClick: (
      state,
      action: PayloadAction<{ key: keyof OnClickStatesType; value: boolean }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setClick } = onClickSlice.actions;

export default onClickSlice.reducer;