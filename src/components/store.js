import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';
import rocketsSlice from './missions/rocketsSlice';

const store = configureStore({
  reducer: missionsSlice,
  rocketsSlice,
});

export default store;
