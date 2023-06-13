import { GeneralInfo } from '../../components/GeneralInfo/GeneralInfo';
import { MembersInfo } from '../../components/MembersInfo/MembersInfo';

import styles from './Welcome.module.scss';

export const Welcome = () => {
  return (
    <div className={styles.wrapper}>
      <GeneralInfo />
      <MembersInfo />
    </div>
  );
};
