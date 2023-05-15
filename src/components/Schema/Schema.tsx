import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_SCHEMA } from '../../apollo/schema';

import styles from './Schema.module.scss';

export const Schema = () => {
  const [open, setOpen] = useState(false);
  const { loading, error, data } = useQuery(GET_SCHEMA);

  return (
    <>
      <div
        className={`${styles.button} ${open && styles.opened}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        SCHEMA
      </div>
      <pre className={`${styles.schema} ${open && styles.opened}`}>
        {loading ? 'Loading...' : error ? error.message : JSON.stringify(data, null, '\t')}
      </pre>
    </>
  );
};
