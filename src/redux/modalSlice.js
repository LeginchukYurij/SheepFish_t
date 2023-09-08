import { createSlice } from '@reduxjs/toolkit';

export const modalStateSlice = createSlice({
  name: 'modal',
  initialState: {
    value: false,
    type: '',
  },
  reducers: {
    hide: (state) => {
      state.value = false;
      state.type = '';
    },
    show: (state, action) => {
      state.value = true;
      state.type = action.payload;
    },
  },
});

export const { hide, show } = modalStateSlice.actions;

export default modalStateSlice.reducer;
