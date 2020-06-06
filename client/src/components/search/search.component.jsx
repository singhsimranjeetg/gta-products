import React from "react"
import "./search.styles.scss"

import {connect} from "react-redux"
//import {createStructuredSelector} from "reselect"
import {selectCollectionsForPreview} from "../../redux/shop/shop.selector"
import CollectionsOverviewContainer from "../collections-overview/collection-overview.container"


class ShopPageWithSearch extends React.Component {

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
    const {collectionForShopPage} = this.props
     const {searchField} = this.state
     console.log(searchField)
     const filteredItem = collectionForShopPage.filter(item => 
        item.title.toLowerCase().includes(searchField.toLowerCase()));
        console.log(filteredItem)
        
   
return(     
    <div className = "search">
        <input type="search"
        placeholder = "Search Collections"
        onChange = {e => this.setState({searchField: e.target.value}
            )}             
        />
         <CollectionsOverviewContainer collections = {filteredItem} />     
    </div>
  
)}}

const mapStateToProps = (state) => ({
    collectionForShopPage : selectCollectionsForPreview(state)
})

export default connect(mapStateToProps)(ShopPageWithSearch)