import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomSelectDataType } from "../../../../common/static-components/custom-select/CustomSelect";

export interface SelectorDataStatesType {
  selectData: {
    [key: string | number]: CustomSelectDataType[];
  };
}

const initialState: SelectorDataStatesType = {
  selectData: {},
};

const selectorDataSlice = createSlice({
  name: "selectorDataReduscer",
  initialState,
  reducers: {
    setSelectorData: (
      state,
      action: PayloadAction<{
        key: string | number;
        value: CustomSelectDataType;
      }>
    ) => {
      const { key, value } = action.payload;
      if (!state.selectData[key]) {
        state.selectData[key] = [];
      }
      state.selectData[key].push(value);
    },
  },
});

export const { setSelectorData } = selectorDataSlice.actions;

export default selectorDataSlice.reducer;
