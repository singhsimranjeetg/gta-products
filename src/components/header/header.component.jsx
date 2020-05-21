import React from "react"
//import {Link} from "react-router-dom" not using this bcz its used in the header.styles.jsx
import {ReactComponent as Logo} from "../../assets/crown.svg"
//import {auth} from "../../firebase/firebase.utils"
import {connect} from "react-redux"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import {selectCartHidden } from "../../redux/cart/cart.selector"
import {selectCurrentUser } from "../../redux/user/user.selectors" 
import {createStructuredSelector} from 'reselect'
import {LogoContainer, OptionLink,OptionsContainer, HeadereContainer} from "./header.styles"
import {signOutStart} from "../../redux/user/users.actions"
//import {clearEntireCart} from "../../redux/cart/cart.actions"



const Header = ({currentUser , hidden,signOutStart}) => (
    <HeadereContainer>
        <LogoContainer to = "/"> 
         <Logo className = "logo" />
         
           </LogoContainer>

        <OptionsContainer>

            <OptionLink to = "/" >HOME</OptionLink>
            
            <OptionLink  to = "/shop">
                SHOP
            </OptionLink>
            <OptionLink to = "/contact">
                CONTACT
            </OptionLink>
            {  //checking if there is object in currentUSer prop from app, then show sign out, if null then show sign in
                currentUser ?(
                <OptionLink as = "div" onClick = {signOutStart}>SIGN OUT</OptionLink>)

                :( <OptionLink to = "/signin">SIGN IN</OptionLink>)
            }
            <CartIcon />
        </OptionsContainer>
        {
          hidden ? null : <CartDropdown />
        }
    </HeadereContainer>
) 


const mapSateToProps =  createStructuredSelector( {  //state is the root reducer obj, top level and below we will set a property.
    currentUser: selectCurrentUser,
    hidden: selectCartHidden //we are pointing to root reducer,then user reducer, then currentuser propp
    
})


const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart()),
   // clearAllCartItems: () => dispatch(clearAllCartItems())
})


export default connect(mapSateToProps, mapDispatchToProps)(Header)    //that null value set in the user reduccer will be passed in this 

//connect is also a higher oder comp. which get two arguements
//means if hidden is true, dont show anything, but if fasle show the cartdropf=down
//advance way to destructure, means form our parent state we need currentuser from user obj and hidden from the cart

//oteher way to using few selectors
/*
const mapSateToProps = (state) => ({    //state is the root reducer obj, top level and below we will set a property.
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state) //we are pointing to root reducer,then user reducer, then currentuser propp
    
})*/