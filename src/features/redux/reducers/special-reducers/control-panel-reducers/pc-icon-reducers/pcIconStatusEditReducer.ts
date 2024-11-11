import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PcStatusTypes {
  isWinActiveStatus?: boolean;
  isRepairModeStatus?: boolean;
  isOnStatus?: boolean;
}

export interface PcStatusActiveTypes {
  statusActive: boolean;
  activeTime: number;
}

export interface PcIconStatusEditInitialStateType {
  pcStatus: {
    [key: number]: PcStatusTypes;
  };
  pcStatusActive: {
    [key: number]: PcStatusActiveTypes;
  };
}

// Основной initialState
const pcIconStatusEditInitialState: PcIconStatusEditInitialStateType = {
  pcStatus: {},
  pcStatusActive: {},
};

const pcIconStatusEditSlice = createSlice({
  name: "pcIconStatusEdit",
  initialState: pcIconStatusEditInitialState,
  reducers: {
    setPcStatus: (
      state,
      action: PayloadAction<{
        key: number;
        field: keyof PcStatusTypes;
        status: boolean;
      }>
    ) => {
      const { key, field, status } = action.payload;

      if (!state.pcStatus[key]) {
        state.pcStatus[key] = {};
      }

      if (status) {
        for (const f in state.pcStatus[key]) {
          if (f !== field) {
            state.pcStatus[key][f as keyof PcStatusTypes] = false;
          }
        }
      }

      state.pcStatus[key][field] = status;
    },
    setPcStatusActive: (
      state,
      action: PayloadAction<{ key: number; statusData: PcStatusActiveTypes }>
    ) => {
      const { key, statusData } = action.payload;
      if (typeof key !== "number" || key < 0) {
        alert("Ошибка: Неверный ключ номера ПК. <<setPcStatusActive>>");
        return;
      }
      if (
        typeof statusData !== "object" ||
        typeof statusData.statusActive !== "boolean" ||
        typeof statusData.activeTime !== "number"
      ) {
        alert("Ошибка: Неверный формат данных.<<setPcStatusActive>>");
        return;
      }

      if (!state.pcStatusActive[key]) {
        state.pcStatusActive[key] = { statusActive: false, activeTime: 0 };
      }
      state.pcStatusActive[key] = {
        ...state.pcStatusActive[key],
        ...statusData,
      };
    },
  },
});

export const { setPcStatus, setPcStatusActive } = pcIconStatusEditSlice.actions;
export default pcIconStatusEditSlice.reducer;
