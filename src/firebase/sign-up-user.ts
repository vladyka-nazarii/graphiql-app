import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';
import { FirebaseError } from './firebaseError';

export const signUpUser = async (email: string, password: string) => {
  const EMAIL_ERROR = 'FirebaseError: Firebase: Error (auth/email-already-in-use).';
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    switch (`${error}`) {
      case EMAIL_ERROR:
        throw new FirebaseError('Email already exists');
      default:
        throw new FirebaseError(`${error}`);
    }
  }
};
