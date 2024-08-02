import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Определяем тип состояния, который хранит числа или строки в виде динамических ключей
export interface DynamicNumberStatesType {
  dynamicNumberStates: { [key: string | number]: number | string };
}

// Начальное состояние с пустым объектом
const initialState: DynamicNumberStatesType = {
  dynamicNumberStates: {},
};

// Создаём slice для управления состоянием
const saveNumberDynamicSlice = createSlice({
  name: "saveDynamicNumber",
  initialState,
  reducers: {
    setSaveDynamicNumber: (
      state,
      action: PayloadAction<{
        key: string | number;
        value: number | string;
      }>
    ) => {
      // Сохраняем значение по указанному ключу
      state.dynamicNumberStates[action.payload.key] = action.payload.value;
    },
  },
});

// Экспортируем действия
export const { setSaveDynamicNumber } = saveNumberDynamicSlice.actions;

// Экспортируем редуктор по умолчанию
export default saveNumberDynamicSlice.reducer;
