import { memo } from 'react';
import styles from './RequestButton.module.scss';

interface IRequestButtonProps {
  onClick: () => void;
  loading: boolean;
}

export const RequestButton = memo(({ onClick, loading }: IRequestButtonProps) => {
  const Play = () => (
    <svg
      fill="#000000"
      height="80px"
      width="80px"
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g>
        <path
          d="M256,0C114.625,0,0,114.625,0,256c0,141.374,114.625,256,256,256c141.374,0,256-114.626,256-256
  C512,114.625,397.374,0,256,0z M351.062,258.898l-144,85.945c-1.031,0.626-2.344,0.657-3.406,0.031
  c-1.031-0.594-1.687-1.702-1.687-2.937v-85.946v-85.946c0-1.218,0.656-2.343,1.687-2.938c1.062-0.609,2.375-0.578,3.406,0.031
  l144,85.962c1.031,0.586,1.641,1.718,1.641,2.89C352.703,257.187,352.094,258.297,351.062,258.898z"
        />
      </g>
    </svg>
  );

  const Stop = () => (
    <svg
      fill="#000000"
      height="80px"
      width="80px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        d="M256,0C114.617,0,0,114.617,0,256s114.617,256,256,256s256-114.617,256-256S397.383,0,256,0z M336,320
    c0,8.836-7.156,16-16,16H192c-8.844,0-16-7.164-16-16V192c0-8.836,7.156-16,16-16h128c8.844,0,16,7.164,16,16V320z"
      />
    </svg>
  );

  return (
    <div className={styles.button} onClick={onClick}>
      {loading ? <Stop /> : <Play />}
    </div>
  );
});
