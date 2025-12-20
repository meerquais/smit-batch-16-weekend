import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";


import { getAuth  } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js"

  const firebaseConfig = {
    apiKey: "AIzaSyAWYaLmTnfZPgGM8J5o_FpUdVfoLMmMfXc",
    authDomain: "fir-class-df9c9.firebaseapp.com",
    projectId: "fir-class-df9c9",
    storageBucket: "fir-class-df9c9.firebasestorage.app",
    messagingSenderId: "509613500966",
    appId: "1:509613500966:web:84e91bfc78ccb8bafed4e7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)


