import {createSelector} from "reselect"



const selectCart = state => state.cart   //input selector, access the cart obj from state

export const selectCartHidden = createSelector(
    [selectCart],
    cart=> cart.hidden
)


export const selectCartItems = createSelector(
    [selectCart] ,
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cartItems => cartItems.reduce((accumulatedQuantity, currentItemQuantity) =>
    accumulatedQuantity + currentItemQuantity.quantity, 0) 
)
