import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Button, ButtonGroup, Container, Toolbar, Typography } from '@mui/material';

import { useAuth } from '../../hooks/useAuth';
import { signOutUser } from '../../firebase/sign-out-user';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeUser } from '../../redux/slices/userSlice';

export const Header = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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
    <AppBar
      color={isScrolled ? 'secondary' : 'primary'}
      sx={{ transition: 'all 0.6s', position: 'sticky', top: '0' }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6">GraphQl Playground</Typography>
          <ButtonGroup variant="text">
            {isAuth ? (
              <>
                <Button color="inherit" onClick={() => navigate('/')}>
                  Go to the Main Page
                </Button>
                <Button color="inherit" onClick={signOutHandler}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => navigate('/login')}>
                  Login
                </Button>
                <Button color="inherit" onClick={() => navigate('/register')}>
                  Register
                </Button>
              </>
            )}
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
