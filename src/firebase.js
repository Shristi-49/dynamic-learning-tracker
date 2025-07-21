import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxvYUJ8vQgMJ1nijVd1MUAl7IdEUtnWZQ",
  authDomain: "learning-tracker-a1795.firebaseapp.com",
  projectId: "learning-tracker-a1795",
  storageBucket: "learning-tracker-a1795.firebasestorage.app",
  messagingSenderId: "584883423216",
  appId: "1:584883423216:web:aea71306bb3c3c0e91ff35",
  measurementId: "G-7YT5G8D2SL"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();