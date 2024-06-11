import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./reducers/common-reducers/toggleRedusers";

const rootReducer = combineReducers({
  toggle: toggleReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
