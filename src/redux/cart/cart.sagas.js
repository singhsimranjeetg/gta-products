import { put, call, all, takeLatest } from "redux-saga/effects"
import {userActionTypes} from "../user/user.types"
import {clearEntireCart} from "./cart.actions"
//saga to clear all cart items

function *clearAllCartOnSignOut(){
 //yield console.log("fbdbfd")
 yield put(clearEntireCart())
}

function *clearAllCartItems(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearAllCartOnSignOut)
}



export function *cartSagas(){
    yield all([
        call(clearAllCartItems),
        
               
          
    ])
}