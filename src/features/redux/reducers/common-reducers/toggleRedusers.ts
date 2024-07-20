import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToggleStateType {
  isRoomTabsMenuRenameModalOpen: boolean;
  isRoomTabsMenuDeleteModalOpen: boolean;
  isAddNewRoomsButtonModalOpen: boolean;
  isLayoutEdingButtonModalOpen: boolean;
  isUserPanelOpenShiftModalOpen: boolean;
  isReplenishmentBalanceModalWindowsOpen: boolean;
  isUserPenaltyModalWindowOpen: boolean;
  isChangeLocationModalWindowOpen: boolean;
  isEditPcModalWindowOpen: boolean;
  isExitSessionWindowOpen: boolean;
  isAdministratorModeWindowOpen: boolean;
  isMaintenanceMode: boolean;
  isTaskManager: boolean;
  isScreenshotSavedModalWindowsOpen: boolean;
  isAddUserModalWindowOpen: boolean;
  isShiftStatus: boolean;
  isSidebarVisible: boolean;
  isMessangerOpen: boolean;
}

const initialState: ToggleStateType = {
  isRoomTabsMenuRenameModalOpen: false,
  isRoomTabsMenuDeleteModalOpen: false,
  isAddNewRoomsButtonModalOpen: false,
  isLayoutEdingButtonModalOpen: false,
  isUserPanelOpenShiftModalOpen: false,
  isReplenishmentBalanceModalWindowsOpen: false,
  isUserPenaltyModalWindowOpen: false,
  isChangeLocationModalWindowOpen: false,
  isEditPcModalWindowOpen: false,
  isExitSessionWindowOpen: false,
  isAdministratorModeWindowOpen: false,
  isMaintenanceMode: false,
  isTaskManager: false,
  isScreenshotSavedModalWindowsOpen: false,
  isAddUserModalWindowOpen: false,
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
