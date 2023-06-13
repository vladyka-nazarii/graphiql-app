export const checkValidationMessage = (
  queryMessage: string,
  variablesMessage: string,
  headersMessage: string,
) => {
  if (queryMessage) {
    return queryMessage;
  }
  if (variablesMessage) {
    return variablesMessage;
  }
  if (headersMessage) {
    return headersMessage;
  }
  return '';
};
