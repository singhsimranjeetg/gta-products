

import {createSelector} from "reselect"



export const selectCart = state => state.cart   
 //input selector, access the cart obj from state

export const selectCartHidden = createSelector(
    [selectCart],
    cart=> cart.hidden
)


export const selectCartItems = createSelector(
    [selectCart] ,
    cart => cart.ItemsInCart
)


export const selectCartItemsCount = createSelector(
     [selectCartItems], 
    cartItems => cartItems.reduce((accumulatedQuantity, currentItemQuantity) =>
    accumulatedQuantity + currentItemQuantity.quantity, 0)
)

export const selectCartItemsTotalPrice = createSelector(
    [selectCartItems], 
    cartItems => cartItems.reduce((accumulatedTotalPrice, currentItem) =>
    accumulatedTotalPrice + (currentItem.price * currentItem.quantity), 0) 
)

/* */