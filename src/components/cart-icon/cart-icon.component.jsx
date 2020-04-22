import React from "react"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping.bag.svg"
import "./cart-icon.styles.scss"
import {connect} from "react-redux" //we need this for using reducers
import {toggleCartHidden} from "../../redux/cart/cart.actions"
import {selectCartItemsCount} from "../../redux/cart/cart.selector" 
import {createStructuredSelector} from "reselect"

const CartIcon = ({toggleCartHidden, itemCount}) => (
    
    <div className = "cart-icon" onClick = {toggleCartHidden}>
        <ShoppingIcon className = "shopping-icon" />
        <span className = "item-count">{itemCount}</span>
    </div>
    
)
//with the dispatch(togglecarthiiden we are passing that action type to the cart reducer)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())    //pushing the onclick on icon to the state
})

const mapStateToProps = createStructuredSelector({  //pulling state in to use to show cartItem length in cart icon
    itemCount: selectCartItemsCount           //second arguement is pulling the quantitiy prop off the cartItem array
    
})


//mathod used before selectors
/*
const mapStateToProps = ({cart : {cartItems}}) => {  
    //console.log("i got called form cart-icon")
    return { //pulling state in to use to show cartItem length in cart icon
    itemCount: cartItems.reduce((accumulatedQuantity, currentItemQuantity) =>
    accumulatedQuantity + currentItemQuantity.quantity, 0)   //second arguement is pulling the quantitiy prop off the cartItem array
    
} } *///here we can start new fx methods on the state and pass those to any element. 

export default connect(mapStateToProps, mapDispatchToProps) (CartIcon)

//we use mapDispatch we want to pass an action to the reducers,
//now the action type is togglecartHidden that will match the cart reducer
//the cart reducer then toggle it to the other boolean value.