import { gql } from '@apollo/client';
import { Message } from '../types/enums';

export const queryValidation = (query: string) => {
  try {
    return gql`
      ${query}
    `;
  } catch (e) {
    return Message.WrongFormat;
  }
};
