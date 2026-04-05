// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBadUnxUzawA5SqMJJWPX8hiLVUdo8oNWA",
  authDomain: "e-com-firebase-483d5.firebaseapp.com",
  projectId: "e-com-firebase-483d5",
  storageBucket: "e-com-firebase-483d5.firebasestorage.app",
  messagingSenderId: "751585567765",
  appId: "1:751585567765:web:0852728cf0843258795a1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)