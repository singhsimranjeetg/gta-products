import React from "react"
import {connect} from "react-redux"
import {addItem} from "../../redux/cart/cart.actions"
import {withRouter} from "react-router-dom"

import {ProductPageContainer ,ProductContainer, ImageContainer, DetailsContainer, CtaContainer} from "./product.styles"

import CustomButton from "../custom-button/custom-button.component"

const ProductComponent = ({item, addItem, history}) => {

   const {imageUrl, price, name} = item   //now we are getting those prop of item obj passed from the preview collection
   
    //console.log((item))
    return (
    <ProductPageContainer>
      <ProductContainer>
        <ImageContainer >
          <img src= {`${imageUrl}`} alt= {`${name}`} />
        </ImageContainer>


        <DetailsContainer>
          <h2 className = "name">{name}</h2>
           
          <span className = "price"> ${price}</span>
          </DetailsContainer>
          </ProductContainer>

        <CtaContainer>
          <CustomButton
          onClick = {() => addItem(item)} >Add to Cart</CustomButton>
          <CustomButton className = "bn" 
            onClick = {() => {
            addItem(item)
            history.push("/checkout")
            } } >Buy Now</CustomButton>
        </CtaContainer>
    </ProductPageContainer>
        
        

      
      

  
 
    )}
    ;
  
  const mapDispatchToProps = dispatch =>  ({
    addItem: item => dispatch(addItem(item)  )  //why we have the additem on onclick event, if we have that here.
  
  })
  

export default withRouter(connect(null, mapDispatchToProps)(ProductComponent))