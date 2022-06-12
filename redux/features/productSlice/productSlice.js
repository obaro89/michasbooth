import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  async () => {}
);

const { productsData } = require("../../../fakeData/data");

const initialState = {
  isLoading: false,
  error: false,
  title: null,
  text: null,
  products: productsData,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = true;
      state.title = action.title;
      state.text = action.text;
    },
  },
});

export const { hasError } = productSlice.actions;
export default productSlice.reducer;
