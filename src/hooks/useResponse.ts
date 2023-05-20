import { useState } from 'react';
import { gql, ServerError, useLazyQuery } from '@apollo/client';

import { QUERY_EXAMPLE } from '../apollo/queryExample';
import { Message } from '../types/enums';

export const useResponse = () => {
  const [query, setQuery] = useState(QUERY_EXAMPLE);
  const [loadData, { loading, data, error }] = useLazyQuery(
    gql`
      ${query}
    `,
  );

  if (loading) {
    return { setQuery, loadData, loading, data: Message.Loading };
  }
  if (error) {
    return {
      setQuery,
      loadData,
      loading,
      data: `Error: ${error.message}\n${JSON.stringify(
        (error.networkError as ServerError).result || Message.CheckConnection,
        null,
        '\t',
      )}`,
    };
  }
  if (!data) {
    return { setQuery, loadData, loading, data: '' };
  }

  return {
    setQuery,
    loadData,
    loading,
    data: JSON.stringify(data, null, '\t').replace(/.*__typename.*\n/g, ''),
  };
};
