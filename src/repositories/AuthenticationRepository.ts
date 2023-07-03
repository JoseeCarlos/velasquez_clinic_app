import { signInWithEmailAndPassword as signInFirebase } from '../data/AuthenticationService';

export const signIn = async (email: string, password: string): Promise<void> => {
  try {
    await signInFirebase(email, password);
  } catch (error) {
    throw new Error('Failed to sign in');
  }
};
