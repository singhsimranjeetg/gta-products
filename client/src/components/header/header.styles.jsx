import styled from "styled-components"
import {Link} from "react-router-dom"



export const HeadereContainer = styled.div `
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;       
background-color:  #1fad66 ;  

@media screen and (max-width: 800px) {
      height: 60px;
      padding: 10px;
      margin-bottom: 20px;

  }

`
export const LogoContainer = styled(Link)`
      height: 100%;
      width: 70px;
      padding: 15px;

      @media screen and (max-width: 800px) {
            width: 50px;
            padding: 0px;
            //margin: 0px 0px 10px 0px;
        }
`

export const OptionsContainer = styled.div `
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 15px;  
      
      @media screen and (max-width: 800px) {
            width: 80%;
            margin-left: 30px;

        }
 


`
export const OptionLink = styled(Link) `
        padding: 10px 15px;
        cursor: pointer;

        @media screen and (max-width: 450px) {
            padding: 10px 5px;

        }

        &:hover {     
                 color : white;  
                 transition: all .3s; 
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