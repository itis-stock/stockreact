import { configureStore } from '@reduxjs/toolkit';
import metaReducer from './metaSlice';

const store = configureStore({
  reducer: metaReducer,
});

export default store;
