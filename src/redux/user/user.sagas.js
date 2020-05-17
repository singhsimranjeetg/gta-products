import {takeLatest, put, call, all} from "redux-saga/effects"

import { userActionTypes} from "./user.types"

import {auth, googleprovider, createUserProfileDocument} from "../../firebase/firebase.utils"

import {googleSignInSuccess, googleSignInFailure} from "./users.actions"

//import {googleSignInStart, emailSignInStart} from "./users.actions"

//import {createUserProfileDocument} from "../../firebase/firebase.utils"

export function* googleSignInAsyc(){
    //yield console.log("hello")

    try {
        const {user} = yield auth.signInWithPopup(googleprovider) //not using the fx signinwithgoogle here, bcz we want access to the value returned from this method
       // console.log(userRef) this userRef is the same userAuth object we were in App.js
       //de structuring the user property off the obj returned by the aboove method

       const userRef = yield call(createUserProfileDocument, user)
       const userSnapshot = yield userRef.get()
       yield put(googleSignInSuccess({ id : userSnapshot.id, ...userSnapshot.data()}))


    }catch(error){
      yield put (googleSignInFailure(error))
    }

}

export function *googleSignInStart(){
    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignInAsyc)
}











export function *userSagas(){
    yield all([call(googleSignInStart)])
}

