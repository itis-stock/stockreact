import { createSlice } from '@reduxjs/toolkit';

const metaSlice = createSlice({
  name: 'meta',
  initialState: {
    meta: null,
  },
  reducers: {
    setMeta: (state, action) => {
      state.meta = action.payload;
    },
  },
});

export const { setMeta } = metaSlice.actions;
export default metaSlice.reducer;
