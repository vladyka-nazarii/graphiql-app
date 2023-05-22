import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AppRoutes } from './routes/AppRoutes';
import { useLoadUser } from './hooks/useLoadUser';
import { CircularProgress, ThemeProvider, createTheme } from '@mui/material';

import { useAppSelector } from './hooks/redux-hooks';

export const App = () => {
  const loading = useLoadUser();
  const { darkTheme } = useAppSelector((state) => state.theme);

  const theme = createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>{(loading && <CircularProgress />) || <AppRoutes />}</main>
      <Footer />
    </ThemeProvider>
  );
};
