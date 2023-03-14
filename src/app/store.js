import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';
import rocketsSlice from './missions/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionsSlice,
    rockets: rocketsSlice,
  },
});

export default store;
