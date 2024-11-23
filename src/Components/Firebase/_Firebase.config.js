// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCjvibjJP6FDZGVFuIzP2vMmcGFE73Vtmk",
//   authDomain: "cloths-donating.firebaseapp.com",
//   projectId: "cloths-donating",
//   storageBucket: "cloths-donating.firebasestorage.app",
//   messagingSenderId: "362587213244",
//   appId: "1:362587213244:web:25897b12df265fd6b9afb9",
//   measurementId: "G-L09MVSC8RK"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth