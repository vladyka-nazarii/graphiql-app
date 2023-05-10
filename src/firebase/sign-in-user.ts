import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';
import { FirebaseError } from './firebaseError';

export const signInUser = async (email: string, password: string) => {
  const EMAIL_ERROR = 'FirebaseError: Firebase: Error (auth/user-not-found).';
  const PASS_ERROR = 'FirebaseError: Firebase: Error (auth/wrong-password).';
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    switch (`${error}`) {
      case EMAIL_ERROR:
        throw new FirebaseError('Email Not Found');
      case PASS_ERROR:
        throw new FirebaseError('Wrong Password');
      default:
        throw new FirebaseError(`${error}`);
    }
  }
};
