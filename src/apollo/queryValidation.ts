import { gql } from '@apollo/client';

export const queryValidation = (query: string) => {
  try {
    return gql`
      ${query}
    `;
  } catch (e) {
    return 'Error: Wrong query format!';
  }
};
