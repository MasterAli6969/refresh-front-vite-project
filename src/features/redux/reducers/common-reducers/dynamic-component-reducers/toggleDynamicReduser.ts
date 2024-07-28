import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Определяем тип состояния для элементов с уникальными ID
export interface ToggleDynamicReduserStatesType {
  modalStates: { [id: number | string]: boolean };
  onClickStates: { [id: number | string]: boolean };
}

const initialState: ToggleDynamicReduserStatesType = {
  modalStates: {},
  onClickStates: {},
};

export const toggleDynamicSlice = createSlice({
  name: "toggleDynamic",
  initialState,
  reducers: {
    setToggleDynamic: (
      state,
      action: PayloadAction<{ id: number | string; value: boolean }>
    ) => {
      const uniqueId = action.payload.id;
      state.modalStates[uniqueId] = action.payload.value;
    },
    resetModals: (state) => {
      state.modalStates = {};
    },
  },
});

export const { setToggleDynamic, resetModals } = toggleDynamicSlice.actions;

export default toggleDynamicSlice.reducer;
