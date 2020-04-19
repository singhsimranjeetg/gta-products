//parent reducer that store the parent state of the app
//all other reducer will go into this reducer 

import {combineReducers} from "redux" //combinereducers is a function that we need to collect all reducers here.
import userReducer from "./user/user-reducer"

export default combineReducers({
    user: userReducer,
})
//so the combine reducer is that parent obj of all other reducers and it stores the final state of the app

