import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Определяем тип состояния для элементов с уникальными ID
export interface OnClickDynamicReduserStatesType {
  onClickStates: { [key: number | string]: boolean };
}

const initialState: OnClickDynamicReduserStatesType = {
  onClickStates: {},
};

export const onClickDynamic = createSlice({
  name: "onClickDynamic",
  initialState,
  reducers: {
    setOnClickDynamic: (
      state,
      action: PayloadAction<{ key: number | string; value: boolean }>
    ) => {
      const uniqueKey = action.payload.key;
      state.onClickStates[uniqueKey] = action.payload.value;
    },
    resetOnClickDynamic: (state) => {
      state.onClickStates = {};
    },
  },
});

export const { setOnClickDynamic, resetOnClickDynamic } =
  onClickDynamic.actions;

export default onClickDynamic.reducer;
