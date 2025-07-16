import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  getRedirectResult,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBc0kTOgvqhPNYJ8AW_32rxwX2RNpufOpk",
  authDomain: "recetario-50ae9.firebaseapp.com",
  projectId: "recetario-50ae9",
  storageBucket: "recetario-50ae9.appspot.com",
  messagingSenderId: "88491136634",
  appId: "1:88491136634:web:96a42d382e7df9fcadcdc3",
  measurementId: "G-3KRK4DTEKL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export { auth };

const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log("Usuario:", user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData?.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error("Error:", errorCode, errorMessage);
  });

getRedirectResult(auth)
  .then((result) => {
    if (result) {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("Usuario desde redirección:", user);
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData?.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error("Error en redirección:", errorCode, errorMessage);
  });
