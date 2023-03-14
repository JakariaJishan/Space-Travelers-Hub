import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = missionsSlice.actions;

export default missionsSlice.reducer;
