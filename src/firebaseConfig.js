import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBfIt5SU02rf7e2UoGMIlF8z2xTmwVKxog",
    authDomain: "hexotix-90caf.firebaseapp.com",
    projectId: "hexotix-90caf",
    storageBucket: "hexotix-90caf.firebasestorage.app",
    messagingSenderId: "732120042108",
    appId: "1:732120042108:web:eb9b2568d2f9d773ad17f9",
    measurementId: "G-85QJJ7RKGM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Signup function
export const signUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};

// Login function
export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Logout function
export const logoutUser = async () => {
  await signOut(auth);
};
