import React from "react"
import "./checkout.styles.scss"


//import {createStructuredSelector} from "reselect"
import {selectCartItems, selectCartItemsTotalPrice} from "../../../redux/cart/cart.selector"
import {connect} from "react-redux"
import CheckoutItem from "../../../components/checkout-item/checkout-item.component";



 const Checkout = ({cartItems, total}) => (
    <div className = "checkout-page">
        <div className = "checkout-header">
            
             <div className = "header-block">
            <span>Product</span>
             </div>

             <div className = "header-block">
            <span>Description</span>
             </div>

             <div className = "header-block">
            <span>Quantity</span>
             </div>

             <div className = "header-block">
            <span>Price</span>
             </div>

             <div className = "header-block">
            <span>Remove</span>
             </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key = {cartItem.id} cartItem = {cartItem}/>
            ))
        }
        
         <div className = "total">
             <span>TOTAL: ${total}</span>
         </div>
    </div>    

        );

 const mapStateToProps = state => ({
     cartItems: selectCartItems(state),
     total: selectCartItemsTotalPrice(state)
     
 });

 export default connect(mapStateToProps)(Checkout)

