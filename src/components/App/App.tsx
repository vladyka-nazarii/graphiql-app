import { Route, Routes } from 'react-router';

import Main from '../../pages/Main/Main';
import Header from '../Header/Header';
import NotFound from '../../pages/NotFound/NotFound';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
