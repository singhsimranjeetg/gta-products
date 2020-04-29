import React from "react"
import "./collectionPage.styles.scss"
import CollectionItem from "../collection-item/collection-item.component"
import {selectCollections} from "../../redux/shop/shop.selector"
import {createStructuredSelector } from "reselect"
import {connect} from "react-redux"


const CollectionPage1 = ({match, collectionName}) => {
  console.log(match.params.categoryId) //this will return the shop item category like hats for the page we are one
 
  //const collectionItemToShow = collectionName.map(item => item.routeName)
 // const {title, items} = collectionItemToShow

 const matchItem = collectionName.find(({routeName}) => routeName === match.params.categoryId)
  
return(  //  <h1>{collectionName.map(item => item.routeName)}</h1>
    <div className = "collection-page">
        <h2 className = 'title'>Collection</h2>
        <div className = "items">
           {
               matchItem.items.map(item => (
                   <CollectionItem key = {item.id} item = {item} />
               ))
           }
        </div>
        

 

    </div>

)}

const mapStateToProps = createStructuredSelector({
    collectionName : selectCollections
})
export default connect(mapStateToProps)(CollectionPage1)