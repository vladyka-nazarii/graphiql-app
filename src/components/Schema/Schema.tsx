import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_SCHEMA } from '../../apollo/schema';

import styles from './Schema.module.scss';

export const Schema = () => {
  const [open, setOpen] = useState(false);
  const [loadData, { called, loading, data, error }] = useLazyQuery(GET_SCHEMA);

  const onClick = () => {
    loadData();
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className={`${styles.button} ${open && styles.opened}`} onClick={onClick}>
        SCHEMA
      </div>
      <pre className={`${styles.schema} ${open && styles.opened}`}>
        {loading
          ? 'Loading...'
          : !called
          ? ''
          : error
          ? error.message
          : JSON.stringify(data, null, '\t')}
      </pre>
    </>
  );
};
