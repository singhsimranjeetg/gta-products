import {call, all } from "redux-saga/effects"

import {fetchCollectionsStart} from "./shop/shop.saga"

import { userSagas} from "./user/user.sagas"

import {cartSagas} from "./cart/cart.sagas"

export function *rootSaga() {
   yield all([
       call(fetchCollectionsStart),
       call(userSagas),
       call(cartSagas)
 ])
}