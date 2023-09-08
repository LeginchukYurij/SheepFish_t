import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  q: '',
};

export const searchSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.q = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
