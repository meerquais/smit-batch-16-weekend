import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getFirestore , doc , setDoc} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAv4_g9eldlr_3RCmB_mRezOkUdoUHoAII",
    authDomain: "smit-classes-3690f.firebaseapp.com",
    projectId: "smit-classes-3690f",
    storageBucket: "smit-classes-3690f.firebasestorage.app",
    messagingSenderId: "877507408894",
    appId: "1:877507408894:web:dd5ecbfa5e7f08d00e46af"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export {db , doc , setDoc};