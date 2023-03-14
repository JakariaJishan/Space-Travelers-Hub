import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';
import rocketsSlice from './missions/rocketsSlice';

export default store = configureStore({
  reducer: missionsSlice, rocketsSlice,
});
