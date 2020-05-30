import styled from "styled-components"
import {Link} from "react-router-dom"



export const HeadereContainer = styled.div `
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;       
background-color: #1fad66;  


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
      margin-right: 15px;    
 


`
export const OptionLink = styled(Link) `
        padding: 10px 15px;
        cursor: pointer;
        &:hover {
                 
                 //font-weight: bold;
                 color : white;   //added by me all styles 
                 transition: all .3s;
               //  text-decoration: wavy;
               }

`
/*

export const OptionDiv = styled.div `
 ${OptionContainerStyles}
`


export const OptionContainerStyles = css`
        padding: 10px 15px;
        cursor: pointer;

`*/