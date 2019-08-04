import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var Config = {
    apiKey: "AIzaSyCMX4dIKo04fT8XPEFaXX982M20DFmJnHM",
    authDomain: "blogreactfirebase.firebaseapp.com",
    databaseURL: "https://blogreactfirebase.firebaseio.com",
    projectId: "blogreactfirebase",
    storageBucket: "",
    messagingSenderId: "263780012684",
    appId: "1:263780012684:web:a27e53b49e866aa0"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
  firebase.firestore().settings({ timestampsInSnapshots: true});
  
  export default firebase;