import { useEffect, useState } from 'react';
import { useQuery, gql, ServerError } from '@apollo/client';

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

  const { loading, error, data } = useQuery(
    gql`
      ${query}
    `,
  );

  if (!dataValue) {
    return { loading, data: '' };
  }
  if (validation === 'Error: Wrong query format!') {
    return { loading, data: 'Error: Wrong query format!' };
  }
  if (loading) {
    return { loading, data: 'Loading...' };
  }
  if (error) {
    return {
      loading,
      data: `Error: ${error.message}\n${JSON.stringify(
        (error.networkError as ServerError).result || 'Check your internet connection',
        null,
        '\t',
      )}`,
    };
  }

  return { loading, data: JSON.stringify(data, null, '\t').replace(/.*__typename.*\n/g, '') };
};
