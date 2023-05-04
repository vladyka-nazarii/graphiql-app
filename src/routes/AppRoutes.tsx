import { Route, Routes } from 'react-router';

import { Main } from '../pages/Main/Main';
import { NotFound } from '../pages/NotFound/NotFound';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
