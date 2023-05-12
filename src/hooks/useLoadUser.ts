import { useEffect, useState } from 'react';
import { useAppDispatch } from './redux-hooks';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { setUser } from '../redux/slices/userSlice';

export const useLoadUser = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ email: user.email, id: user.uid, token: user.refreshToken }));
      }
      setLoading(false);
    });
  }, [dispatch]);

  return loading;
};
