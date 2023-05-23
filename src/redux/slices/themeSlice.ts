import { createSlice } from '@reduxjs/toolkit';

const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const localDark = localStorage.getItem('darkTheme');

const initialState = {
  darkTheme: localDark === 'true' ? !!localDark : systemDark,
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
