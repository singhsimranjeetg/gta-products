import React from "react"
import "./collectionPage.styles.scss"
import CollectionItem from "../collection-item/collection-item.component"
import {selectCollection} from "../../redux/shop/shop.selector"
//import {createStructuredSelector } from "reselect"
import {connect} from "react-redux"


class CollectionPage1 extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            searchField: "",
            
            

        }
       
    }
   render(){
 
     const {collection} = this.props
     const {title, items} = collection   
     const {searchField} = this.state
    // console.log(searchField)
     const filteredItem = items.filter(item => 
        item.name.toLowerCase().includes(searchField.toLowerCase()));
        //console.log(filteredItem)
        
   
  
return(
    <div>
    <input type="search"
        placeholder = {`Search ${title}`}
        onChange = {e => this.setState({searchField: e.target.value})
        }/>           
    <div className = "collection-page">
        <h2 className = 'title'>{title}</h2>
        <div className = "items">
        {
               filteredItem.map(item => (
                   <CollectionItem key = {item.id} item = {item} />
               ))
           }
           
        </div>
    </div>
    </div>
)
}
}
const mapStateToProps = (state,ownProps) => ({
    collection :selectCollection(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(CollectionPage1)

/* 
{
               items.map(item => (
                   <CollectionItem key = {item.id} item = {item} />
               ))
           }
*/