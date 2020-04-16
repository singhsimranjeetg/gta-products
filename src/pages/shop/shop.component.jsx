//because we gonna store data for our collection items here, 
//we need state mathod, so we are using class component here.

import React from "react"
import "./shop.styles.scss"
import SHOP_DATA from "./shop.data"
import PreviewCollection from "../../components/preview-collection/preview-collection.component"

class ShopPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            collections: SHOP_DATA

        }  
        }

        render() {
            const {collections} = this.state    //means collections = this.state.collections
            return (
            <div className = "shop-page">
                {
                    collections.map(({id, ...otherPreviewCollections}) => (  //object destructuring = accesing props of the collection object
                        
                        <PreviewCollection key = {id} {...otherPreviewCollections} />

                    ))
                }

                    
            </div> )
            
        }
    }

    export default ShopPage
