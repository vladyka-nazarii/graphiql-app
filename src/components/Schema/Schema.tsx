import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { CircularProgress } from '@mui/material';

import { GET_SCHEMA } from '../../apollo/gql';
import { SchemaContent } from './SchemaContent/SchemaContent';

import styles from './Schema.module.scss';

export const Schema = () => {
  const [open, setOpen] = useState(false);
  const { loading, error, data } = useQuery(GET_SCHEMA);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <aside>
      <h1 className={`${styles.button} ${open && styles.opened}`} onClick={handleOpen}>
        SCHEMA
      </h1>
      <section className={`${styles.schema} ${open && styles.opened}`}>
        {(loading && <CircularProgress />) || (error && error.message) || (
          <SchemaContent
            queries={data.__schema.queryType.fields}
            mutations={data.__schema.mutationType.fields}
            subscriptions={data.__schema.subscriptionType.fields}
          />
        )}
      </section>
    </aside>
  );
};
