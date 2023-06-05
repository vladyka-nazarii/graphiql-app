import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { useTheme } from '@mui/material';

import { ThemeSwitcher } from '../../ThemeSwitcher/ThemeSwitcher';

interface IThemeControlsProps {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const ThemeControls: FC<IThemeControlsProps> = ({ setDarkMode }) => {
  const theme = useTheme();
  const changeTheme = (_: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setDarkMode(checked);
    localStorage.setItem('darkTheme', JSON.stringify(checked));
  };

  return (
    <ThemeSwitcher
      sx={{ m: 1 }}
      checked={theme.palette.mode === 'dark'}
      onChange={changeTheme}
      theme={theme}
    />
  );
};
