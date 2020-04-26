import React from "react"
import "./directory.styles.scss"
import MenuItem from "../menu-item/menu-item.component"
import {connect} from "react-redux"
import {createStructuredSelector } from "reselect"
import {selectDirectorySections} from "../../redux/directory/directory.selector"

//this component need class components because we need state of the directory menu
//class Directory extends React.Component { changing class comp to fx bcz we dont need state here anymore.
       //we have to close the constructor after the state and 
  
    const Directory = ({sections}) => (
               <div className = "directory-menu">
                    {
                        sections.map(({id, ...otherSectionsProps}) => (
                         <MenuItem key = {id} {...otherSectionsProps} />
                          ) )

                        }
                </div>
                
                  
              ) 
  const mapStateToProps = () => createStructuredSelector({
    sections: selectDirectorySections
  })


export default connect(mapStateToProps)(Directory)
 
