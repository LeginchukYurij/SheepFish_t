import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const initialState = {
  products: [],
  limit: 100,
  skip: 0,
  currentPage: 1,
  total: 0,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload?.products;
      state.total = action.payload?.total;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      state.skip =
        action.payload > 1 ? action.payload * state.limit - state.limit : 0;
    },
    addProduct: (state, action) => {
      state.products = [action.payload, ...state.products];
    },
    deleteProduct: (state, action) => {
      state.products = [...state.products].filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { setProducts, setCurrentPage, addProduct, deleteProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
