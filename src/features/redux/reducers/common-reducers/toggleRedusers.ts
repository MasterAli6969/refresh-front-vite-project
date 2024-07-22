import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToggleStateType {
  roomTabsMenuRenameModalWindow: boolean;
  roomTabsMenuDeleteModalWindow: boolean;
  addNewRoomsButtonModalWindow: boolean;
  layoutEdingButtonModalWindow: boolean;
  userPanelOpenShiftModalWindow: boolean;
  replenishmentBalanceModalWindow: boolean;
  userPenaltyModalWindow: boolean;
  changeLocationModalWindow: boolean;
  editPcModalWindow: boolean;
  exitSessionModalWindow: boolean;
  administratorModeModalWindow: boolean;
  maintenanceModeModalWindow: boolean;
  taskManagerModalWindow: boolean;
  screenshotSavedModalWindows: boolean;
  addUserModalWindow: boolean;
  isShiftStatus: boolean;
  isSidebarVisible: boolean;
  isMessangerOpen: boolean;
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
