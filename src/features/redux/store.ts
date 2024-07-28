import { combineReducers, configureStore } from "@reduxjs/toolkit";
import inputReducer from "./reducers/common-reducers/single-component-reducers/inputReduser";
import saveDynamicNumber from "./reducers/common-reducers/dynamic-component-reducers/saveNumberDynamicReduser";
import toggleDynamic from "./reducers/common-reducers/dynamic-component-reducers/toggleDynamicReduser";
import onClickDynamic from "./reducers/common-reducers/dynamic-component-reducers/onClickDynamicReduser";

const rootReducer = combineReducers({
  input: inputReducer,
  saveDynamicNumber: saveDynamicNumber,
  toggleDynamic: toggleDynamic,
  onClickDynamic: onClickDynamic,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
