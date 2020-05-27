
import {shopActionTypes} from "./shop.types"

const INITIAL_STATE = 
{
    collections: null,
    isFethching : false,
    errorMsg : undefined
}
 
 const shopReducer = (state = INITIAL_STATE, action) => {
     switch(action.type){
        case shopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFethching: true,
                
            }
            case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
                return {
                    ...state,
                    isFethching: false,
                    collections: action.payload
                }
            case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
                    return {
                        ...state,
                        isFethching: false,
                        errorMsg: action.payload
                    }
         
         default:
             return state
     }

 }

 export default shopReducer
  