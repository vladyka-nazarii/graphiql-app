import { useMemo, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { CircularProgress, Typography } from '@mui/material';

import { GET_TYPES } from '../../apollo/queryTypes';
import { SchemaContent } from './SchemaContent/SchemaContent';
import { ISchemaType } from './documentTypes/documentTypes';

import styles from './Schema.module.scss';
import { Message } from '../../types/enums';

export const Schema = () => {
  const [open, setOpen] = useState(false);
  const [loadData, { loading, data, error }] = useLazyQuery<ISchemaType>(GET_TYPES);
  const { t } = useTranslation();

  const handleOpen = () => {
    loadData();
    setOpen((prev) => !prev);
  };

  const content = useMemo(() => {
    if (loading) {
      return <CircularProgress className={styles.loading} />;
    }
    if (error) {
      return error.message === Message.ResponseNotSuccessful
        ? t(Message.ResponseNotSuccessful)
        : error.message;
    }
    if (data) {
      return <SchemaContent types={data.__schema.types} />;
    }
  }, [data, loading, error]);

  return (
    <aside>
      <Typography
        variant="body1"
        className={`${styles.button} ${open && styles.opened}`}
        onClick={handleOpen}
      >
        {t('SCHEMA')}
      </Typography>
      <section className={`${styles.schema} ${open && styles.opened}`}>{content}</section>
    </aside>
  );
};
