import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger"  //midleware fx after actions and before reducers, good foe ddebugging
import {persistStore} from "redux-persist"

import rootReducer from "./root-reducer"
//import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"
import {rootSaga} from "./root-saga"


const sagaMiddleware =createSagaMiddleware() //can take an obj with some conf. setting, but we dont need
const middlewares = [logger, sagaMiddleware ] //we might pass only the logger to the applymiddle but as it can take multiple
//parameters, we wanna spead all other obj we may add later on in the middlewares array


//we will enable this if we dont want logger to show up in production
 /*
 if(process.env.NODE_ENV === "development"){
     middlewares.push(logger)
 } //can also be test,production
*/



export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)
//creating the persisted version of our store.
export const persistor =  persistStore(store)

export default {store, persistor}  //we will pass this to the provider in the index.js file.
 