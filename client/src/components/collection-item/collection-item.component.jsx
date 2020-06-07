import React from 'react';

import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component"
import {connect} from "react-redux"
import {addItem} from "../../redux/cart/cart.actions"
import { withRouter } from 'react-router-dom';
//import {Route} from "react-router-dom"
//


const CollectionItem = ({ item, addItem, history, match}) => {
  const {imageUrl, price, name, id} = item   //now we are getting those prop of item obj passed from the preview collection

  //console.log(match)
  return (
  <div className='collection-item' onClick = {() => history.push(`/product/${id}`)}>
    
    <div
      className='image' 
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      
    />
    
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>${price}</span>
    </div>
    <CustomButton inverted onClick = { () => addItem(item) } className = "custom-button"  >Add to cart</CustomButton>
    
  </div>
  
  )};

const mapDispatchToProps = dispatch =>  ({
  addItem: item => dispatch(addItem(item))    //why we have the additem on onclick event, if we have that here.

})

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem))