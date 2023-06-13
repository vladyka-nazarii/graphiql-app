import { memo } from 'react';

import styles from './RequestButton.module.scss';

interface IRequestButtonProps {
  onClick: () => void;
  loading: boolean;
}

export const RequestButton = memo(({ onClick, loading }: IRequestButtonProps) => {
  return (
    <div className={styles.buttonWrapper} onClick={onClick}>
      {loading ? (
        <img className={styles.button} src="./stopButton.svg" alt="Stop" />
      ) : (
        <img className={styles.button} src="./playButton.svg" alt="Play" />
      )}
    </div>
  );
});
