import { createSelector } from "reselect";
import { RootState } from "../../features/redux/store";

export const reduxCartItemsReducerStateKey = "shopProduct";

export const selectCartItems = createSelector(
  (state: RootState) => state.cartItems,
  (cartItems) => cartItems[reduxCartItemsReducerStateKey]?.cartItem || []
);

export const selectCartItemsTotal = createSelector(
  (state: RootState) => state.cartItems,
  (cartItems) => cartItems[reduxCartItemsReducerStateKey]?.cartItemsTotal || {}
);
