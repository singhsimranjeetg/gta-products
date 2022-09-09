import React from "react"

import {signOutStart} from "../../redux/user/users.actions"
import {connect} from "react-redux"

 const AccountPage = ({signOutStart}) => (
    <div className = "checkout-page">
      Account Page
      <div onClick={signOutStart}>Sign out</div>
      <div >Orders</div>
      <div>Profile</div>
    </div>
 );



const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
 // clearAllCartItems: () => dispatch(clearAllCartItems())
})


export default connect(null, mapDispatchToProps)(AccountPage) 


