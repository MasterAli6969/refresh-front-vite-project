import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RoomTabObjectTypes {
  id: number | string;
  name: string;
}

export interface RoomTabsEditInitionalStateType {
  roomTabs: RoomTabObjectTypes[];
}

const roomTabsEditInitionalState: RoomTabsEditInitionalStateType = {
  roomTabs: [
    {
      id: 1,
      name: "Все",
    },
  ],
};

const roomTabsEditSlice = createSlice({
  name: "roomTabsEdit",
  initialState: roomTabsEditInitionalState,
  reducers: {
    addNewTab: (state, action: PayloadAction<RoomTabObjectTypes>) => {
      console.log("Adding new tab:", action.payload); // Логирование действия
      state.roomTabs.push(action.payload);
      console.log("Updated roomTabs:", state.roomTabs); // Логирование обновленного состояния
    },
    removeTab: (state, action: PayloadAction<number | string>) => {
      console.log("Removing tab with id:", action.payload); // Логирование действия
      state.roomTabs = state.roomTabs.filter(
        (tab) => tab.id !== action.payload
      );
      console.log("Updated roomTabs:", state.roomTabs); // Логирование обновленного состояния
    },
    nameTab: (
      state,
      action: PayloadAction<{ id: number | string; newName: string }>
    ) => {
      const { id, newName } = action.payload;
      const tab = state.roomTabs.find((tab) => tab.id === id);
      if (tab) {
        tab.name = newName;
      }
    },
  },
});

export const { addNewTab, removeTab, nameTab } = roomTabsEditSlice.actions;

export default roomTabsEditSlice.reducer;
