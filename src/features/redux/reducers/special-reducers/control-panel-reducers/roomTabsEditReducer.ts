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
      state.roomTabs.push(action.payload);
    },
    removeTab: (state, action: PayloadAction<number | string>) => {
      state.roomTabs = state.roomTabs.filter(
        (tab) => tab.id !== action.payload
      );
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
