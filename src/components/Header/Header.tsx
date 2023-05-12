import { useEffect, useState } from 'react';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';

import { useAuth } from '../../hooks/useAuth';
import { signOutUser } from '../../firebase/sign-out-user';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeUser } from '../../redux/slices/userSlice';

export const Header = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  const signOutHandler = async () => {
    await signOutUser();
    dispatch(removeUser());
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar color={isScrolled ? 'secondary' : 'primary'} sx={{ transition: 'all 0.6s' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">GraphQl Playground</Typography>
          {isAuth && (
            <Button color="inherit" onClick={signOutHandler}>
              Sign Out
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
