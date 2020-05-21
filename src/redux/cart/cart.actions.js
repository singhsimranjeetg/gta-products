import {cartActionTypes} from "./cart.types"

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
    
})
//we dont need payload in this case.

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const clearCartItem = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
})

export const clearEntireCart = () => ({
    type: cartActionTypes.CLEAR_ALL_CART_ITEMS,
  
})