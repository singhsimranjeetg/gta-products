import React from "react"
import "./preview-collection.styles.scss"
import CollectionItem from "../collection-item/collection-item.component"

const PreviewCollection = ({ title, items}) => (
    <div className = "collection-preview">
        <h1 className = "title">{title.toUpperCase()}</h1>
        <div className = "preview">  
            {  

                items.filter((item,idx) => idx < 4 ).map(item => (
                 <CollectionItem key = {item.id} item = {item}  />
                 ))

            }


        </div>
    </div>

)

export default PreviewCollection

/*these HOF gets render every time our Comp gets render, so can affect performance if applying on large array. 
               items.filter((id) => id < 4).map(item => (
                    <div key = {item.id}>{item.name}</div>
                    <CollectionItem key = {item.id} title = {item.name} />

                ))*/