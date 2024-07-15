import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToggleStateType {
  isModalOpen: boolean;
  isOpenShift: boolean;
  isSidebarVisible: boolean;
  isMessangerOpen: boolean;
}

const initialState: ToggleStateType = {
  isModalOpen: false,
  isOpenShift: false,
  isSidebarVisible: false,
  isMessangerOpen: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setToggle: (
      state,
      action: PayloadAction<{ key: keyof ToggleStateType; value: boolean }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const { setToggle } = toggleSlice.actions;

export default toggleSlice.reducer;
