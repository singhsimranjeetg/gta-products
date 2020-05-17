import {call, all } from "redux-saga/effects"

import {fetchCollectionsStart} from "./shop/shop.saga"

import { userSagas} from "./user/user.sagas"

export function *rootSaga() {
   yield all([
       call(fetchCollectionsStart),
       call(userSagas)
 ])
}