import { useMemo, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { GET_SCHEMA } from '../../apollo/schema';

import styles from './Schema.module.scss';
import { Message } from '../../types/enums';

export const Schema = () => {
  const [open, setOpen] = useState(false);
  const [loadData, { called, loading, data, error }] = useLazyQuery(GET_SCHEMA);
  const { t } = useTranslation();

  const onClick = () => {
    loadData();
    setOpen((prev) => !prev);
  };

  const content = useMemo(() => {
    if (!called) {
      return '';
    }
    if (loading) {
      return t(Message.Loading);
    }
    if (error) {
      return error.message === Message.ResponseNotSuccessful
        ? t(Message.ResponseNotSuccessful)
        : error.message;
    }
    return JSON.stringify(data, null, '\t');
  }, [called, data, error, loading, t]);

  return (
    <>
      <div className={`${styles.button} ${open && styles.opened}`} onClick={onClick}>
        {t('SCHEMA')}
      </div>
      <pre className={`${styles.schema} ${open && styles.opened}`}>{content}</pre>
    </>
  );
};
