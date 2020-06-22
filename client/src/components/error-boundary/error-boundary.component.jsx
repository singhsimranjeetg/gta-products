import React from "react"
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from "./error-boundary.styles"
 


class ErrorBoundary extends React.Component {
    constructor(){
        super()
        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(error) {
        //process the errror
        return {
            hasError : true
        }
    }
    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }
    
    render(){
        if(this.state.hasError){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl = 'https://i.imgur.com/yW2W9SC.png'  />
                    <ErrorImageText>Sorry, this page is broken.<br></br>Please, reload the page.</ErrorImageText> 
                </ErrorImageOverlay>
            )
        }
        return this.props.children

    }
    

}

export default ErrorBoundary