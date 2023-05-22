import { createSlice } from '@reduxjs/toolkit';

const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialState = {
  darkTheme: theme,
};

const themeSlice = createSlice({
  name: 'darkTheme',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.darkTheme = action.payload.darkTheme;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
