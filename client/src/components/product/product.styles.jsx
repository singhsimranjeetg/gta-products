import styled from "styled-components"
//import {Link} from "react-router-dom"



export const ProductPageContainer = styled.div `


@media screen and (max-width: 900px) {
    
  }`


export const ProductContainer = styled.div `

display: flex; 
justify-content: space-between;     
text-align: left;

@media screen and (max-width: 600px) {
    flex-direction: column;
    
    
  }

`
export const ImageContainer = styled.div`
      flex: 1 0 40%;
      
      
      

      @media screen and (max-width: 600px) {
         
          
            
        }
`

export const DetailsContainer = styled.div `
      flex: 1 1 40%;
      display: flex;
      flex-direction: column;

      .name {
          font-weight: 100;
          font-size: 40px;
          display: inline-block;
      }

      .price {
          display: block;
          font-size: 30px;
          color: orangered;
          margin-top: -40px;
      }
      

                
      @media screen and (max-width: 900px) {
          
            
        }

        @media screen and (max-width: 570px) {
            
          
        }
 


`
export const CtaContainer = styled.div `
        padding: 5px;
        cursor: pointer;
        text-transform: uppercase;
        

        button {
            margin-bottom: 10px;
        }

        .bn {
            background-color: orangered;
        }
        
        
        

        @media screen and (max-width: 900px) {
            
        }

        @media screen and (max-width: 570px) {
            

        }
                     

`