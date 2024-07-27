import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./reducers/common-reducers/single-component-reducers/toggleRedusers";
import inputReducer from "./reducers/common-reducers/single-component-reducers/inputReduser";
import onClick from "./reducers/common-reducers/single-component-reducers/onClickReduser";
import saveDynamicNumber from "./reducers/common-reducers/dynamic-component-reducers/saveNumberDynamicReduser";
import toggleDynamic from "./reducers/common-reducers/dynamic-component-reducers/toggleDynamicReduser";

const rootReducer = combineReducers({
  toggle: toggleReducer,
  input: inputReducer,
  click: onClick,
  saveDynamicNumber: saveDynamicNumber,
  toggleDynamic: toggleDynamic,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
