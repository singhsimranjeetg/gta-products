import { put, call, all, takeLatest, select } from 'redux-saga/effects';
import { userActionTypes } from '../user/user.types';
import { clearEntireCart, setCartFromFirebase, updateCartInFirebase } from './cart.actions';
import { selectCartItems } from './cart.selector';
import { selectCurrentUser } from '../user/user.selectors';
import { getUserCartRef } from './cart.utils';
import { accountActionTypes } from '../account/account.types';

import { cartActionTypes } from './cart.types';
//saga to clear all cart items

/////////////////////////////////////////////////////////////////////////
///////SAGA TO CLEAR CART ITEMS START ######
function* clearAllCartOnSignOut() {
  //yield console.log("fbdbfd")
  yield put(clearEntireCart());
}

function* clearAllCartItems() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearAllCartOnSignOut);
}

/////////////////////////////////////////////////////////////////////////
///////SAGA TO CLEAR CART ITEMS ENDS ******

export function* updateCartInFirebaseAsync() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const ItemsInCart = yield select(selectCartItems);
      yield cartRef.update({ ItemsInCart });
      yield put(updateCartInFirebase());
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: Currentuser }) {
  const cartRef = yield getUserCartRef(Currentuser.id);
  const cartSnapshot = yield cartRef.get();
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
      cartActionTypes.CLEAR_ITEM_FROM_CART,
      accountActionTypes.CREATE_ORDER_SUCCESS
    ],
    updateCartInFirebaseAsync
  );
}

export function* cartSagas() {
  yield all([call(clearAllCartItems), call(onCartChange), call(onUserSignIn)]);
}
