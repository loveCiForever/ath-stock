// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1P8-XUfQDfLJxDfXNWcSc8h6aqOgqAz8",
  authDomain: "athstock-ff032.firebaseapp.com",
  projectId: "athstock-ff032",
  storageBucket: "athstock-ff032.firebasestorage.app",
  messagingSenderId: "259607239976",
  appId: "1:259607239976:web:60780d58cf0203280f841d",
  measurementId: "G-X8ZSWGRJE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;