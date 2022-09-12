import { takeLatest, call, put, all } from 'redux-saga/effects'; //listens for every action of specific type
import { shopActionTypes } from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailed } from './shop.actions';
import { convertCollectionsSnapshotToMap, firestore } from '../../utils/firebase/firebase.utils';

export function* fetchCollectionsAsync() {
  //  yield console.log("heloobgooo")}

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get(); //this is raw data retrived from our db
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot); //effect that takes 1st arguement as function and subs are the paramerters we wanna pass
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailed(error.message)); //dispatches an object
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
