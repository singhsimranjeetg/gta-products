import React from 'react';
import { Zoom } from 'react-slideshow-image';
import "./imageSlideshow.styles.scss"

const images = [
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  "https://www.geburtszeit.com/wp-content/uploads/2018/11/cecbe6fc3cb504ede43c50f38f21f328.jpeg"
  

 
];
 
const zoomOutProperties = {
  duration: 15000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false,
  scale: 0.4,
  arrows: false,
  pauseOnHover: true,
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} alt = {"gta-products"} style={{width: "100%", height: "300px"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}

export default Slideshow