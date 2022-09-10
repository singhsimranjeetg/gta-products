import { accountActionTypes } from './account.types';

const INITIAL_STATE = {
  accountDetails: null,
  orders: [],
};

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case accountActionTypes.GET_ACCOUNT:
      return {
        ...state, //we are not touching the other prop of initial state
        accountDetails: action.payload,
      };
    case accountActionTypes.CREATE_ORDER:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export default accountReducer;
