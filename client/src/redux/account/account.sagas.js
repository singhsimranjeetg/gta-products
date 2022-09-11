import { takeLatest, put, call, all } from 'redux-saga/effects';
import { accountActionTypes } from './account.types';
import { createOrderSuccess, createOrderFailed } from './account.actions';
import { createNewOrder } from './account.utils';

//EMAIL LOGIN SAGA
export function* createOrderAsync({ payload: { currentUser, cartItems, orderDetails } }) {
  try {
    console.log('hello', cartItems);
    const orderRef = yield call(createNewOrder, currentUser, cartItems, orderDetails);
    const orderSnapshot = yield orderRef.get();
    console.log('data', orderSnapshot.data());
    // yield put(SignInSuccess({ id : orderSnapshot.id, ...orderSnapshot.data()}))
    yield put(createOrderSuccess({ id: orderSnapshot.id, ...orderSnapshot.data() }));
  } catch (error) {
    yield put(createOrderFailed(error));
  }
}

function* createOrder() {
  yield takeLatest(accountActionTypes.CREATE_ORDER_START, createOrderAsync);
}

export function* accountSagas() {
  yield all([call(createOrder)]);
}
