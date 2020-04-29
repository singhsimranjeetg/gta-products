//because we gonna store data for our collection items here, 
//we need state mathod, so we are using class component here.

import React from "react"
import "./shop.styles.scss"
import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import { Route } from "react-router-dom"
import CollectionPage1 from "../../components/collectionPage/collectionPage.component"

//class ShopPage extends React.Component{ dont need class component bcz no use of state here

const ShopPage = ({match}) => {
    //console.log(props)
              return(  
            
            <div className = "shop-page">
               <Route exact path = {`${match.path}`} component={CollectionsOverview} />
               <Route path = {`${match.path}/:categoryId`} component = {CollectionPage1}    />     
            </div> )
}    

 export default (ShopPage)
