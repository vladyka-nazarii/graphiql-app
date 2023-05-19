import { useMemo, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CircularProgress } from '@mui/material';

import { GET_SCHEMA } from '../../apollo/gql';
import { SchemaContent } from './SchemaContent/SchemaContent';

import styles from './Schema.module.scss';

export const Schema = () => {
  const [open, setOpen] = useState(false);
  const [loadData, { called, loading, data, error }] = useLazyQuery(GET_SCHEMA);

  const handleOpen = () => {
    loadData();
    setOpen((prev) => !prev);
  };

  const content = useMemo(() => {
    if (!called) {
      return '';
    }
    if (loading) {
      return <CircularProgress />;
    }
    if (error) {
      return error.message;
    }
    return (
      <SchemaContent
        queries={data.__schema.queryType.fields}
        mutations={data.__schema.mutationType.fields}
        subscriptions={data.__schema.subscriptionType.fields}
      />
    );
  }, [called, data, error, loading]);

  return (
    <aside>
      <h1 className={`${styles.button} ${open && styles.opened}`} onClick={handleOpen}>
        SCHEMA
      </h1>
      <section className={`${styles.schema} ${open && styles.opened}`}>{content}</section>
    </aside>
  );
};
