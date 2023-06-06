import { FC } from 'react';
import { Button, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface IProps {
  path: string;
  title: string;
}

export const NavigationButton: FC<IProps> = ({ path, title }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Button
      color="inherit"
      onClick={() => navigate(`${path}`)}
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
