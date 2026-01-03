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
    apiKey: "AIzaSyDC_FFoIsuK-Yi31idDloJ1eXQOVaKLkHM",
    authDomain: "to-do-list-application-bef79.firebaseapp.com",
    projectId: "to-do-list-application-bef79",
    storageBucket: "to-do-list-application-bef79.firebasestorage.app",
    messagingSenderId: "992484101122",
    appId: "1:992484101122:web:d3a86e5fb17e5f01126b1b"
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