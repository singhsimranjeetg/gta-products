import { accountActionTypes } from './account.types';

export const getAccount = () => ({
  type: accountActionTypes.GET_ACCOUNT,
});

export const createOrder = (item) => ({
  type: accountActionTypes.CREATE_ORDER,
  payload: item,
});

export const updateOrder = (item) => ({
  type: accountActionTypes.UPDATE_ORDER,
  payload: item,
});
