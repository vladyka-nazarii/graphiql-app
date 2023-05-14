import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AppRoutes } from './routes/AppRoutes';
import { useLoadUser } from './hooks/useLoadUser';
import { CircularProgress } from '@mui/material';

export const App = () => {
  const loading = useLoadUser();
  return (
    <>
      <Header />
      <main>{(loading && <CircularProgress />) || <AppRoutes />}</main>
      <Footer />
    </>
  );
};
