import { shopActionTypes, collection } from './shop.types';
import {AnyAction } from 'redux'

export type collectionsState = {
  readonly collections: collection[];
  readonly isFetching: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: collectionsState = {
  collections: [],
  isFetching: false,
  error: null,
};

const shopReducer = (state = INITIAL_STATE, action = {} as AnyAction ) : collectionsState => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case shopActionTypes.FETCH_COLLECTIONS_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
