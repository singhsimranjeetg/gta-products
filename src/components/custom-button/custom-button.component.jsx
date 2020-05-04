import React from "react"
import {CustomButtonContainer} from "./custom-button.styles"

const CustomButton = ({children, ...props}) => (  //rendering the google-signin class if we get isgoogle props from the custombutton 
    <CustomButtonContainer {...props} >
        {children}
    </CustomButtonContainer>

)

export default CustomButton

