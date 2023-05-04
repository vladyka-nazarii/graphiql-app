import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AppRoutes } from './routes/AppRoutes';

export const App = () => (
  <>
    <Header />
    <AppRoutes />
    <Footer />
  </>
);
