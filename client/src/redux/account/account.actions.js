import { accountActionTypes } from './account.types';

export const getAccount = () => ({
  type: accountActionTypes.GET_ACCOUNT,
});

export const createOrderStart = (lineItemsAndOrderDetails) => ({
  type: accountActionTypes.CREATE_ORDER_START,
  payload: lineItemsAndOrderDetails,
});

export const createOrderSuccess = (order) => ({
  type: accountActionTypes.CREATE_ORDER_SUCCESS,
});

export const createOrderFailed = (error) => ({
  type: accountActionTypes.CREATE_ORDER_FAILED,
});

export const updateOrder = (item) => ({
  type: accountActionTypes.UPDATE_ORDER,
  payload: item,
});
