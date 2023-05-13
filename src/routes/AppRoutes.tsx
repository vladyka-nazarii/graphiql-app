import { Navigate, Route, Routes } from 'react-router';

import { Main } from '../pages/Main/Main';
import { Welcome } from '../pages/Welcome/Welcome';
import { NotFound } from '../pages/NotFound/NotFound';
import { useAuth } from '../hooks/useAuth';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';

export const AppRoutes = () => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route path="/" element={isAuth ? <Main /> : <Navigate to="login" replace />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={isAuth ? <Navigate to="/" replace /> : <Login />} />
      <Route path="/register" element={isAuth ? <Navigate to="/" replace /> : <Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
