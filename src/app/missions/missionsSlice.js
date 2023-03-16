import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
};

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const res = await axios.get(url);
    return res.data;
  },
);

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMissions: (state, action) => {
      const newState = JSON.parse(JSON.stringify(state)).missions.map(
        (mission) => {
          if (mission.mission_id !== action.payload) {
            return mission;
          }
          return { ...mission, reserved: true };
        },
      );
      return { ...JSON.parse(JSON.stringify(state)), missions: newState };
    },
    leaveMissions: (state, action) => {
      const newState = JSON.parse(JSON.stringify(state)).missions.map(
        (mission) => {
          if (mission.mission_id !== action.payload) {
            return mission;
          }
          return { ...mission, reserved: false };
        },
      );
      return { ...JSON.parse(JSON.stringify(state)), missions: newState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.fulfilled, (state, action) => ({
      ...state,
      missions: action.payload,
    }));
  },
});

export const { joinMissions, leaveMissions } = missionsSlice.actions;

export default missionsSlice.reducer;
