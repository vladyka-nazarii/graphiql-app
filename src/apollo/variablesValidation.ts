import { Message } from '../types/enums';

export const variablesValidation = (variables: string) => {
  try {
    return JSON.parse(variables);
  } catch (e) {
    return Message.WrongVariablesFormat;
  }
};
