import {cartActionTypes} from "./cart.types"
//import {userActionTypes} from "../user/user.types"
import {addItemsToCart, removeItemFromCart} from "./cart.utils"

const INITIAL_STATE = {
    hidden: true,
    ItemsInCart : []
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
                    ItemsInCart: addItemsToCart(state.ItemsInCart, action.payload) 
                    //cartItems: [...state.cartItems, action.payload]  //we are just passing all prev items in array
                    //and also unshifting the payload in it.
                }

            case cartActionTypes.CLEAR_ITEM_FROM_CART: 
             return {
                 ...state,  //speading everything else in our state 
                 ItemsInCart: state.ItemsInCart.filter(
                     cartItem => cartItem.id !== action.payload.id  //if any cartItem id matches the item in the payload , filter it out
                     //filter will only return the items which pass this condition
                 )
             }

             case cartActionTypes.REMOVE_ITEM:
                 return {
                     ...state,
                     ItemsInCart: removeItemFromCart(state.ItemsInCart, action.payload)
                 }
                 case cartActionTypes.CLEAR_ALL_CART_ITEMS:
                 return {
                     ...state,
                     ItemsInCart: []
                 }
                 
            default:
                return state
    }
}

export default cartReducer