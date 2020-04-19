import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger"  //midleware fx after actions and before reducers, good foe ddebugging

import rootReducer from "./root-reducer"

const middlewares = [logger] //we might pass only the logger to the applymiddle but as it can take multiple
//parameters, we wanna spead all other obj we may add later on in the middlewares array

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store  //we will pass this to the provider in the index.js file.
 