import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  buyNowItem: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
    buyNow: (state, action) => {
      // Just assign the selected item to `buyNowItem`
      state.buyNowItem = { ...action.payload, quantity: 1 };
    },
    clearBuyNow: (state) => {
      state.buyNowItem = null;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, buyNow, clearBuyNow } = cartSlice.actions;
export default cartSlice.reducer;
