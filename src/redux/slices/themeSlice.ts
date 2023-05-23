import { createSlice } from '@reduxjs/toolkit';

const darkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialState = {
  darkTheme: darkTheme,
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
