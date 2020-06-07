import React from "react"
import {connect} from "react-redux"
import {addItem} from "../../redux/cart/cart.actions"
import "./product.styles.scss"

import CustomButton from "../../components/custom-button/custom-button.component"





const ProductComponent = ({item}) => {

    const {name, price, imageUrl} = item
return(
    <div className='collection-item'>
    
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
)

}

const mapDispatchToProps = dispatch =>  ({
    addItem: item => dispatch(addItem(item))    //why we have the additem on onclick event, if we have that here.
  
  })

export default connect(null, mapDispatchToProps)(ProductComponent)