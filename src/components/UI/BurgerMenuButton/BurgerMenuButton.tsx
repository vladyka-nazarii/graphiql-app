import { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

interface IProps {
  handleBurgerButton: () => void;
}

export const BurgerMenuButton: FC<IProps> = ({ handleBurgerButton }) => {
  return (
    <MenuIcon
      sx={{
        cursor: 'pointer',
        position: 'absolute',
        right: '0',
        width: '40px',
        height: '40px',
      }}
      onClick={handleBurgerButton}
    />
  );
};
