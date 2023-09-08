import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '@redux/productsSlice';
import categoriesReducer from '@redux/categoriesSlice';
import sortingReducer from '@redux/sortingSlice';
import themeReducer from '@redux/themeSlice';
import searchReducer from '@redux/searchSlice';
import modalReducer from '@redux/modalSlice';
import sidebarReducer from '@redux/sidebarSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    sorting: sortingReducer,
    theme: themeReducer,
    search: searchReducer,
    modal: modalReducer,
    sidebar: sidebarReducer,
  },
});
