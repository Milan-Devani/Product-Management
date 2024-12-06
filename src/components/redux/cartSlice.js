import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalAmount: 0 },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload; 
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        if (existingItem.quantity < product.stock) {
          existingItem.quantity += 1;
          state.totalAmount += product.price;
        }
      } else {
        state.items.push({ ...product, quantity: 1 });
        state.totalAmount += product.price;
      }
    },
    
    incrementQuantity: (state, action) => {
      const { id, stock } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && existingItem.quantity < stock) {
        existingItem.quantity += 1;
        state.totalAmount += existingItem.price;
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalAmount -= existingItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.totalAmount -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
