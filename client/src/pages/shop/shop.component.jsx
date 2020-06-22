import React, {useEffect, lazy, Suspense} from "react"

import "./shop.styles.scss"

import { Route } from "react-router-dom"
import {connect} from "react-redux"

import {fetchCollectionsStart} from "../../redux/shop/shop.actions"

import Spinner from "../../components/spinner/spinner.component"
import ErrorBoundary from "../../components/error-boundary/error-boundary.component"



const CollectionPageContainer = lazy( () => import('../../components/collectionPage/collectionPage.container') )
const ShopPageWithSearch = lazy( () => import('../../components/search/search.component') )

const ShopPage = ({fetchCollectionsStart, match}) =>  {

   useEffect(() => {
      fetchCollectionsStart()
   },[fetchCollectionsStart])
      //console.log(match)
     // throw Error
      return(  
           
         <div className = "shop-page">
         <ErrorBoundary>
         <Suspense fallback = {<Spinner />} >
            <Route exact path = {`${match.path}`} component = {ShopPageWithSearch}  />      
            <Route path = {`${match.path}/:categoryId`} component = {CollectionPageContainer} />  
         </Suspense> 
         </ErrorBoundary>       
         </div>
          )  }


const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart : () => dispatch(fetchCollectionsStart())
})



 export default connect(null, mapDispatchToProps) (ShopPage)

 //*  <Route exact path = {`${match.path}`} component = {CollectionsOverviewContainer}  />
 /*componentDidMount(){
   const {fetchCollectionsStart} = this.props
   fetchCollectionsStart()
}
   render() { 
      
      //if collection is null, seletor pass false, so we wanna pass true to withspiiner to start spinning, otherwise false if collecton is object
   } 
      
      */
 
 