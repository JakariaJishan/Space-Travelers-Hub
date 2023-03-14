import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.missions = action.payload;
    });
  },
});

export const { increment } = missionsSlice.actions;

export default missionsSlice.reducer;
