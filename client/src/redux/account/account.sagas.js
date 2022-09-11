import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import { accountActionTypes } from './account.types';
import { createOrderSuccess, createOrderFailed, getOrdersSuccess } from './account.actions';
import { createNewOrder, getUserOrdersRef } from './account.utils';
import { selectCurrentUser } from '../user/user.selectors';

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

export function* getOrdersAsync() {
  const currentUser = yield select(selectCurrentUser);
  const ordersRef = yield getUserOrdersRef(currentUser.id);
  const ordersSnapshot = yield ordersRef.get();
  yield put(getOrdersSuccess(ordersSnapshot.data()));
}

export function* getOrders() {
  yield takeLatest(accountActionTypes.GET_ORDERS_START, getOrdersAsync);
}

export function* accountSagas() {
  yield all([call(createOrder), call(getOrders)]);
}
