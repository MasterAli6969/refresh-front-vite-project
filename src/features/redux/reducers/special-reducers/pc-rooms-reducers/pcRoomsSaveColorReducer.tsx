// Пример простого редуктора для работы с цветом
import { createSlice } from "@reduxjs/toolkit";

interface pcRoomsSaveColorState {
  currentColor: string;
}

const initialState: pcRoomsSaveColorState = {
  currentColor: "#fff",
};

const pcRoomsSaveColorSlice = createSlice({
  name: "pcRoomsSaveColor",
  initialState,
  reducers: {
    pcRoomsSaveColor(state, action) {
      state.currentColor = action.payload;
    },
  },
});

export const { pcRoomsSaveColor } = pcRoomsSaveColorSlice.actions;
export default pcRoomsSaveColorSlice.reducer;
