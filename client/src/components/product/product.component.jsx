import React from "react"
import {connect} from "react-redux"
import {addItem} from "../../redux/cart/cart.actions"
import {withRouter} from "react-router-dom"

import "./product.styles.scss"

import CustomButton from "../custom-button/custom-button.component"
import StarRating from "../star-ratings/star-ratings.component"

//import CustomButton from "../../components/custom-button/custom-button.component"





const ProductComponent = ({item, addItem, history}) => {

   const {imageUrl, price, name} = item   //now we are getting those prop of item obj passed from the preview collection
   
    console.log((item))
    return (
      <div className = "product-page">
        <div className = "image-container" >
          <img src= {`${imageUrl}`} alt= {`${name}`} className = "main-image" />
        </div>
        <div className = "details-container" >
          <span className = "name"  >{name}</span>
          <div className= "star-box">
            <StarRating ></StarRating>
          </div> 
          <span className = "price" > ${price}</span>
          <CustomButton className = "button-addToCart"
          onClick = {() => addItem(item)} >Add to Cart</CustomButton>
          <CustomButton className = "button-buyNow"
            onClick = {() => {
            addItem(item)
            history.push("/checkout")
            } } >Buy Now</CustomButton>
        </div>
        

      </div>
      

  
 
    )}
    ;
  
  const mapDispatchToProps = dispatch =>  ({
    addItem: item => dispatch(addItem(item)  )  //why we have the additem on onclick event, if we have that here.
  
  })
  

export default withRouter(connect(null, mapDispatchToProps)(ProductComponent))