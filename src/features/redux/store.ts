import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stringDynamic from "./reducers/common-reducers/stringDynamicReduser";
import saveDynamicNumber from "./reducers/common-reducers/saveNumberDynamicReduser";
import toggleDynamic from "./reducers/common-reducers/toggleDynamicReduser";
import onClickDynamic from "./reducers/common-reducers/onClickDynamicReduser";
import selectorDataReduscer from "./reducers/common-reducers/selectorDataReduscer";
import roomTabsEdit from "./reducers/special-reducers/control-panel-reducers/roomTabsEditReducer";
import pcIconEdit from "./reducers/special-reducers/control-panel-reducers/pcIconEditReducer";
import cartItems from "./reducers/special-reducers/shop-reducers/cartItemsReducer";

const rootReducer = combineReducers({
  stringDynamic: stringDynamic,
  saveDynamicNumber: saveDynamicNumber,
  toggleDynamic: toggleDynamic,
  onClickDynamic: onClickDynamic,
  selectorDataReduscer: selectorDataReduscer,
  roomTabsEdit: roomTabsEdit,
  pcIconEdit: pcIconEdit,
  cartItems: cartItems,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
