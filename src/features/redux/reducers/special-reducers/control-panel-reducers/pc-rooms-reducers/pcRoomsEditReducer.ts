import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PcRoomType {
  id: number;
  name: string;
  color: string;
}

export interface PcRoomsInitionalStateType {
  pcRooms: PcRoomType[];
}

const pcRoomsInitionalState: PcRoomsInitionalStateType = {
  pcRooms: [
    {
      id: 1,
      name: "Все компьютеры",
      color: "#D9D9D9",
    },
  ],
};

const pcRoomsEditSlice = createSlice({
  name: "pcRoomsEdit",
  initialState: pcRoomsInitionalState,
  reducers: {
    addNewRoom: (state, action: PayloadAction<PcRoomType>) => {
      state.pcRooms.push(action.payload);
    },
    removeRoom: (state, action: PayloadAction<number | string>) => {
      state.pcRooms = state.pcRooms.filter(
        (room) => room.id !== action.payload
      );
    },
    renameRoom: (
      state,
      action: PayloadAction<{
        id: number | string;
        newName: string;
        newColor: string;
      }>
    ) => {
      const { id, newName, newColor } = action.payload;
      const room = state.pcRooms.find((room) => room.id === id);
      if (room) {
        room.name = newName;
        room.color = newColor;
      }
    },
  },
});

export const { addNewRoom, removeRoom, renameRoom } = pcRoomsEditSlice.actions;

export default pcRoomsEditSlice.reducer;
