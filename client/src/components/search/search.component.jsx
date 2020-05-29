import React from "react"
import "./search.styles.scss"

import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector"
import CollectionsOverviewContainer from "../collections-overview/collection-overview.container"


class SearchBox extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            searchField: "",
            
            

        }
       
    }
    //const [searchState, setCollections] = useState({searchField : "", filteredItems: []})
    
   /*const {searchField, filteredItems} = searchState

     handleChange = (e, fitems, searchFiel) => {
 
        searchFiel = searchFiel + e.target.value
        console.log(searchFiel)
        console.log(filteredItems);
        setCollections({filteredItems : fitems, searchField: searchFiel }) }*/

   
   render(){
    const {collection} = this.props
     const {searchField} = this.state
     console.log(searchField)
     const filteredItem = collection.filter(item =>
        item.title.toLowerCase().includes(searchField.toLowerCase()));
        console.log(filteredItem)
        
   
return(     
    <div className = "search">
        <input type="search"
        placeholder = "Search Items"
        onChange = {e => this.setState({searchField: e.target.value}
            )}             
        />
         <CollectionsOverviewContainer collections = {filteredItem} />     
    </div>
  
)}}

const mapStateToProps = createStructuredSelector({
    collection : selectCollectionsForPreview
})

export default connect(mapStateToProps)(SearchBox)