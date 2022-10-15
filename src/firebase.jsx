import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDr1EWrfQlWeI07dhtp2EVkKdW3pQsOtOk",
  authDomain: "e-commerce-7733b.firebaseapp.com",
  databaseURL: "https://e-commerce-7733b-default-rtdb.firebaseio.com",
  projectId: "e-commerce-7733b",
  storageBucket: "e-commerce-7733b.appspot.com",
  messagingSenderId: "151955625496",
  appId: "1:151955625496:web:e8bf65f8697395a8f9956d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;