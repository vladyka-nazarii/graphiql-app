import { Button } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import styles from './Header.module.css';
import { signOutUser } from '../../firebase/sign-out-user';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeUser } from '../../redux/slices/userSlice';

export const Header = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  const signOutHandler = async () => {
    await signOutUser();
    dispatch(removeUser());
  };

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Header</h2>
      {isAuth && (
        <Button color="primary" variant="contained" onClick={signOutHandler}>
          Sign Out
        </Button>
      )}
    </header>
  );
};
