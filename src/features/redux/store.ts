import { combineReducers, configureStore } from "@reduxjs/toolkit";
import inputDynamic from "./reducers/common-reducers/inputDynamicReduser";
import saveDynamicNumber from "./reducers/common-reducers/saveNumberDynamicReduser";
import toggleDynamic from "./reducers/common-reducers/toggleDynamicReduser";
import onClickDynamic from "./reducers/common-reducers/onClickDynamicReduser";
import selectorDataReduscer from "./reducers/common-reducers/selectorDataReduscer";

const rootReducer = combineReducers({
  inputDynamic: inputDynamic,
  saveDynamicNumber: saveDynamicNumber,
  toggleDynamic: toggleDynamic,
  onClickDynamic: onClickDynamic,
  selectorDataReduscer: selectorDataReduscer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
