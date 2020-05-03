const INITIAL_STATE = 

{
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'shop/hats'
          },
          {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title: 't-shirts',
            imageUrl: 'https://i.ibb.co/M2WC2cM/tshirt.jpg',
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
            linkUrl: 'shop/sneakers'
          },

          {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 7,
            linkUrl: 'shop/women'
          },

          {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/g3DNrhd/t-shirt.jpg',
            size: 'large',
            id: 8,
            linkUrl: 'shop/men'
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

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer