import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'


const firebaseConfig = {

    apiKey: "AIzaSyCO4a-YbBNrQTBbaro5LxgFZptrBbikz5s",
  
    authDomain: "reactapp-20153.firebaseapp.com",
  
    projectId: "reactapp-20153",
  
    storageBucket: "reactapp-20153.appspot.com",
  
    messagingSenderId: "641347917732",
  
    appId: "1:641347917732:web:9e8a88f9e5ab5342ff5331"
  
  };
  
const firebaseDb = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();