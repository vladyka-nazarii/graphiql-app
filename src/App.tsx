import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AppRoutes } from './routes/AppRoutes';

export const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
};
