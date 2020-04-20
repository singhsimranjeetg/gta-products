import React from "react"
import "./custom-button.styles.scss"

const CustomButton = ({children,isGoogleSignIn,inverted, ...otherProps}) => (  //rendering the google-signin class if we get isgoogle props from the custombutton 
    <button className = {`
     ${isGoogleSignIn ? "google-sign-in" : ""}
     ${inverted ? "inverted" : ""} custom-button `} {...otherProps}>
        {children}
    </button>

)

export default CustomButton

