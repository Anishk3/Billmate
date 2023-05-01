// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB14w7IqfDWHRVmy9YqPvGLbYGTT2H_bNU",
  authDomain: "billmate-85def.firebaseapp.com",
  projectId: "billmate-85def",
  storageBucket: "billmate-85def.appspot.com",
  messagingSenderId: "456609937646",
  appId: "1:456609937646:web:e0cadf40b58efb86c81bff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;