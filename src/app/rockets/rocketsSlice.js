import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";

const initialState = {
  rockets: [],
};

const url = 'https://api.spacexdata.com/v4/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async () => {
    const res = await axios.get(url);
    return res.data;
});

export const rocketsSlice = createSlice({
  name: "rockets",
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const newState = JSON.parse(JSON.stringify(state)).rockets.map(
        (rocket) => {
          if (rocket.id !== action.payload) {
            return rocket;
          } else {
            return { ...rocket, reserved: true };
          }
        }
      );
      return { ...JSON.parse(JSON.stringify(state)), rockets: newState };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => ({
      ...state,
      rockets: action.payload
    }));
  },
});

export const { reserveRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
