import { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

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

  const correctData: typeof data = {};

  const removeTypename = (sourceData: typeof data, correctData: typeof data) => {
    if (typeof sourceData === 'object') {
      Object.keys(sourceData).forEach((key) => {
        if (typeof sourceData[key] === 'object') {
          correctData[key] = {};
          removeTypename(sourceData[key], correctData[key]);
        } else {
          if (key !== '__typename') {
            correctData[key] = sourceData[key];
          }
        }
      });
    }
  };

  if (!dataValue) {
    return { loading, data: '' };
  }
  if (validation === 'Error: Wrong query format!') {
    return { loading, data: 'Wrong query format!' };
  }
  if (loading) {
    return { loading, data: 'Loading...' };
  }
  if (error) {
    return { loading, data: `Error: ${error.message}` };
  }

  removeTypename(data, correctData);
  return { loading, data: JSON.stringify(correctData, null, '\t') };
};
