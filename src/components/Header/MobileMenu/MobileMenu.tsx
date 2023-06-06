import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Stack, useTheme } from '@mui/material';

import { ThemeControls } from '../ThemeControls/ThemeControls';
import { Languages } from '../../Languages/Languages';
import { Navigation } from '../Navigation/Navigation';
import { CloseButton } from '../../UI/CloseButton/CloseButton';

interface IBurgerMenuProps {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  setShowBurgerMenu: Dispatch<SetStateAction<boolean>>;
  showBurgerMenu: boolean;
}

export const MobileMenu: FC<IBurgerMenuProps> = ({
  setDarkMode,
  setShowBurgerMenu,
  showBurgerMenu,
}) => {
  const handleClose = () => {
    setShowBurgerMenu(false);
  };
  const location = useLocation();
  const theme = useTheme();

  useEffect(() => setShowBurgerMenu(false), [location, setShowBurgerMenu]);

  return (
    <>
      <Stack
        direction={'column'}
        sx={{
          position: 'fixed',
          alignItems: 'center',
          paddingTop: '30%',
          backgroundColor: theme.palette.primary.main,
          top: '0',
          right: showBurgerMenu ? '0' : '-100%',
          transition: `${theme.transitions.duration.standard}ms`,
          zIndex: '10000',
        }}
        width={'320px'}
        height={'100%'}
      >
        <CloseButton handleClose={handleClose} />
        <Navigation />
        <Stack direction={'row'}>
          <Languages />
          <ThemeControls setDarkMode={setDarkMode} />
        </Stack>
      </Stack>
      {showBurgerMenu && (
        <Box sx={{ position: 'fixed', width: '100%', height: '100%' }} onClick={handleClose} />
      )}
    </>
  );
};
