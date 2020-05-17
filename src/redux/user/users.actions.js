import {userActionTypes} from "./user.types"

export const setCurrentUser = user => ({  //so user is same obj as UserAuth or Users in the app.js
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = (emailAndPassword) => ({
    type: userActionTypes.GOOGLE_SIGNIN_START,
    
})


export const googleSignInSuccess = (user) => ({
    type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
    payload: user
    
})


export const googleSignInFailure = (error) => ({
    type: userActionTypes.GOOGLE_SIGNIN_FAILURE,
    payload: error
    
})

export const emailSignInStart = () => ({
    type: userActionTypes.EMAIL_SIGNIN_START,
    
})


export const emailSignInSuccess = (user) => ({
    type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
    payload: user
    
})


export const emailSignInFailure = (error) => ({
    type: userActionTypes.EMAIL_SIGNIN_FAILURE,
    payload: error
    
})