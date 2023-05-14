import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';
import { FirebaseError } from './firebaseError';

export const signInUser = async (email: string, password: string) => {
  const EMAIL_ERROR = 'FirebaseError: Firebase: Error (auth/user-not-found).';
  const PASS_ERROR = 'FirebaseError: Firebase: Error (auth/wrong-password).';
  const REQUESTS__ERROR =
    'FirebaseError: Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).';
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    switch (`${error}`) {
      case EMAIL_ERROR:
        throw new FirebaseError('Wrong email or password');
      case PASS_ERROR:
        throw new FirebaseError('Wrong email or password');
      case REQUESTS__ERROR:
        throw new FirebaseError('Too many requests');
      default:
        throw new FirebaseError(`${error}`);
    }
  }
};
