import { createSelector } from "reselect";
import { RootState } from "../../features/redux/store";

export const reduxCartItemsReducerStateKeyTransactions = "transactionsProduct";

export const selectCartItems = createSelector(
  (state: RootState) => state.cartItems,
  (cartItems) =>
    cartItems[reduxCartItemsReducerStateKeyTransactions]?.cartItem || []
);

export const selectCartItemsTotal = createSelector(
  (state: RootState) => state.cartItems,
  (cartItems) =>
    cartItems[reduxCartItemsReducerStateKeyTransactions]?.cartItemsTotal || {}
);
