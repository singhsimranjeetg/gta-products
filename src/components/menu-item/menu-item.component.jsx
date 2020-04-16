import React from "react"
import {withRouter} from "react-router-dom"  //higher order comp, takes comp as agguement and return a modified comp.


import "./menu-item.styles.scss"

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
    <div className={`${size} menu-item`}
     onClick = {() => history.push(`${match.url}${linkUrl}`)}     
     >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>   
          <span className='subtitle'>SHOP NOW</span>
          
         
    </div>
      </div>
    
  
)


//withRouter will return us super powered comp that has access to props like history, that otherwise possible only in homepage 
export default withRouter(MenuItem)  