import React from "react"
import "./header.styles.scss"
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {auth} from "../../firebase/firebase.utils"
import {connect} from "react-redux"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import {selectCartHidden } from "../../redux/cart/cart.selector"
import {selectCurrentUser } from "../../redux/user/user.selectors" 
import {createStructuredSelector} from 'reselect'



const Header = ({currentUser , hidden}) => (
    <div className = "header">
        <Link to = "/" className = "logo-container"> 
         <Logo className = "logo" />
         
           </Link>
        <div className = "options">

            <Link className = "option" to = "/" >HOME</Link>
            
            <Link className = "option" to = "/shop">
                SHOP
            </Link>
            <Link className = "option" to = "/contact">
                CONTACT
            </Link>
            {  //checking if there is object in currentUSer prop from app, then show sign out, if null then show sign in
                currentUser ?(
                <div className = "option" onClick = {() => auth.signOut()}>SIGN OUT</div>)

                :( <Link className = "option" to = "/signin">SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {
          hidden ? null : <CartDropdown />
        }
    </div>
) 
const mapSateToProps =  createStructuredSelector( {  //state is the root reducer obj, top level and below we will set a property.
    currentUser: selectCurrentUser,
    hidden: selectCartHidden //we are pointing to root reducer,then user reducer, then currentuser propp
    
})



//means if hidden is true, dont show anything, but if fasle show the cartdropf=down
//advance way to destructure, means form our parent state we need currentuser from user obj and hidden from the cart

//oteher way to using few selectors
/*
const mapSateToProps = (state) => ({    //state is the root reducer obj, top level and below we will set a property.
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state) //we are pointing to root reducer,then user reducer, then currentuser propp
    
})*/

export default connect(mapSateToProps)(Header)    //that null value set in the user reduccer will be passed in this 

//connect is also a higher oder comp. which get two arguements