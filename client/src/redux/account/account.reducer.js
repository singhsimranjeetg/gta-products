import { accountActionTypes } from './account.types';

const INITIAL_STATE = {
  accountDetails: null,
  orders: []
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case accountActionTypes.GET_ACCOUNT:
      return {
        ...state,
        accountDetails: action.payload
      };
    case accountActionTypes.CREATE_ORDER_START:
      return {
        ...state,
        orders: []
      };
    case accountActionTypes.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        orders: action.payload
      };
    case accountActionTypes.CREATE_ORDER_FAILED:
      return {
        ...state,
        orders: []
      };

    default:
      return state;
  }
};

export default accountReducer;
