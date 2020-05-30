//because we gonna store data for our collection items here, 
//we need state mathod, so we are using class component here.

import React, {useEffect} from "react"
import "./shop.styles.scss"
//import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import { Route } from "react-router-dom"
//import CollectionPage1 from "../../components/collectionPage/collectionPage.component"

import {connect} from "react-redux"

import {fetchCollectionsStart} from "../../redux/shop/shop.actions"
//import CollectionsOverviewContainer from "../../components/collections-overview/collection-overview.container"
import CollectionPageContainer from "../../components/collectionPage/collectionPage.container"
import ShopPageWithSearch from "../../components/search/search.component"
//import collectionPageWithSearch from "../../components/collectionPageWithSearch/collectionPageWithSearch.component"

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
//const CollectionPage1WithSpninner = WithSpinner(CollectionPage1)




//class ShopPage extends React.Component{ dont need class component bcz no use of state here

const ShopPage = ({fetchCollectionsStart, match}) =>  {

/*componentDidMount(){
   const {fetchCollectionsStart} = this.props
   fetchCollectionsStart()
}
   render() { */
   useEffect(() => {
      fetchCollectionsStart()
   },[fetchCollectionsStart])
      
      return(     
         <div className = "shop-page">

           <Route exact path = {`${match.path}`} component = {ShopPageWithSearch}  />
          
            
            <Route path = {`${match.path}/:categoryId`} component = {CollectionPageContainer}/>      
         </div> )  //if collection is null, seletor pass false, so we wanna pass true to withspiiner to start spinning, otherwise false if collecton is object
   } 


 

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
})



 export default connect(null, mapDispatchToProps) (ShopPage)

 //*  <Route exact path = {`${match.path}`} component = {CollectionsOverviewContainer}  />*/