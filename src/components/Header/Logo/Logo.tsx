import { FC } from 'react';
import { Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { SpaceX } from '../../UI/SpaceX/SpaceX';

interface ILogoProps {
  isScrolled: boolean;
}

export const Logo: FC<ILogoProps> = ({ isScrolled }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Stack sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
      <SpaceX dark={isScrolled && theme.palette.mode === 'dark'} />
      <Typography variant="h6">{t('GraphQL Playground')}</Typography>
    </Stack>
  );
};
