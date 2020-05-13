//import React from "react"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCollctionFetching } from '../../redux/shop/shop.selector'
import WithSpinner from "../with-spinner/with-spinner.component"
import CollectionOverview from "./collections-overview.component"
import {compose} from "redux"

const mapStateToProps = createStructuredSelector({
    loading : selectCollctionFetching
})

 const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
    )(CollectionOverview)


export default CollectionOverviewContainer
