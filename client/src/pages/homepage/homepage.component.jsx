import React, {Profiler} from 'react';


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
      <Profiler id = "Directory and Slideshow" onRender = {(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration
        })
      }}>
      
      <Directory />
      
      </Profiler>
      
      

    </HomePageStyle>
    
    
  )

}



export default HomePage;