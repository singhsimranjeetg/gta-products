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



  //creating new user in db start   ############### 

  //fx to get the users obj from the auth and store it in db's users collection
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return //return null if user is sign out bcz null is passed form app.js 
    //userAuth is the firebase data from our authentication optins
   // const userRef = firestore.doc("/users/HkgewdKW2RNmcchEm9Uq") returns true for bcz this doc exists in the users collection
    

   //executes this if user is sign in 
    const userRef = firestore.doc(`users/${userAuth.uid}`) 
    //console.log(userRef) //this userref return an object with db doc id and few other prop of that doc.

    const snapShot = await userRef.get()  
    //console.log(snapShot) //this snapshot returns almost same db object with exists boolean prop
    //the exists prop returns true if there is already a doc with same uid in the user collectionn
    //the exists prop return false if there is no doc in db with same id that got generated in auth 

    if(!snapShot.exists) {    //in order to get see data, we have to use .data() mathod on snapshot
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {                      //create a new user obj in db if not already exists 
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
                          })
        }
        catch(err) {
            console.log("error creating a new user", err.message)
        }   
    }
    return userRef
}
//creating new user in db finished***********


//storing user messages in firestore  ###############

export const createUserMessages = async (messageInfo, additionalData) => {
  const messageRef = firestore.collection(`messages`).doc()
  

  const {senderName, email, message} = messageInfo
  
  const createdAt = new Date()

  try{
     await messageRef.set({
       senderName,
       email,
       createdAt,
       message,
       ...additionalData
     })

  }catch(error){
    console.log("error creating the message doc", error.message)

  }
  return messageRef
}
//storing user Messages ends*********



//function to make new collections and documents 
 export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
   const collectionRef = firestore.collection(collectionKey)
   console.log(collectionRef)

   const batch = firestore.batch()    //forEach is similar to the map method excepts it doesnt return a new array.
   objectsToAdd.forEach(obj => {
     const newDocRef = collectionRef.doc()     //So what this will do is it's telling firebase give me a new document reference in this collection
     //console.log(newDocRef)
     batch.set(newDocRef, obj)
   })
   return await batch.commit() //it will fire the batch
 }  

 //finishes here



//getting snapshot from shop comp and converting the db obj to the desired format

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollections = collections.docs.map(doc => {    //.docs method will point to the documents in collections and .data will get the objects 
    const {title, items} = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }

  }) //using the reduce method on all the object and assigning a property name to each of them
  console.log(transformedCollections)
  return transformedCollections.reduce((accumulator, collection ) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})

}


  export const getCurretnUser = () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = auth.onAuthStateChanged(userAuth => {
        unsubscribe()
        resolve(userAuth)
      }, reject)
    })
  }

 

  export const auth = firebase.auth() //exporting the auth with auth variable
  export const firestore = firebase.firestore()   //exporting the db 

  //setting up google authentication utility
//give access to googleauth class from the auth library
 export const googleprovider = new firebase.auth.GoogleAuthProvider()

  googleprovider.setCustomParameters({prompt: "select_account"})
  
  //export the var that use auth method form firebase and use the signineithPopup with provider that is google in this case
  export const SignInWithGoogle = () => auth.signInWithPopup(googleprovider)

  export default firebase


  
