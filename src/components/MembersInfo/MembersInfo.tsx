import { useMemo } from 'react';

import { Member } from './Member/Member';
import { TEAM_MEMBERS_INFO } from '../../constants/constants';

import styles from './MembersInfo.module.scss';

export const MembersInfo = () => {
  const membersInfoLayout = useMemo(() => {
    return TEAM_MEMBERS_INFO.map(
      ({ id, name, avatarSrc, isTeamLeader, githubSrc, translationKey }) => {
        return (
          <Member
            key={id}
            name={name}
            avatarSrc={avatarSrc}
            isTeamLeader={isTeamLeader}
            githubSrc={githubSrc}
            translationKey={translationKey}
          />
        );
      },
    );
  }, []);

  return <div className={styles.teamInfo}>{membersInfoLayout}</div>;
};
