import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data.products;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    filteredProducts: [],
    loading: false,
  },
  reducers: {
    filterByName: (state, action) => {
      state.filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    sortByPrice: (state, action) => {
      if (action.payload === "asc") {
        state.filteredProducts.sort((a, b) => a.price - b.price);
      } else {
        state.filteredProducts.sort((a, b) => b.price - a.price);
      }
    },
    filterByCategory: (state, action) => {
      state.filteredProducts = state.products.filter(
        (product) => product.category === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.filteredProducts = action.payload;
    });
  },
});

export const { filterByName, sortByPrice, filterByCategory } = productSlice.actions;
export default productSlice.reducer;
