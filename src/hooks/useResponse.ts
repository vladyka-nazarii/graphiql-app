import { useEffect, useState } from 'react';
import { gql, ServerError, useLazyQuery } from '@apollo/client';

import { QUERY_EXAMPLE } from '../apollo/queryExample';
import { queryValidation } from '../apollo/queryValidation';

export const useResponse = (dataValue: string) => {
  const [query, setQuery] = useState(QUERY_EXAMPLE);
  const validation = queryValidation(dataValue);

  useEffect(() => {
    if (validation !== 'Error: Wrong query format!') {
      setQuery(dataValue);
    }
  }, [dataValue, validation]);

  const [loadData, { called, loading, data, error }] = useLazyQuery(
    gql`
      ${query}
    `,
  );

  if (!dataValue || !called) {
    return { loadData, loading, data: '' };
  }
  if (validation === 'Error: Wrong query format!') {
    return { loadData, loading, data: 'Error: Wrong query format!' };
  }
  if (loading) {
    return { loadData, loading, data: 'Loading...' };
  }
  if (error) {
    return {
      loadData,
      loading,
      data: `Error: ${error.message}\n${JSON.stringify(
        (error.networkError as ServerError).result || 'Check your internet connection',
        null,
        '\t',
      )}`,
    };
  }

  return {
    loadData,
    loading,
    data: JSON.stringify(data, null, '\t').replace(/.*__typename.*\n/g, ''),
  };
};
