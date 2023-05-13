import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

export const signOutUser = async () => {
  const result = await signOut(auth);
  return result;
};
