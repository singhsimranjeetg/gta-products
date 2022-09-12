import { shopActionTypes, collection } from './shop.types';

import {
  createAction,
  Action,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

export type fetchCollectionsStart =
  Action<shopActionTypes.FETCH_COLLECTIONS_START>;

export type fetchCollectionsSuccess = ActionWithPayload<
  shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  collection[]
>;

export type fetchCollectionsFailed = ActionWithPayload<
  shopActionTypes.FETCH_COLLECTIONS_FAILED,
  Error
>;

export const fetchCollectionsStart = withMatcher(() =>
  createAction(shopActionTypes.FETCH_COLLECTIONS_START)
);

export const fetchCollectionsSuccess = withMatcher(
  (categoriesArray: collection[]) =>
    createAction(
      shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
      categoriesArray
    )
);

export const fetchCollectionsFailed = withMatcher((error: Error) =>
  createAction(shopActionTypes.FETCH_COLLECTIONS_FAILED, error)
);