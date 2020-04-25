import React from "react"

import "./checkout-item.styles.scss"
import {connect} from "react-redux"
import {clearCartItem, removeItem, addItem} from "../../redux/cart/cart.actions"

const CheckoutItem = ({cartItem, clearItemFromCart, addItem, removeItem}) => {
    const {name, imageUrl, price, quantity} = cartItem  //if we destructure cartItem above, we dont have clearItem properties
    return (
    <div className = "checkout-item">
        <div className = "image-container">
            <img src= {imageUrl} alt="item"/>
            </div>
            <span className = "name">{name}</span>
            <span className = "quantity">
               <div className = "arrow" onClick = { () => removeItem(cartItem) }>&#10094;</div> 
                  <div className = "value">{quantity}</div>
                <div className = "arrow" onClick = { () => addItem(cartItem)}>&#10095;</div> 
                </span>
            <span className = "price">${price}</span>
            <div className = "remove-button" onClick = {
                () => clearItemFromCart(cartItem)}>&#10005;</div>
           
        
    </div>

)}

const mapDispatchToProps = dispatch => ({
    clearItemFromCart: item => dispatch(clearCartItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)