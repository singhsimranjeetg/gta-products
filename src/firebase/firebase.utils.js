//pulling in the firebase utility library which belong from this file
import firebase from "firebase/app";   
import "firebase/firestore"; //for database
import "firebase/auth"  //for authentication


const config = {
    apiKey: "AIzaSyBMbCbyYNs274zYWIgqIMQjX0SCUJdCG3w",
    authDomain: "gtaproducts-db.firebaseapp.com",
    databaseURL: "https://gtaproducts-db.firebaseio.com",
    projectId: "gtaproducts-db",
    storageBucket: "gtaproducts-db.appspot.com",
    messagingSenderId: "720816448904",
    appId: "1:720816448904:web:fda3534eefb30ac139063d",
    measurementId: "G-2BWRJX5PFW"
  }

  firebase.initializeApp(config)   //initializing the config app

  export const auth = firebase.auth() //exporting the auth with auth variable
  export const firestore = firebase.firestore()   //exporting the db 

  //setting up google authentication utility
//give access to googleauth class from the auth library
  const provider = new firebase.auth.GoogleAuthProvider()

  provider.setCustomParameters({prompt: "select_account"})
  
  //export the var that use auth method form firebase and use the signineithPopup with provider that is google in this case
  export const SignInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase


  
