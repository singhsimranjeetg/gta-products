import {takeLatest, put, call, all} from "redux-saga/effects"

import { userActionTypes} from "./user.types"

import {auth, googleprovider, createUserProfileDocument, getCurretnUser} from "../../firebase/firebase.utils"

import {SignInSuccess, SignInFailure, signOutFailure, signOutSuccess, SignUpFailure, SignUpSuccess} from "./users.actions"

//import {googleSignInStart, emailSignInStart} from "./users.actions"

//import {createUserProfileDocument} from "../../firebase/firebase.utils"

//using this reuseable function bcz both email and google sign in get the same user object.



//REUSEABLE FUNCTION TO USE FOR LOGIN
export function *getSnapshotFromAuth(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData) //this fx return the userRef, the document of the user trying to login
        const userSnapshot = yield userRef.get()
       // console.log(userSnapshot.data())  this will contain the details of collection of that user ex. displ name, created at 
        yield put(SignInSuccess({ id : userSnapshot.id, ...userSnapshot.data()}))
 
 
     }catch(error){
       yield put (SignInFailure(error))
     }
    }




//GOOGLE LOGIN SAGA
export function* googleSignInAsyc(){
    //yield console.log("hello")

    try {
        const {user} = yield auth.signInWithPopup(googleprovider)
        //console.log(user) //not using the fx signinwithgoogle here, bcz we want access to the value returned from this method
       // console.log(userRef) this userRef is the same userAuth object we were in App.js
       //de structuring the user property off the obj returned by the aboove method and storing it in user var.
    yield getSnapshotFromAuth(user)
    }catch(error){
      yield put (SignInFailure(error))
    }

}

export function *googleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignInAsyc)
}





//EMAIL LOGIN SAGA 
export function* emailSignInAsync( {payload: {email, password}}){
     //console.log("ballle mundya")
    try{

     const {user} = yield auth.signInWithEmailAndPassword(email, password)
     yield getSnapshotFromAuth(user)
     
    }catch(error){
        yield put(SignInFailure(error))
        //yield console.log(error.message)
       // yield console.log(password)

    }
}

export function *emailSignInStart (){
    yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, emailSignInAsync)
}




//USER PERSISTENCE SAGA
export function *isUserAuthenticated(){
    //yield console.log("gdfjgdfc")
    try {
        const userAuth = yield getCurretnUser() //this fx will return us the same user obj as other aysnc fx
        if(!userAuth) return //if no user obj received, then return the fx 
        yield getSnapshotFromAuth(userAuth) //otherwise pass the obj to above fx and it will make trigger the sign in success action.


    }catch(error){
        yield put(SignInFailure(error))
    }
}

export function *checkUserSession (){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}



//SIGN OUT SAGA

function *signOutAsync(){
   // yield console.log("good")
   try{
    yield auth.signOut() //this method is to sign out the user from forebase and deletes the sessions.
     yield put(signOutSuccess())
   }catch(error){
       yield put(signOutFailure(error))
   }
}

function *signOutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOutAsync)
}



//SIGN UP SAGA

function *signUpAsync({payload: {email, password, displayName}}){
    //yield console.log("hekk")
    try{

        const {user} = yield auth.createUserWithEmailAndPassword(email,password)  //hover over to see fx
        yield put(SignUpSuccess({user, additionalData : {displayName}}))
      //  yield createUserProfileDocument(user, {displayName})  //we are creating a new user in the db
        
      //  yield console.log(user)
        
        //this.setState({email: "" , password: "", displayName: "", confirmPassword: "", phoneNumber: ""})
 
     }
     catch(error){
         yield put(SignUpFailure(error))
        // yield console.log(error)
 
     }
}

function *signUpStart(){
    yield takeLatest(userActionTypes.SIGNUP_START, signUpAsync)
}


function *signInAfterSignOut({payload: {user , additionalData}}){
   yield getSnapshotFromAuth(user, additionalData)
}

function *onSignUpSuccess(){
    yield takeLatest(userActionTypes.SIGNUP_SUCCESS, signInAfterSignOut)
}



export function *userSagas(){
    yield all([
        call(googleSignInStart),
        call(emailSignInStart),
        call(checkUserSession),
        call(signOutStart),
        call(signUpStart),
        call(onSignUpSuccess)
               
          
    ])
}

