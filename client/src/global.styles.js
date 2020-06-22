import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`

body {   
    font-family: 'Tenali Ramakrishna', sans-serif;
    font-size: 20px;
    padding: 20px 30px;
    background-color: #FBF9F1;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
      
  }  
  
  a {
    text-decoration: none;
    color: black;
    
    
  }
  *{ 
    box-sizing: border-box;
    
  }
`