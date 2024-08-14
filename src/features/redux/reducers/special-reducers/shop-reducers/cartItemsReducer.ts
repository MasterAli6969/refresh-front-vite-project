import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { selectPropductType } from "../../../../../components/shop/shop.interface";

export interface СartItemsReducerInitionalStateType {
  cartItem: selectPropductType[];
}

const cartItemsReducerInitionalState: СartItemsReducerInitionalStateType = {
  cartItem: [],
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: cartItemsReducerInitionalState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<selectPropductType>) => {
      const productExists = state.cartItem.some(
        (item) => item.id === action.payload.id
      );
      if (!productExists) {
        state.cartItem.push(action.payload);
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      if (state.cartItem != null) {
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload
        );
      }
    },
  },
});

export const { addNewProduct, removeProduct } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
