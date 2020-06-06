import React from 'react';
import { Zoom } from 'react-slideshow-image';
import "./imageSlideshow.styles.scss"
 
const images = [
  'https://images.unsplash.com/reserve/tdedkQnQGCgIhk9eoEkP_DSC_0983.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60.jpg',
  'https://images.unsplash.com/29/night-square.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60.jpg',
  'https://images.unsplash.com/photo-1430132594682-16e1185b17c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60.jpg',
 
];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
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