// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
    import { getAuth , GoogleAuthProvider,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signInWithPopup,
      onAuthStateChanged ,
      sendPasswordResetEmail,
      signOut
     } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
     import { getFirestore,
              doc,
              setDoc,
              getDoc,
              getDocs,
              addDoc,
              updateDoc,
              deleteDoc,
              collection,
              query,
              where,
              orderBy,
              serverTimestamp
     } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDcQT9Zc2Rggy9cDK4rbg4Pb7nbwm-GcBE",
    authDomain: "smit-todo-list-df236.firebaseapp.com",
    projectId: "smit-todo-list-df236",
    storageBucket: "smit-todo-list-df236.firebasestorage.app",
    messagingSenderId: "870435571448",
    appId: "1:870435571448:web:985ec18394996e4fa41d0d"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)
  const db = getFirestore(app)
  


  export {
    auth,db,
      GoogleAuthProvider,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signInWithPopup,
      onAuthStateChanged ,
      sendPasswordResetEmail,
      signOut,
      doc,
      setDoc,
      getDoc,
      getDocs,
      addDoc,
      updateDoc,
      deleteDoc,
      collection,
      query,
      where,
      orderBy,
      serverTimestamp
  };