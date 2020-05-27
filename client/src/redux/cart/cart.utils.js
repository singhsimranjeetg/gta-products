

export const addItemsToCart = (cartItems, cartItemsToAdd) => {    //gonaa look in cart items array to see if cartItemstoadd already exists
//cartItem to add is our actoin payload for the cart rreducer
    const existingCartItems = cartItems.find(     //it will return the first cartItems whose id matches the id of cartitem we wanna add
        cartItems => cartItems.id === cartItemsToAdd.id    //if true it will set that item to the existingcartitem const, it not found it will be undefined
    )
//if there is item already exists in the cartItems then increase its quantity by one
    if (existingCartItems){  //if that iten already exists in cartItems
        return cartItems.map(cartItem =>        //map will return us new array and we need that in order to make comp render properly
            cartItem.id === cartItemsToAdd.id   //if that cartItemtoadd exisits
            ? ({...cartItem, quantity: cartItem.quantity + 1})
            :
            cartItem
            )          

    } //if that item doesnt exists, we wanna add that to a new array which also has new item.
    return [...cartItems, {...cartItemsToAdd, quantity: 1}]  //i think we are setting the quantity prop of cartItems to 1

}

 export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find( cartItem => 
     cartItem.id === cartItemToRemove.id)  //will return which are already in cart

     //dont want to remove item if with left arrow 
/*
if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
}*/   

if(existingCartItem.quantity === 1){    //
    return cartItems.map(cartItem => cartItem)
}

return cartItems.map(cartItem =>
    cartItem.id ===cartItemToRemove.id 
    ? {...cartItem, quantity: cartItem.quantity -1}
    : cartItem
)
}

