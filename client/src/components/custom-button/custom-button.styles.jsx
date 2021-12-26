import styled, {css} from "styled-components"

export const getButtonStyles = (props) => {
    if(props.isGoogleSignIn){
        return googleSignInStyles 
    }
    return props.inverted ? invertedButtonStyles : buttonStyles
}

export const buttonStyles = css `
background-color: #1FAD66;
color: white;
border: none;

&:hover {
    background-color: #13d373;
    //color: black;
    border: 0.1px solid black;
  }

`

export const CustomButtonContainer = styled.button `

min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 1px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
text-transform: uppercase;
border-radius: 5px;
font-weight: bolder;
align-items:center;
cursor: pointer;
display: flex;
justify-content: center;

${getButtonStyles}  

`

export const invertedButtonStyles = css `
background-color: white;
color: black;
border: 1px solid black;
font-size: 1vw;

&:hover {
  background-color: #1FAD66;
  color: white;
 // border: none;
}
`

export const googleSignInStyles = css `
background-color: #4285f4;
color: white;
padding: 3px;
text-align: center;
border: 1px solid black;

&:hover {
  background-color: #357ae8;
  
}
`