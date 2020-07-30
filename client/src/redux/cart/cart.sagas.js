import { put, call, all, takeLatest, select } from "redux-saga/effects"
import {userActionTypes} from "../user/user.types"
import {clearEntireCart, setCartFromFirebase} from "./cart.actions"
import {selectCartItems} from "./cart.selector"
import {selectCurrentUser} from "../user/user.selectors"
import {getUserCartRef} from "../../firebase/firebase.utils"

import { cartActionTypes } from "./cart.types"
//saga to clear all cart items


/////////////////////////////////////////////////////////////////////////
///////SAGA TO CLEAR CART ITEMS START ######
function *clearAllCartOnSignOut(){
 //yield console.log("fbdbfd")
 yield put(clearEntireCart())
}

function *clearAllCartItems(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearAllCartOnSignOut)
}

/////////////////////////////////////////////////////////////////////////
///////SAGA TO CLEAR CART ITEMS ENDS ******

export function* updateCartInFirebase() {
    const currentUser = yield select(selectCurrentUser);
    if (currentUser) {
      try {
        const cartRef = yield getUserCartRef(currentUser.id);
        const ItemsInCart = yield select(selectCartItems);
        yield cartRef.update({ ItemsInCart});
      } catch (error) {
        console.log(error);
      }
    }
  }

export function* checkCartFromFirebase({ payload: Currentuser }) {
    const cartRef = yield getUserCartRef(Currentuser.id);
    console.log(Currentuser)
    console.log(cartRef)
    const cartSnapshot = yield cartRef.get();
    console.log(cartSnapshot)
    //if(!cartSnapshot.data().ItemsInCart) return
    yield put(setCartFromFirebase(cartSnapshot.data().ItemsInCart));
  }

export function* onUserSignIn() {
    yield takeLatest(userActionTypes.SIGNIN_SUCCESS, checkCartFromFirebase);
  }
  
  export function* onCartChange() {
    yield takeLatest(
      [
        cartActionTypes.ADD_ITEM,
        cartActionTypes.REMOVE_ITEM,
        cartActionTypes.CLEAR_ITEM_FROM_CART
      ],
      updateCartInFirebase
    );
  }


export function *cartSagas(){
    yield all([
        call(clearAllCartItems),
        call(onCartChange),
        call(onUserSignIn)
                
    ])
}