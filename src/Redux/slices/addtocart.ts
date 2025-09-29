import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartType = {
  id: number;
  title: string;
  serviceType?: string | null;
  quantity: number;
  price?: number;
};

interface CartState {
  cart: CartType[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartType>) => {
      const existingItem = state.cart.find(
        (item) => item.title === action.payload.title,
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cart.push({ ...action.payload });
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const existingItem = state.cart.find(
        (item) => item.title === action.payload,
      );

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cart = state.cart.filter(
            (item) => item.title !== action.payload,
          );
        }
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const selectCart = (state: { cart: CartState }) => state.cart.cart;

export const selectCartCount = (state: { cart: CartState }) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
