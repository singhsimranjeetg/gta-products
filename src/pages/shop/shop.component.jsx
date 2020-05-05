//because we gonna store data for our collection items here, 
//we need state mathod, so we are using class component here.

import React from "react"
import "./shop.styles.scss"
import CollectionsOverview from "../../components/collections-overview/collections-overview.component"
import { Route } from "react-router-dom"
import CollectionPage1 from "../../components/collectionPage/collectionPage.component"
//import SearchBox from "../../components/search/search.component"

import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils"
import {connect} from "react-redux"
import {updateCollections} from "../../redux/shop/shop.actions"


//class ShopPage extends React.Component{ dont need class component bcz no use of state here
class ShopPage extends React.Component {
 
  unsubscribeFromSnapshot = null;

  componentDidMount(){
     const {updateCollections} = this.props
     const collecctionRef = firestore.collection("collections")
     //console.log(collecctionRef)
     
     collecctionRef.onSnapshot(async snapshot => { //onSnapShot tells whenever our collectionRef changes or comp renders for the first time, we want to get the data of collections
        //console.log(snapshot)
      const collectionsMap =  convertCollectionsSnapshotToMap(snapshot)
      //console.log(collectionsMap)
      updateCollections(collectionsMap)
     } )     
  }
   render () {
       const {match} = this.props

      return(     
         <div className = "shop-page">
            <Route exact path = {`${match.path}`} component={CollectionsOverview} />
            <Route path = {`${match.path}/:categoryId`} component = {CollectionPage1}    />     
         </div> )
   }

} 

const mapDispatchToProps = dispatch => ({
   updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

 export default connect(null, mapDispatchToProps) (ShopPage)
