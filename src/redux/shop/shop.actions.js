import {shopActionTypes} from "./shop.types"
//import  {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils"
/*
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
      const collectionRef = firestore.collection('collections');
      dispatch(fetchCollectionsStart()); //we are firing the function/action here
  
      collectionRef
        .get()
        .then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collectionsMap)); //value of collectionMap would be passed to action as payload.
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
  };*/

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})


export const fetchCollectionsFailure = errorMsg => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMsg
})


 





 //console.log(collecctionRef)
   /* using REST API to access data 
   fetch('https://firestore.googleapis.com/v1/projects/gtaproducts-db/databases/(default)/documents/collections').then(response => response.json()).then(collections => console.log(collections))
   this.setState({loading : false}) //this will give us an error because collections is null.*/

     //using the promises pattern



        /* observable pattern 
     collecctionRef.onSnapshot(async snapshot => { //onSnapShot tells whenever our collectionRef changes or comp renders for the first time, we want to get the data of collections
        //console.log(snapshot)
      const collectionsMap =  convertCollectionsSnapshotToMap(snapshot)
      //console.log(collectionsMap)
      updateCollections(collectionsMap)  //selector method to send the new state to redux
      this.setState({loading : false})
     } )  */ 
