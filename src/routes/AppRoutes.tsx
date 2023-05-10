import { Navigate, Route, Routes } from 'react-router';
import { useEffect } from 'react';

import { Main } from '../pages/Main/Main';
import { NotFound } from '../pages/NotFound/NotFound';
import { useAuth } from '../hooks/useAuth';
import { useAppDispatch } from '../hooks/redux-hooks';
import { auth } from '../firebase/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from '../redux/slices/userSlice';
import { Login } from '../pages/Login/Login';
import { Register } from '../pages/Register/Register';

export const AppRoutes = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ email: user.email, id: user.uid, token: user.refreshToken }));
      }
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={isAuth ? <Main /> : <Navigate to="login" replace />} />
      <Route path="/login" element={isAuth ? <Navigate to="/" replace /> : <Login />} />
      <Route path="/register" element={isAuth ? <Navigate to="/" replace /> : <Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
