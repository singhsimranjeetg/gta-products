import styled from "styled-components"
//import {Link} from "react-router-dom"



export const FooterContainer = styled.div `

display: flex; 
justify-content: space-between;     
background-color: #aaaaaa;
padding: 50px ;
text-align: center;
margin-top: 50px;



@media screen and (max-width: 900px) {
    padding: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

`
export const LogoContainer = styled.div`
      flex: 0 0 10%;

      @media screen and (max-width: 900px) {
          order: 0;
            
        }
`

export const OptionsContainer = styled.ul `
      flex: 0 0 40%;
      display: flex;
      list-style: none;
      padding: 0;
      margin-top: -5px;

                
      @media screen and (max-width: 900px) {
          order: 1;
          margin: 0;
            
        }

        @media screen and (max-width: 570px) {
            display: inline
          
        }
 


`
export const OptionLink = styled.li `
        padding: 5px;
        cursor: pointer;
        text-transform: uppercase;
        
        
        &:hover a {
            color: #fff;
            transform: scale(1.1);
            transition: all .3s;
        } 

        @media screen and (max-width: 900px) {
            padding: 8px;
        }

        @media screen and (max-width: 570px) {
            padding: 0;

        }
                     

`

export const FooterCopyright = styled.div `
      flex: 0 0 35%;
      

      @media screen and (max-width: 900px) {
            order: 2;
            padding: 1rem;
        }
`