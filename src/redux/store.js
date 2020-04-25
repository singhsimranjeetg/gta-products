import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger"  //midleware fx after actions and before reducers, good foe ddebugging
import {persistStore} from "redux-persist"

import rootReducer from "./root-reducer"

const middlewares = [logger] //we might pass only the logger to the applymiddle but as it can take multiple
//parameters, we wanna spead all other obj we may add later on in the middlewares array

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

//creating the persisted version of our store.
export const persistor =  persistStore(store)

export default {store, persistor}  //we will pass this to the provider in the index.js file.
 