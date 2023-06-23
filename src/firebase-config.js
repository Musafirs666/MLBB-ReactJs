import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkjgAxlvPpP-ZFFZ15tKznjdyQ2wpk3hQ",
  authDomain: "mlbb-api-6d660.firebaseapp.com",
  databaseURL:
    "https://mlbb-api-6d660-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mlbb-api-6d660",
  storageBucket: "mlbb-api-6d660.appspot.com",
  messagingSenderId: "22003400816",
  appId: "1:22003400816:web:929497276e9b5c9b0e34b5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
