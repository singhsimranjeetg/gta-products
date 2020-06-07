import React, {useEffect} from "react"
import {connect} from "react-redux"
import {addItem} from "../../redux/cart/cart.actions"
//import "./product.styles.scss"
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector"
import { withRouter } from "react-router-dom"
import { fetchCollectionsStart } from "../../redux/shop/shop.actions"
import ProductComponent from "../../components/product/product.component"



const ProductPage = ({fetchCollectionsStartNow,collection, match}) => {

    useEffect(() => {
        fetchCollectionsStartNow()
     },[fetchCollectionsStartNow])

     
        
         const productid =  match.params.productId 
         console.log(productid)  
        const item1 = collection.map(item => item.items.find(item2 => item2.id == productid ))
        const item3 = item1.filter(item =>  item !== undefined)
        // const finalItem = item1.map(item => item.find(item2 => item2.id === 24))
         console.log(item1)
         
        console.log(item3)
       //  console.log(finalItem)
         console.log(collection) 
      
return(
    <div className='collection-item'> 
    <h1>HELLO !!!!</h1>
    {
               item3.map(item => (
                   <ProductComponent key = {item.id} item = {item} />
               ))
           }
    
    </div>
    
)
}

const mapStateToProps = state => ({
    collection : selectCollectionsForPreview(state)
})

const mapDispatchToProps = dispatch =>  ({
    addItem: item => dispatch(addItem(item)),    //why we have the additem on onclick event, if we have that here.  
    fetchCollectionsStartNow: () => dispatch(fetchCollectionsStart()) 
  
  })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPage))


/* 
{
               item3.map(item => (
                   <ProductComponent key = {item.id} item = {item} />
               ))
           }
*/