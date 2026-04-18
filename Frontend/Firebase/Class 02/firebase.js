// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword , signOut , sendPasswordResetEmail , sendEmailVerification } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDWhFxRt_PnQ7pVkd0OAgm3aT-M0B_jPwY",
    authDomain: "fir-practice-728cc.firebaseapp.com",
    projectId: "fir-practice-728cc",
    storageBucket: "fir-practice-728cc.firebasestorage.app",
    messagingSenderId: "1098170317706",
    appId: "1:1098170317706:web:952a04d2d051c74d77a673"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  export {auth, signOut , createUserWithEmailAndPassword , sendPasswordResetEmail, signInWithEmailAndPassword , sendEmailVerification};