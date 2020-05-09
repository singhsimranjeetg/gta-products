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
import WithSpinner from "../../components/with-spinner/with-spinner.component"


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPage1WithSpninner = WithSpinner(CollectionPage1)




//class ShopPage extends React.Component{ dont need class component bcz no use of state here
class ShopPage extends React.Component {
   state = {
      loading : true
   }
 
  unsubscribeFromSnapshot = null;

  componentDidMount(){
     const {updateCollections} = this.props
     const collecctionRef = firestore.collection("collections")
     //console.log(collecctionRef)


   /* using REST API to access data 
   fetch('https://firestore.googleapis.com/v1/projects/gtaproducts-db/databases/(default)/documents/collections').then(response => response.json()).then(collections => console.log(collections))
   this.setState({loading : false}) //this will give us an error because collections is null.*/


     
     //using the promises pattern

   collecctionRef.get().then(( collectionData => { //get tells whenever our collectionRef changes or comp renders for the first time, we want to get the data of collections
      //console.log(snapshot)
    const collectionsMap =  convertCollectionsSnapshotToMap(collectionData)
    //console.log(collectionsMap)
    updateCollections(collectionsMap)  //selector method to send the new state to redux
    this.setState({loading : false})
   } ))



   /* observable pattern 
     collecctionRef.onSnapshot(async snapshot => { //onSnapShot tells whenever our collectionRef changes or comp renders for the first time, we want to get the data of collections
        //console.log(snapshot)
      const collectionsMap =  convertCollectionsSnapshotToMap(snapshot)
      //console.log(collectionsMap)
      updateCollections(collectionsMap)  //selector method to send the new state to redux
      this.setState({loading : false})
     } )  */   
  }
   render () {
       const {match} = this.props

      return(     
         <div className = "shop-page">
            <Route exact path = {`${match.path}`} render = {(props) => (
                <CollectionsOverviewWithSpinner isLoading = {this.state.loading} {...props} />)} />
            <Route path = {`${match.path}/:categoryId`} render = {(props) => (
                <CollectionPage1WithSpninner isLoading = {this.state.loading} {...props} /> )}/>      
         </div> )
   }

} 

const mapDispatchToProps = dispatch => ({
   updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
})

 export default connect(null, mapDispatchToProps) (ShopPage)
