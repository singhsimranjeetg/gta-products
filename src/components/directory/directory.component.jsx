import React from "react"
import "./directory.styles.scss"
import MenuItem from "../menu-item/menu-item.component"

//this component need class components because we need state of the directory menu
class Directory extends React.Component {
    constructor(){
        super()
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                  },
                  {
                    title: 't-shirts',
                    imageUrl: 'https://i.ibb.co/g3DNrhd/t-shirt.jpg',
                    id: 3,
                    linkUrl: 'shop/t-shirts'
                  },
                  {
                    title: 'jeans',
                    imageUrl: 'https://i.ibb.co/BP23NH6/jeans.jpg',
                    id: 4,
                    linkUrl: 'shop/jeans'
                  },
                  {
                    title: 'joggers',
                    imageUrl: 'https://i.ibb.co/s3WwF9y/jogger.jpg',
                    id: 5,
                    linkUrl: 'shop/joggers'
                  },
                             
                  {
                    title: 'shoes',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 6,
                    linkUrl: 'shop/shoes'
                  },

                  {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 7,
                    linkUrl: 'shop/womens'
                  },

                  {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 8,
                    linkUrl: 'shop/mens'
                  },
                  {
                    title: 'kids',
                    imageUrl: 'https://i.ibb.co/k0gFsX2/kids.jpg',
                    size: 'large',
                    id: 9,
                    linkUrl: 'shop/kids'
                  }        
            ]
        }
      }   //we have to close the constructor after the state and 

      
        render() {
            return (
                <div className = "directory-menu">
                    {
                        this.state.sections.map(({id, ...otherSectionsProps}) => (
                         <MenuItem key = {id} {...otherSectionsProps} />
                          ) )

                        }
                </div>
                
                  
              )  }

    
    }




export default Directory 
 
