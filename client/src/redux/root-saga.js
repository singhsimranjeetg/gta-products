import { call, all } from 'redux-saga/effects';

import { shopSaga } from './shop/shop.saga';

import { userSagas } from './user/user.sagas';

import { cartSagas } from './cart/cart.sagas';

import { accountSagas } from './account/account.sagas';

export function* rootSaga() {
  yield all([
    call(shopSaga),
    call(userSagas),
    call(cartSagas),
    call(accountSagas),
  ]);
}
