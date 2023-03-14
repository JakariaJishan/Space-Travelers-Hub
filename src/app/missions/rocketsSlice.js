import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = rocketsSlice.actions;

export default rocketsSlice.reducer;
