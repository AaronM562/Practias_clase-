import { auth } from "../firebase/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
            displayName: name,
        });
    }

    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  return signOut(auth);
};
