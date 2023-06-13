export enum Message {
  Loading = 'Loading...',
  WrongQueryFormat = 'Error: Wrong query format!',
  WrongVariablesFormat = 'Error: Wrong variables format!',
  WrongHeadersFormat = 'Error: Wrong headers format!',
  ResponseNotSuccessful = 'Response not successful: Received status code 400',
}

export enum Validation {
  EmailRequired = 'Email is required',
  EmailInvalid = 'Invalid email',
  PasswordRequired = 'Password is required',
  PasswordConfirm = 'Confirm your password',
  PasswordMatch = 'Passwords must match',
  MinLength = 'At least 8 characters',
  NeedLetter = 'At least 1 letter',
  NeedNumber = 'At least 1 number',
  NeedSymbol = 'At least 1 special symbol',
}
