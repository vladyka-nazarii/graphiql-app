import { Dispatch, SetStateAction, memo, useEffect, useState } from 'react';
import { AppBar, Container, Toolbar, useMediaQuery } from '@mui/material';

import { DesktopMenu } from './DesktopMenu/DesktopMenu';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { Logo } from './Logo/Logo';
import { BurgerMenuButton } from '../UI/BurgerMenuButton/BurgerMenuButton';

interface IHeaderProps {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const Header = memo(({ setDarkMode }: IHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 767px)');

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

  useEffect(() => {
    if (!isSmallScreen) {
      setShowBurgerMenu(false);
    }
  }, [isSmallScreen]);

  const handleBurgerButton = () => {
    setShowBurgerMenu((prev) => !prev);
  };

  return (
    <AppBar
      color={isScrolled ? 'secondary' : 'primary'}
      enableColorOnDark={isScrolled}
      sx={{ transition: 'all 0.5s', position: 'sticky', top: '0' }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Logo isScrolled={isScrolled} />
          {isSmallScreen ? (
            <>
              <BurgerMenuButton handleBurgerButton={handleBurgerButton} />
              <MobileMenu
                setDarkMode={setDarkMode}
                showBurgerMenu={showBurgerMenu}
                setShowBurgerMenu={setShowBurgerMenu}
              />
            </>
          ) : (
            <DesktopMenu setDarkMode={setDarkMode} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
});
