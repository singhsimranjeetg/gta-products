import React from 'react';
import { Zoom } from 'react-slideshow-image';
import "./imageSlideshow.styles.scss"

const images = [
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  

 
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