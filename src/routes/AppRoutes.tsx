import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { CircularProgress } from '@mui/material';

import { Welcome } from '../pages/Welcome/Welcome';
import { NotFound } from '../pages/NotFound/NotFound';
import { useAuth } from '../hooks/useAuth';

const LazyMain = lazy(() => import('../pages/Main/Main'));
const LazyLogin = lazy(() => import('../pages/Login/Login'));
const LazyRegister = lazy(() => import('../pages/Register/Register'));

export const AppRoutes = () => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuth ? (
            <Suspense fallback={<CircularProgress />}>
              <LazyMain />
            </Suspense>
          ) : (
            <Navigate to="welcome" replace />
          )
        }
      />
      <Route path="/welcome" element={<Welcome />} />
      <Route
        path="/login"
        element={
          isAuth ? (
            <Navigate to="/" replace />
          ) : (
            <Suspense fallback={<CircularProgress />}>
              <LazyLogin />
            </Suspense>
          )
        }
      />
      <Route
        path="/register"
        element={
          isAuth ? (
            <Navigate to="/" replace />
          ) : (
            <Suspense fallback={<CircularProgress />}>
              <LazyRegister />
            </Suspense>
          )
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
