import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { Drawer, Stack } from '@mui/material';

import { ThemeControls } from '../ThemeControls/ThemeControls';
import { Languages } from '../../Languages/Languages';
import { Navigation } from '../Navigation/Navigation';
import { CloseButton } from '../../UI/CloseButton/CloseButton';
import { useLocation } from 'react-router';

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
  const location = useLocation();
  useEffect(() => setShowBurgerMenu(false), [location, setShowBurgerMenu]);

  const handleClose = () => {
    setShowBurgerMenu(false);
  };

  return (
    <Drawer anchor="right" open={showBurgerMenu} onClose={() => handleClose()}>
      <Stack width={'320px'} alignItems={'center'} paddingTop={'50px'}>
        <CloseButton handleClose={handleClose} />
        <Navigation />
        <Stack direction={'row'}>
          <Languages />
          <ThemeControls setDarkMode={setDarkMode} />
        </Stack>
      </Stack>
    </Drawer>
  );
};
