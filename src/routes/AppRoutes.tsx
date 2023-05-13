import { Route, Routes } from 'react-router';

import { Main } from '../pages/Main/Main';
import { Welcome } from '../pages/Welcome/Welcome';
import { NotFound } from '../pages/NotFound/NotFound';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/welcome" element={<Welcome />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
