import { configureStore } from '@reduxjs/toolkit';
import missionsSlice from './missions/missionsSlice';

export default store = configureStore({
  reducer: missionsSlice,
});
