import {userActionTypes} from "./user.types"

export const setCurrentUser = user => ({  //so user is same obj as UserAuth or Users in the app.js
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})

export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGNIN_START,
    
})


export const SignInSuccess = (user) => ({
    type: userActionTypes.SIGNIN_SUCCESS,
    payload: user
    
})


export const SignInFailure = (error) => ({
    type: userActionTypes.SIGNIN_FAILURE,
    payload: error
    
})

export const emailSignInStart = (emailAndPassword) => ({
    type: userActionTypes.EMAIL_SIGNIN_START,
    payload: emailAndPassword
    
})

export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
})



export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload : error
})


export const signUpStart = (emailAndPassword) => ({
    type: userActionTypes.SIGNUP_START,
    payload: emailAndPassword
})

export const SignUpSuccess = ({user, additionalData}) => ({
    type: userActionTypes.SIGNUP_SUCCESS,
    payload: {user, additionalData}
    
    
})


export const SignUpFailure = (error) => ({
    type: userActionTypes.SIGNUP_FAILURE,
    payload: error
    
})



