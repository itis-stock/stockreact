import { createSlice } from '@reduxjs/toolkit';

const metaSlice = createSlice({
  name: 'meta',
  initialState: null,
  reducers: {
    setMeta: (_, action) => {
      return action.payload;
    },
  },
});

export const { setMeta } = metaSlice.actions;
export default metaSlice.reducer;
