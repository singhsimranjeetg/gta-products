import React from "react"
import "./cart-dropdown.styles.scss"
import {connect} from "react-redux"


import CustomButton from "../custom-button/custom-button.component"
import CartItem from "../cart-item/cart-item.component"
import {selectCartItems} from "../../redux/cart/cart.selector"
import {createStructuredSelector} from "reselect"
import {withRouter} from "react-router-dom"
import { toggleCartHidden } from "../../redux/cart/cart.actions"

const CartDropdown = ({cartItems, history, dispatch}) => (   //with mapsatetoprops we have access to dispatch method.
                                                            //that is equivalennt to mapdispatchtoprops
    <div className = "cart-dropdown">
        <div className = "cart-items">
            {
             cartItems.length ? 
                cartItems.map(cartItem => (
              <CartItem key = {cartItem.id} item = {cartItem} />
            ) ) 
            : <span className = 'empty-cart'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick = {() => {
                history.push("/checkout")
               dispatch(toggleCartHidden())  
            }} >Go to checkout</CustomButton>
           
           
           
        
    </div>
)
 //used mapStatetoprops bcz we need the sate here.
const mapStateToProps = createStructuredSelector({   //using selector for this
    cartItems: selectCartItems

})


export default withRouter(connect(mapStateToProps, null)(CartDropdown))

/* one way for checkout page routing
<CustomButton >
           <Link to = "/checkout">GO TO CHECKOUT</Link>
           </CustomButton>*/