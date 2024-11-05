import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface pcStatusTypes {
  isWinActiveStatus?: boolean;
  isRepairModeStatus?: boolean;
  isOnStatus?: boolean;
}

export interface PcIconStatusEditInitialStateType {
  pcStatus: {
    [key: number]: pcStatusTypes;
  };
}

const pcIconStatusEditInitialState: PcIconStatusEditInitialStateType = {
  pcStatus: {},
};

const pcIconStatusEditSlice = createSlice({
  name: "pcIconStatusEdit",
  initialState: pcIconStatusEditInitialState,
  reducers: {
    setPcStatus: (
      state,
      action: PayloadAction<{
        key: number;
        field: keyof pcStatusTypes; // Используем keyof для ограничения полей
        status: boolean;
      }>
    ) => {
      const { key, field, status } = action.payload;

      if (!state.pcStatus[key]) {
        state.pcStatus[key] = {};
      }

      // Если устанавливаемое значение true, сбрасываем остальные статусы
      if (status) {
        for (const f in state.pcStatus[key]) {
          // Проверяем, что f является ключом pcStatusTypes
          if (f !== field) {
            state.pcStatus[key][f as keyof pcStatusTypes] = false; // Приводим f к типу ключа
          }
        }
      }

      state.pcStatus[key][field] = status;
    },
  },
});

// Экспортируем экшены и редюсер
export const { setPcStatus } = pcIconStatusEditSlice.actions;
export default pcIconStatusEditSlice.reducer;
