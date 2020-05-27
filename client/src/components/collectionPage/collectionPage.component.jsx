import React from "react"
import "./collectionPage.styles.scss"
import CollectionItem from "../collection-item/collection-item.component"
import {selectCollection} from "../../redux/shop/shop.selector"
//import {createStructuredSelector } from "reselect"
import {connect} from "react-redux"


const CollectionPage1 = ({collection}) => {
  //console.log(match.params.categoryId) //this will return the shop item category like hats for the page we are one
 
  //const collectionItemToShow = collectionName.map(item => item.routeName)
 // const {title, items} = collectionItemToShow

 //const matchItem = collectionName.find(({routeName}) => routeName === match.params.categoryId)
  const {title, items} = collection
return(  //  <h1>{collectionName.map(item => item.routeName)}</h1>
    <div className = "collection-page">
        <h2 className = 'title'>{title}</h2>
        <div className = "items">
           {
               items.map(item => (
                   <CollectionItem key = {item.id} item = {item} />
               ))
           }
        </div>
        

 

    </div>

)}

const mapStateToProps = (state,ownProps) => ({
    collection :selectCollection(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(CollectionPage1)