import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortingBy: 'id',
  reverse: false,
};

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSorting: (state, action) => {
      state.sortingBy = action.payload.sortingBy;
      state.reverse = action.payload.rev;
    },
  },
});

export const { setSorting } = sortingSlice.actions;

export default sortingSlice.reducer;
