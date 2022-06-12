import { createSlice } from "@reduxjs/toolkit";
const { cartData } = require("../../../fakeData/data.js");

const initialState = {
  cart: [],
  isLoading: false,
  error: false,
  title: null,
  text: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = true;
    },
    addToCart(state, action) {
      const { id } = action.payload;
      state.cart.push({ ...action.payload, quantity: 1 });
    },

    removeFromCart(state, action) {
      const { id } = action.payload;
      const productIndex = state.cart.findIndex((p) => p.id === id);
      if (productIndex !== -1) {
        state.cart = state.cart.filter((c) => c.id !== id);
      }
    },

    increaseQty(state, action) {
      const { id } = action.payload;
      const productIndex = state.cart.findIndex((p) => p.id === id);
      if (productIndex !== -1) {
        state.cart[productIndex].quantity += 1;
      }
    },

    decreaseQty(state, action) {
      const { id } = action.payload;
      const productIndex = state.cart.findIndex((p) => p.id === id);
      if (productIndex !== -1) {
        state.cart[productIndex].quantity -= 1;
      }
    },
  },
});

export const { hasError, addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;
export default cartSlice.reducer;
