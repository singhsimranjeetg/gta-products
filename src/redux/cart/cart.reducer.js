import {cartActionTypes} from "./cart.types"
import {addItemsToCart} from "./cart.utils"

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,   //we are not touching the other prop of initial state
                hidden: !state.hidden,
                
            }
            case cartActionTypes.ADD_ITEM:
                return {
                    ...state,
                    cartItems: addItemsToCart(state.cartItems, action.payload) 
                    //cartItems: [...state.cartItems, action.payload]  //we are just passing all prev items in array
                    //and also unshifting the payload in it.
                }
            default:
                return state
    }
}

export default cartReducer