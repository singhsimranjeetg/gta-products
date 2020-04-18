import React from "react"
import "./custom-button.styles.scss"

const CustomButton = ({children,isGoogleSignIn, ...otherProps}) => (  //rendering the google-signin class if we get isgoogle props from the custombutton 
    <button className = {`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}  `} {...otherProps}>
        {children}
    </button>

)

export default CustomButton