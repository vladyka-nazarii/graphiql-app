import { FC } from 'react';
import { Button, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface IButtonProps {
  title: string;
  onClick: () => void;
}

const CustomButton: FC<IButtonProps> = ({ title, onClick }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Button
      color="inherit"
      onClick={onClick}
      sx={{
        '@media (max-width: 767px)': {
          fontSize: theme.typography.h6,
        },
      }}
    >
      {t(`${title}`)}
    </Button>
  );
};

export default CustomButton;
