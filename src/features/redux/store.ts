import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./reducers/common-reducers/toggleRedusers";
import inputReducer from "./reducers/common-reducers/inputReduser";
import onClick from "./reducers/common-reducers/onClickReduser";
import saveNumber from "./reducers/common-reducers/saveNumberReduser";

const rootReducer = combineReducers({
  toggle: toggleReducer,
  input: inputReducer,
  click: onClick,
  number: saveNumber,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
