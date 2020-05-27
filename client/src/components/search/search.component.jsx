/*import React from "react"
import "./search.styles.scss"

import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCollections} from "../../redux/shop/shop.selector"
import CollectionsOverview from "../collections-overview/collections-overview.component"


const SearchBox = ({collection}) => {
 
    
return(
        

    <div className = "search">
        <input type="search"
        placeholder = "search Items"
        onChange = {(e, filteredItems) => {
            
            let searchField = ""
            searchField = searchField + e.target.value
            console.log(searchField) 
            
  
            filteredItems = collection.filter(item =>
                 item.title.toLowerCase().includes(searchField.toLowerCase()));
    
            console.log(filteredItems);        
            
        }} />
        <CollectionsOverview collections = {collection} />      
    </div>
  
)}

const mapStateToProps = createStructuredSelector({
    collection : selectCollections
})

export default connect(mapStateToProps)(SearchBox)