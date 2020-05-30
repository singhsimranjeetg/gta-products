import React from "react"
//import "./search.styles.scss"

import {connect} from "react-redux"
//import {createStructuredSelector} from "reselect"
import {selectCollection} from "../../redux/shop/shop.selector"
import CollectionPageContainer from "../collectionPage/collectionPage.container"


class CollectionPageWithSearch extends React.Component {

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
    const {itemsForCollectionPage} = this.props
    const {items} = itemsForCollectionPage
     const {searchField} = this.state
     console.log(searchField)
     const filteredItem = items.filter(item =>
        item.title.toLowerCase().includes(searchField.toLowerCase()));
        console.log(filteredItem)
        
   
return(     
    <div className = "search">
        <input type="search"
        placeholder = "Search Collections"
        onChange = {e => this.setState({searchField: e.target.value}
            )}             
        />
         <CollectionPageContainer collection = {filteredItem} />     
    </div>
  
)}}

const mapStateToProps = (state,ownProps) => ({
    itemsForCollectionPage :selectCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CollectionPageWithSearch)