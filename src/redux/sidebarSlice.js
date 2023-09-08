import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: true,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;
