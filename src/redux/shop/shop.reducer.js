import SHOP_DATA from "./shop.data"
//import {shopActionTypes} from "./shop.types"

const INITIAL_STATE = 
{
    collections: SHOP_DATA
}
 
 const shopReducer = (state = INITIAL_STATE, action) => {
     switch(action.type){
        /* case shopActionTypes.searchShopItems:
             return {
                 ...state,
                 collections: state.collections.filter(item => item.title === "Hats")
             }*/
         
         default:
             return state
     }

 }

 export default shopReducer
  