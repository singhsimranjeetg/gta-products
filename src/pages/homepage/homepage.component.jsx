import React from 'react';


//import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component"
import {HomePageStyle} from "./homepage.styles"

//homepage - whole window object 
//directory menu 

const HomePage = () => (
  <HomePageStyle>
    <Directory />
  </HomePageStyle>
  
);

export default HomePage;