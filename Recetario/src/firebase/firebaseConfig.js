// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc0kTOgvqhPNYJ8AW_32rxwX2RNpufOpk",
  authDomain: "recetario-50ae9.firebaseapp.com",
  projectId: "recetario-50ae9",
  storageBucket: "recetario-50ae9.firebasestorage.app",
  messagingSenderId: "88491136634",
  appId: "1:88491136634:web:96a42d382e7df9fcadcdc3",
  measurementId: "G-3KRK4DTEKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 👇 Aquí está el `auth` que necesitas exportar
const auth = getAuth(app);

// Exporta `auth` para poder usarlo en tu app
export { auth };
