import styled from "styled-components"
import {Link} from "react-router-dom"



export const HeadereContainer = styled.div `
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;       //margin bottom push content 25 px down from the header
background-color: #1fad66;  //added by me


`
export const LogoContainer = styled(Link)`
height: 100%;
      width: 70px;
      padding: 15px;
`

export const OptionsContainer = styled.div `
width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 15px;     //added by me
  //flex end means they are the right side of the screen


`
export const OptionLink = styled(Link) `
        padding: 10px 15px;
        cursor: pointer;
`
/*

export const OptionDiv = styled.div `
 ${OptionContainerStyles}
`


export const OptionContainerStyles = css`
        padding: 10px 15px;
        cursor: pointer;

`*/