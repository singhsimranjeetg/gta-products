import {call, all } from "redux-saga/effects"

import {fetchCollectionsStart} from "./shop/shop.saga"

export function *rootSaga() {
   yield all([call(fetchCollectionsStart)])
}