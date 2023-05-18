import { useMemo, useState } from 'react';
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

  const content = useMemo(() => {
    if (!called) {
      return '';
    }
    if (loading) {
      return 'Loading...';
    }
    if (error) {
      return error.message;
    }
    return JSON.stringify(data, null, '\t');
  }, [called, data, error, loading]);

  return (
    <>
      <div className={`${styles.button} ${open && styles.opened}`} onClick={onClick}>
        SCHEMA
      </div>
      <pre className={`${styles.schema} ${open && styles.opened}`}>{content}</pre>
    </>
  );
};
