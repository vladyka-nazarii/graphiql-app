import { useReducer } from 'react';

interface IState {
  emailError: string;
  passwordError: string;
}

type Action = { type: 'email'; value: string } | { type: 'password'; value: string };

const initialState: IState = {
  emailError: '',
  passwordError: '',
};

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case 'email':
      return { emailError: action.value, passwordError: '' };
    case 'password':
      return { emailError: '', passwordError: action.value };
    default:
      return { ...state };
  }
};

export const useAuthError = () => {
  const [firebaseError, dispatch] = useReducer(reducer, initialState);

  function setFirebaseError(error: string) {
    if (/password/i.test(error)) {
      dispatch({ type: 'password', value: error });
    } else if (/email/i.test(error)) {
      dispatch({ type: 'email', value: error });
    }
  }

  return { firebaseError, setFirebaseError };
};
