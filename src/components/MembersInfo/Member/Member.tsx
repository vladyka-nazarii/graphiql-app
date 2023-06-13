import { Avatar, Link, Typography } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

import { IMember } from '../../../types/types';

import styles from './Member.module.scss';

export const Member = ({
  name,
  avatarSrc,
  isTeamLeader,
  githubSrc,
  translationKey,
}: Omit<IMember, 'id'>) => {
  const { t } = useTranslation();

  return (
    <div className={styles.member}>
      <Avatar style={{ width: '300px', height: '300px' }} src={avatarSrc} alt={name}></Avatar>
      <Typography variant="h4">{t(`${name}`)}</Typography>
      <div className={styles.memberSubtitle}>
        <Typography>
          {isTeamLeader && t('Team leader,')} {t('Frontend developer')}
        </Typography>
        <Link href={githubSrc}>
          <GitHub color="action" fontSize="medium" />
        </Link>
      </div>
      <Typography align="center">{t(`${translationKey}`)}</Typography>
    </div>
  );
};
