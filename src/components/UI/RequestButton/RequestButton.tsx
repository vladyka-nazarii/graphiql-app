import { memo } from 'react';
import styles from './RequestButton.module.scss';
import { StopButton } from '../StopButton/StopButton';
import { PlayButton } from '../PlayButton/PlayButton';

interface IRequestButtonProps {
  onClick: () => void;
  loading: boolean;
}

export const RequestButton = memo(({ onClick, loading }: IRequestButtonProps) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {loading ? <StopButton /> : <PlayButton />}
    </div>
  );
});
