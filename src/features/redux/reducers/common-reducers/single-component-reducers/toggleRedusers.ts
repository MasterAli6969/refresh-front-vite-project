import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToggleStateType {
  [key: string]: boolean;
}

const initialState: ToggleStateType = {
  roomTabsMenuRenameModalWindow: false,
  roomTabsMenuDeleteModalWindow: false,
  addNewRoomsButtonModalWindow: false,
  layoutEdingButtonModalWindow: false,
  userPanelOpenShiftModalWindow: false,
  replenishmentBalanceModalWindow: false,
  userPenaltyModalWindow: false,
  changeLocationModalWindow: false,
  editPcModalWindow: false,
  exitSessionModalWindow: false,
  administratorModeModalWindow: false,
  maintenanceModeModalWindow: false,
  taskManagerModalWindow: false,
  screenshotSavedModalWindows: false,
  addUserModalWindow: false,
  isShiftStatus: false,
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
