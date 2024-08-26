import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { SelectPropductType } from "../../../../../components/shop/shop.interface";

export interface CartItemType extends SelectPropductType {
  originPrice: number;
}

export interface CartItemsTotalType {
  totalPrice: number;
  totalProductsPrice: number;
  totalTarifesPrice: number;
  typeProductsCount: number;
  typeTarifesCount: number;
}

export interface СartItemsReducerInitionalStateType {
  cartItem: CartItemType[];
  cartItemsTotal: CartItemsTotalType;
}

const cartItemsReducerInitionalState: СartItemsReducerInitionalStateType = {
  cartItem: [],
  cartItemsTotal: {
    totalPrice: 0,
    totalProductsPrice: 0,
    totalTarifesPrice: 0,
    typeProductsCount: 0,
    typeTarifesCount: 0,
  },
};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: cartItemsReducerInitionalState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<SelectPropductType>) => {
      state.cartItem.push({
        ...action.payload,
        originPrice: action.payload.price,
      });
    },
    removeProduct: (state, action: PayloadAction<number | null>) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{
        id: number;
        newPrice: number;
        newPieceСount: number;
      }>
    ) => {
      state.cartItem = state.cartItem.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              price: action.payload.newPrice,
              pieceСount: action.payload.newPieceСount,
            }
          : item
      );
    },
    cartItemsTotal: (state, action: PayloadAction<CartItemsTotalType>) => {
      state.cartItemsTotal = action.payload;
    },
  },
});

export const {
  addNewProduct,
  removeProduct,
  updateProductQuantity,
  cartItemsTotal,
} = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
