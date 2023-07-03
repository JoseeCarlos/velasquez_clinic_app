import { auth, db, storage } from "../config/firebaseConfig";
import { signInWithEmailAndPassword as signInFirebase } from 'firebase/auth';


export const signInWithEmailAndPassword = async (email: string, password: string): Promise<void> => {
  console.log('llegaaaaaaa');
  try {

    await signInFirebase(auth, email, password);
  } catch (error) {
    console.log('Error al iniciar sesión:', error);
    throw new Error('Failed to sign in');

  }
};
