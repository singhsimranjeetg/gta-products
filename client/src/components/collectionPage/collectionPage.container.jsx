//import React from "react"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector'
import WithSpinner from "../with-spinner/with-spinner.component"
import CollectionPage1 from "./collectionPage.component"
import {compose} from "redux"

const mapStateToProps = createStructuredSelector({
    isLoading : state => !selectIsCollectionsLoaded(state)  //inverting 
})//we have to use same name "isLoading here to match the props passed to withSpinner comp"

 const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionPage1)


export default CollectionPageContainer
