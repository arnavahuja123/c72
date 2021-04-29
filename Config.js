import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyCOdphq_k4hqyaY8hViI2jMJXut970U89A",
    authDomain: "newsletter-1467f.firebaseapp.com",
    databaseURL: "https://newsletter-1467f-default-rtdb.firebaseio.com",
    projectId: "newsletter-1467f",
    storageBucket: "newsletter-1467f.appspot.com",
    messagingSenderId: "775885451220",
    appId: "1:775885451220:web:07502ce7846b6e60f27041"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export defualt firebase.firestore()