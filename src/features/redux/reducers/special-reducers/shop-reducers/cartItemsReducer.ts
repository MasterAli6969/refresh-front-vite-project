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

export interface CartStateType {
  [key: string]: {
    cartItem: CartItemType[];
    cartItemsTotal: CartItemsTotalType;
  };
}

const initialCartState: CartStateType = {};

const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState: initialCartState,
  reducers: {
    addNewProduct: (
      state,
      action: PayloadAction<{ key: string; product: SelectPropductType }>
    ) => {
      const { key, product } = action.payload;
      if (!state[key]) {
        state[key] = {
          cartItem: [],
          cartItemsTotal: {
            totalPrice: 0,
            totalProductsPrice: 0,
            totalTarifesPrice: 0,
            typeProductsCount: 0,
            typeTarifesCount: 0,
          },
        };
      }
      state[key].cartItem = [
        ...state[key].cartItem,
        { ...product, originPrice: product.price },
      ];
    },
    removeProduct: (
      state,
      action: PayloadAction<{ key: string; productId: number | null }>
    ) => {
      const { key, productId } = action.payload;
      if (state[key]) {
        state[key].cartItem = state[key].cartItem.filter(
          (item) => item.id !== productId
        );
      }
    },
    clearCart: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      if (state[key]) {
        state[key].cartItem = [];
        state[key].cartItemsTotal = {
          totalPrice: 0,
          totalProductsPrice: 0,
          totalTarifesPrice: 0,
          typeProductsCount: 0,
          typeTarifesCount: 0,
        };
      }
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{
        key: string;
        id: number;
        newPrice: number;
        newPieceCount: number;
      }>
    ) => {
      const { key, id, newPrice, newPieceCount } = action.payload;
      if (state[key]) {
        state[key].cartItem = state[key].cartItem.map((item) =>
          item.id === id
            ? {
                ...item,
                price: newPrice,
                pieceCount: newPieceCount,
              }
            : item
        );
      }
    },
    updateCartItemsTotal: (
      state,
      action: PayloadAction<{ key: string; totals: CartItemsTotalType }>
    ) => {
      const { key, totals } = action.payload;
      if (state[key]) {
        state[key].cartItemsTotal = totals;
      }
    },
  },
});

export const {
  addNewProduct,
  removeProduct,
  clearCart,
  updateProductQuantity,
  updateCartItemsTotal,
} = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
