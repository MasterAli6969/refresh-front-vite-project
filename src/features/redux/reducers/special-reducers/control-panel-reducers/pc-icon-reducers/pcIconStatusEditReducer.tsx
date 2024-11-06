import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface pcStatusTypes {
  isWinActiveStatus?: boolean;
  isRepairModeStatus?: boolean;
  isOnStatus?: boolean;
}

export interface pcStatusActiveTypes {
  statusActive: boolean;
  activeTime: number;
}

export interface PcIconStatusEditInitialStateType {
  pcStatus: {
    [key: number]: pcStatusTypes;
  };
  statusMessage: string; // Новый статус в виде текста
}

// Основной initialState
const pcIconStatusEditInitialState: PcIconStatusEditInitialStateType = {
  pcStatus: {},
  statusMessage: "", // Инициализируем пустой строкой
};

const pcIconStatusEditSlice = createSlice({
  name: "pcIconStatusEdit",
  initialState: pcIconStatusEditInitialState,
  reducers: {
    setPcStatus: (
      state,
      action: PayloadAction<{
        key: number;
        field: keyof pcStatusTypes;
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
            state.pcStatus[key][f as keyof pcStatusTypes] = false;
          }
        }
      }

      state.pcStatus[key][field] = status;
    },

    // Новый экшен для установки текста
    setStatusMessage: (state, action: PayloadAction<string>) => {
      state.statusMessage = action.payload;
    },
  },
});

// Экспортируем экшены и редюсер
export const { setPcStatus, setStatusMessage } = pcIconStatusEditSlice.actions;
export default pcIconStatusEditSlice.reducer;
