import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PcIconDataType } from "../../../../../components/control-panel/control-panel-components/control-panel-pc-icons/ControlPanelPcIcons";

export interface PcIconEditInitialStateType {
  pcIcons: { [key: number | string]: PcIconDataType[] };
}

const pcIconEditInitialState: PcIconEditInitialStateType = {
  pcIcons: {},
};

const pcIconEditSlice = createSlice({
  name: "pcIconEdit",
  initialState: pcIconEditInitialState,
  reducers: {
    addNewPcIcons: (
      state,
      action: PayloadAction<{
        key: number | string;
        icons: PcIconDataType[];
      }>
    ) => {
      const { key, icons } = action.payload;
      state.pcIcons[key] = icons;
      console.log("Current pcIcons state:", state.pcIcons[key]);
      console.log(
        "Number of arrays in pcIcons:",
        Object.keys(state.pcIcons).length
      );
    },
  },
});

export const { addNewPcIcons } = pcIconEditSlice.actions;

export default pcIconEditSlice.reducer;
