import { useAppSelector } from './redux-hooks';

export const useAuth = () => {
  const { email, token, id } = useAppSelector((state) => state.user);

  return {
    isAuth: !!token,
    email,
    token,
    id,
  };
};
