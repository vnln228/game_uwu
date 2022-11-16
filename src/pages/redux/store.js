import { configureStore } from '@reduxjs/toolkit';
import playersSlice from './slises';

export default configureStore({
  reducer: {
    players: playersSlice,
  },
});
