import { useState } from 'react';
import { gql, ServerError, useLazyQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import { QUERY_EXAMPLE } from '../apollo/queryExample';
import { Message } from '../types/enums';

export const useResponse = () => {
  const [query, setQuery] = useState(QUERY_EXAMPLE);
  const { t } = useTranslation();
  const [variables, setVariables] = useState({});
  const [headers, setHeaders] = useState({});
  const [loadData, { loading, data, error }] = useLazyQuery(
    gql`
      ${query}
    `,
    {
      variables,
      context: {
        headers,
      },
    },
  );

  if (loading) {
    return { setQuery, setVariables, setHeaders, loadData, loading, data: t(Message.Loading) };
  }
  if (error) {
    return {
      setQuery,
      setVariables,
      setHeaders,
      loadData,
      loading,
      data: `${t('Error')}: ${
        error.message === Message.ResponseNotSuccessful
          ? t(Message.ResponseNotSuccessful)
          : error.message
      }\n${JSON.stringify((error.networkError as ServerError)?.result || '', null, '\t')}`,
    };
  }
  if (!data) {
    return { setQuery, setVariables, setHeaders, loadData, loading, data: '' };
  }

  return {
    setQuery,
    setVariables,
    setHeaders,
    loadData,
    loading,
    data: JSON.stringify(data, null, '\t').replace(/.*__typename.*\n/g, ''),
  };
};
