import { Message } from '../types/enums';

export const headersValidation = (headers: string) => {
  try {
    return JSON.parse(headers);
  } catch (e) {
    return Message.WrongHeadersFormat;
  }
};
