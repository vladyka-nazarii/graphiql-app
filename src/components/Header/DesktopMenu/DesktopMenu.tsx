import { Dispatch, FC, SetStateAction } from 'react';
import { Stack } from '@mui/material';

import { Navigation } from '../Navigation/Navigation';
import { ThemeControls } from '../ThemeControls/ThemeControls';
import { Languages } from '../../Languages/Languages';

interface IProps {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const DesktopMenu: FC<IProps> = ({ setDarkMode }) => {
  return (
    <Stack direction={'row'}>
      <ThemeControls setDarkMode={setDarkMode} />
      <Languages />
      <Navigation />
    </Stack>
  );
};
