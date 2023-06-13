import { useEffect, useState } from 'react';
import {
  CircularProgress,
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material/';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AppRoutes } from './routes/AppRoutes';
import { useLoadUser } from './hooks/useLoadUser';

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const localDark = localStorage.getItem('darkTheme');
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const loading = useLoadUser();

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    transitions: {
      duration: {
        standard: 500,
      },
    },
  });

  useEffect(() => {
    if (localDark) {
      setDarkMode(!!JSON.parse(localDark));
    } else {
      setDarkMode(prefersDark);
    }
  }, [localDark, prefersDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setDarkMode={setDarkMode} />
      <main>{(loading && <CircularProgress />) || <AppRoutes />}</main>
      <Footer />
    </ThemeProvider>
  );
};
