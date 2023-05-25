import { ChangeEvent, Dispatch, SetStateAction, memo, useEffect, useState } from 'react';
import { AppBar, Button, Container, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useAuth } from '../../hooks/useAuth';
import { signOutUser } from '../../firebase/sign-out-user';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeUser } from '../../redux/slices/userSlice';
import { Languages } from '../Languages/Languages';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import { SpaceX } from '../UI/SpaceX/SpaceX';

interface IHeaderProps {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const Header = memo(({ setDarkMode }: IHeaderProps) => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();

  const signOutHandler = async () => {
    await signOutUser();
    dispatch(removeUser());
  };

  const changeTheme = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setDarkMode(checked);
    localStorage.setItem('darkTheme', JSON.stringify(checked));
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
      enableColorOnDark={isScrolled}
      sx={{ transition: 'all 0.6s', position: 'sticky', top: '0' }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
            <SpaceX dark={isScrolled && theme.palette.mode === 'dark'} />
            <Typography variant="h6">{t('GraphQL Playground')}</Typography>
          </Stack>
          <Stack direction="row">
            <ThemeSwitcher
              sx={{ m: 1 }}
              checked={theme.palette.mode === 'dark'}
              onChange={changeTheme}
              theme={theme}
            />
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
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
});
