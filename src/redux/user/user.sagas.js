import {takeLatest, put, call, all} from "redux-saga/effects"

import { userActionTypes} from "./user.types"

import {auth, googleprovider, createUserProfileDocument, getCurretnUser} from "../../firebase/firebase.utils"

import {SignInSuccess, SignInFailure} from "./users.actions"

//import {googleSignInStart, emailSignInStart} from "./users.actions"

//import {createUserProfileDocument} from "../../firebase/firebase.utils"

//using this reuseable function bcz both email and google sign in get the same user object.
export function *getSnapshotFromAuth(userAuth){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnapshot = yield userRef.get()
        yield put(SignInSuccess({ id : userSnapshot.id, ...userSnapshot.data()}))
 
 
     }catch(error){
       yield put (SignInFailure(error))
     }
    }

export function* googleSignInAsyc(){
    //yield console.log("hello")

    try {
        const {user} = yield auth.signInWithPopup(googleprovider) //not using the fx signinwithgoogle here, bcz we want access to the value returned from this method
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











export function *userSagas(){
    yield all([
        call(googleSignInStart),
        call(emailSignInStart),
        call(checkUserSession)
               
          
    ])
}

