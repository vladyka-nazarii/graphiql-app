import { useMemo, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CircularProgress, Typography } from '@mui/material';

import { GET_TYPES } from '../../apollo/gql';
import { SchemaContent } from './SchemaContent/SchemaContent';
import { ISchemaType } from './documentTypes/documentTypes';

import styles from './Schema.module.scss';

export const Schema = () => {
  const [open, setOpen] = useState(false);
  const [loadData, { loading, data, error }] = useLazyQuery<ISchemaType>(GET_TYPES);

  const handleOpen = () => {
    loadData();
    setOpen((prev) => !prev);
  };

  const content = useMemo(() => {
    if (data) {
      return <SchemaContent types={data.__schema.types} />;
    } else if (loading) {
      return <CircularProgress className={styles.loading} />;
    } else if (error) {
      return error.message;
    }
  }, [data, loading, error]);

  return (
    <aside>
      <Typography
        variant="body1"
        className={`${styles.button} ${open && styles.opened}`}
        onClick={handleOpen}
      >
        SCHEMA
      </Typography>
      <section className={`${styles.schema} ${open && styles.opened}`}>{content}</section>
    </aside>
  );
};
