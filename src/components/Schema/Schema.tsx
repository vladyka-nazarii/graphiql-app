import { useState } from 'react';

import styles from './Schema.module.scss';

export const Schema = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`${styles.button} ${open && styles.opened}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        SCHEMA
      </button>
      <div className={`${styles.schema} ${open && styles.opened}`}>Here must be a Scheme</div>
    </>
  );
};
