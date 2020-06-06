import React from 'react';


//import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component"
import {HomePageStyle} from "./homepage.styles"
import Slideshow from "../../components/image-slideshow/imageSlideshow.component"

//homepage - whole window object 
//directory menu 

const HomePage = () => {
  return(
    <HomePageStyle>
      <Slideshow />
      <Directory />

    </HomePageStyle>
    
    
  )

}



export default HomePage;