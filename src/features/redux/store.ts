import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./reducers/common-reducers/toggleRedusers";
import inputReducer from "./reducers/common-reducers/inputReduser";
import onClick from "./reducers/common-reducers/onClickReduser";

const rootReducer = combineReducers({
  toggle: toggleReducer,
  input: inputReducer,
  click: onClick,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
