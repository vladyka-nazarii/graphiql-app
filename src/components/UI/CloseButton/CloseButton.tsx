import { FC } from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface ICloseProps {
  handleClose: () => void;
}

export const CloseButton: FC<ICloseProps> = ({ handleClose }) => {
  return (
    <CloseIcon
      sx={{
        position: 'absolute',
        top: '15px',
        right: '20px',
        width: '40px',
        height: '40px',
        cursor: 'pointer',
      }}
      onClick={handleClose}
    />
  );
};
