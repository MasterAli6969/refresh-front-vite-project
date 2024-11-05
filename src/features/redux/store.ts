import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stringDynamic from "./reducers/common-reducers/stringDynamicReduser";
import saveDynamicNumber from "./reducers/common-reducers/saveNumberDynamicReduser";
import toggleDynamic from "./reducers/common-reducers/toggleDynamicReduser";
import onClickDynamic from "./reducers/common-reducers/onClickDynamicReduser";
import selectorDataReduscer from "./reducers/common-reducers/selectorDataReduscer";
import pcRoomsEdit from "./reducers/special-reducers/control-panel-reducers/pc-rooms-reducers/pcRoomsEditReducer";
import pcIconEdit from "./reducers/special-reducers/control-panel-reducers/pc-icon-reducers/pcIconEditReducer";
import pcIconStatusEdit from "./reducers/special-reducers/control-panel-reducers/pc-icon-reducers/pcIconStatusEditReducer";
import cartItems from "./reducers/special-reducers/shop-reducers/cartItemsReducer";
import pcRoomsSaveColor from "./reducers/special-reducers/control-panel-reducers/pc-rooms-reducers/pcRoomsSaveColorReducer";

const rootReducer = combineReducers({
  //МНОГОЦЕЛЕВЫЕ РЕДУКТОРЫ С КЛЮЧАМИ
  stringDynamic: stringDynamic,
  saveDynamicNumber: saveDynamicNumber,
  toggleDynamic: toggleDynamic,
  onClickDynamic: onClickDynamic,
  selectorDataReduscer: selectorDataReduscer,
  //РЕДКУТОРЫ ДЛЯ РАБОТЫ С ИКОНКАМИИ ДЛЯ ПК
  pcIconEdit: pcIconEdit,
  //РЕДКУТОРЫ ДЛЯ РАБОТЫ С КОМНАТАМИ ДЛЯ ПК
  pcRoomsEdit: pcRoomsEdit,
  pcIconStatusEdit: pcIconStatusEdit,
  pcRoomsSaveColor: pcRoomsSaveColor,
  ////РЕДКУТОРЫ ДЛЯ РАБОТЫ ШОПОМ
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
