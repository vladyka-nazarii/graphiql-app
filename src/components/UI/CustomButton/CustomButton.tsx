import { FC, MouseEventHandler } from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface IButtonProps {
  title: string;
  onClick: (event: MouseEventHandler<HTMLButtonElement>) => void;
}

const CustomButton: FC<IButtonProps> = ({ title, onClick }) => {
  const { t } = useTranslation();
  return (
    <Button color="inherit" onClick={onClick}>
      {t(`${title}`)}
    </Button>
  );
};

export default CustomButton;
