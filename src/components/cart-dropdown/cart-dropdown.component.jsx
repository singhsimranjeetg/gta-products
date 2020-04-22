import React from "react"
import "./cart-dropdown.styles.scss"
import {connect} from "react-redux"

import CustomButton from "../custom-button/custom-button.component"
import CartItem from "../cart-item/cart-item.component"
import {selectCartItems} from "../../redux/cart/cart.selector"

const CartDropdown = ({cartItems}) => (
    <div className = "cart-dropdown">
        <div className = "cart-items">
            {cartItems.map(cartItem => (
              <CartItem key = {cartItem.id} item = {cartItem} />
            ) )}
            
            </div>
           <CustomButton>GO TO CHECKOUT</CustomButton>
        
    </div>
)
 //used mapStatetoprops bcz we need the sate here.
const mapStateToProps = (state) =>  ({   //using selector for this
    cartItems: selectCartItems(state)

})


export default connect(mapStateToProps, null)(CartDropdown)