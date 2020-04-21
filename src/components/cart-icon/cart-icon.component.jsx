import React from "react"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping.bag.svg"
import "./cart-icon.styles.scss"
import {connect} from "react-redux" //we need this for using reducers
import {toggleCartHidden} from "../../redux/cart/cart.actions"

const CartIcon = ({toggleCartHidden, cartItems}) => (
    
    <div className = "cart-icon" onClick = {toggleCartHidden}>
        <ShoppingIcon className = "shopping-icon" />
        <span className = "item-count">{cartItems.length}</span>
    </div>
    
)
//with the dispatch(togglecarthiiden we are passing that action type to the cart reducer)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart : {cartItems}}) => ({
    cartItems
    
})

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon)

//we use mapDispatch we want to pass an action to the reducers,
//now the action type is togglecartHidden that will match the cart reducer
//the cart reducer then toggle it to the other boolean value.