//because we gonna store data for our collection items here, 
//we need state mathod, so we are using class component here.

import React from "react"
import "./shop.styles.scss"
//import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import { Route } from "react-router-dom"
import CollectionPage1 from "../../components/collectionPage/collectionPage.component"
//import SearchBox from "../../components/search/search.component"
//import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils"
import {connect} from "react-redux"
import {createStructuredSelector} from 'reselect'
import { selectIsCollectionsLoaded} from "../../redux/shop/shop.selector"
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions"
//import {updateCollections} from "../../redux/shop/shop.actions"
import WithSpinner from "../../components/with-spinner/with-spinner.component"
import CollectionsOverviewContainer from "../../components/collections-overview/collection-overview.container"
import CollectionPageContainer from "../../components/collectionPage/collectionPage.container"

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPage1WithSpninner = WithSpinner(CollectionPage1)




//class ShopPage extends React.Component{ dont need class component bcz no use of state here

export class ShopPage extends React.Component  {

   componentDidMount(){
      const {fetchCollectionsStartAsync} = this.props
      fetchCollectionsStartAsync()
   }
   render() {
      const {match} = this.props
      return(     
         <div className = "shop-page">
            <Route exact path = {`${match.path}`} component = {CollectionsOverviewContainer}  />
            <Route path = {`${match.path}/:categoryId`} component = {CollectionPageContainer}/>      
         </div> )  //if collection is null, seletor pass false, so we wanna pass true to withspiiner to start spinning, otherwise false if collecton is object
   } 
}

 

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
})



 export default connect( mapDispatchToProps) (ShopPage)
