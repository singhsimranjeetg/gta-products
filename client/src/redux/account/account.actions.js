import { accountActionTypes } from './account.types';

export const getAccount = () => ({
  type: accountActionTypes.GET_ACCOUNT
});

export const createOrderStart = (details) => ({
  type: accountActionTypes.CREATE_ORDER_START,
  payload: details
});

export const createOrderSuccess = (details) => ({
  type: accountActionTypes.CREATE_ORDER_SUCCESS,
  payload: details
});

export const createOrderFailed = (error) => ({
  type: accountActionTypes.CREATE_ORDER_FAILED
});

export const getOrdersStart = () => ({
  type: accountActionTypes.GET_ORDERS_START
});

export const getOrdersSuccess = (details) => ({
  type: accountActionTypes.GET_ORDERS_SUCCESS,
  payload: details
});

export const getOrdersFailed = (error) => ({
  type: accountActionTypes.GET_ORDERS_FAILED,
  payload: error
});

export const updateOrder = (item) => ({
  type: accountActionTypes.UPDATE_ORDER,
  payload: item
});
