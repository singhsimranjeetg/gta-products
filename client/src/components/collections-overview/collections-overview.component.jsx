import React from "react"
import "./collections-overview.styles.scss"

//import {connect} from "react-redux"
//import {createStructuredSelector} from 'reselect'
import PreviewCollection from "../preview-collection/preview-collection.component"
//import {selectCollectionsForPreview} from "../../redux/shop/shop.selector"


const CollectionsOverview = ({collections}) => (
    <div className = "collections-overview">
          {
             collections.map(({id, ...otherPreviewCollections}) => (  //object destructuring = accesing props of the collection object    
                        <PreviewCollection key = {id} {...otherPreviewCollections} />
                    ))
                    
                    }


    </div>
)/*
 const mapStateToProps = createStructuredSelector({
     collections: selectCollectionsForPreview
 })

export default connect(mapStateToProps)(CollectionsOverview)*/

export default CollectionsOverview