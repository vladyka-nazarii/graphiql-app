import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ExperienceList } from './ExperienceList/ExperienceList';

import styles from './GeneralInfo.module.scss';

export const GeneralInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.generalInfo}>
        <Typography variant="h3">{t('About the project')}</Typography>
        <Typography>{t('generalInfo.graphiql')}</Typography>
      </div>
      <div className={styles.generalInfo}>
        <Typography variant="h3">RS School</Typography>
        <Typography>{t('generalInfo.rsschool')}</Typography>
        <Typography sx={{ alignSelf: 'flex-start' }}>{t('generalInfo.participants')}:</Typography>
        <ExperienceList />
      </div>
    </>
  );
};
