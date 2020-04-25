//parent reducer that store the parent state of the app
//all other reducer will go into this reducer 

import {combineReducers} from "redux" //combinereducers is a function that we need to collect all reducers here.
import userReducer from "./user/user-reducer"
import cartReducer from "./cart/cart.reducer"
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage" //telling it to use local storage

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"] //here we can provide all the reducers we wanna persist or store.
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)

