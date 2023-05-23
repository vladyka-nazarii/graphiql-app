import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useAuth } from '../../hooks/useAuth';
import { signOutUser } from '../../firebase/sign-out-user';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { removeUser } from '../../redux/slices/userSlice';
import { Languages } from '../Languages/Languages';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { setTheme } from '../../redux/slices/themeSlice';

export const Header = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const { darkTheme } = useAppSelector((state) => state.theme);

  const theme = createTheme({
    palette: {
      mode: darkTheme ? 'dark' : 'light',
    },
  });

  const signOutHandler = async () => {
    await signOutUser();
    dispatch(removeUser());
  };

  const changeTheme = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    dispatch(setTheme({ darkTheme: checked }));
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
          <Typography variant="h6">{t('GraphQL Playground') + darkTheme}</Typography>
          <ButtonGroup variant="text">
            <ThemeSwitcher sx={{ m: 1 }} onChange={changeTheme} theme={theme} />
            <Languages />
            <Button color="inherit" onClick={() => navigate('/welcome')}>
              {t('About')}
            </Button>
            {isAuth ? (
              <>
                <Button color="inherit" onClick={() => navigate('/')}>
                  {t('Main Page')}
                </Button>
                <Button color="inherit" onClick={signOutHandler}>
                  {t('Sign Out')}
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => navigate('/login')}>
                  {t('Login')}
                </Button>
                <Button color="inherit" onClick={() => navigate('/register')}>
                  {t('Register')}
                </Button>
              </>
            )}
          </ButtonGroup>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
