//because we gonna store data for our collection items here, 
//we need state mathod, so we are using class component here.

import React from "react"
import "./shop.styles.scss"
import CollectionsOverview from "../../components/collections-overview/collections-overview.component"

//class ShopPage extends React.Component{ dont need class component bcz no use of state here

const ShopPage = () => (
                
            
            <div className = "shop-page">
                <CollectionsOverview />          
            </div> )
            

 export default (ShopPage)
