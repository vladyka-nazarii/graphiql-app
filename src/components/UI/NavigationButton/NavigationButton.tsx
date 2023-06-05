import { FC } from 'react';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface IProps {
  path: string;
  title: string;
}

export const NavigationButton: FC<IProps> = ({ path, title }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Button color="inherit" onClick={() => navigate(`${path}`)}>
      {t(`${title}`)}
    </Button>
  );
};
