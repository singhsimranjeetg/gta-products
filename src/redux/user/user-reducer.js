import {userActionTypes} from "./user.types"

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

//NOTE: each reducer get the action we ever get fired, even though its not related
//to that reducer. so in this case we will return a defualt value of state, which will 
//get the comp not to render which is related to this state.

//whenever an action gets fired, we have two prop, one is the type which is unique and other is the payload,
//that is similar to the props(contains some value)

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case userActionTypes.GOOGLE_SIGNIN_SUCCESS:
        case userActionTypes.EMAIL_SIGNIN_SUCCESS:    //if ever the set current user action gets fired 
          return{
              ...state,
              currentUser: action.payload,
              error: null
          }
          case userActionTypes.GOOGLE_SIGNIN_FAILURE:
            case userActionTypes.EMAIL_SIGNIN_FAILURE:    //if ever the set current user action gets fired 
              return{
                  ...state,
                  currentUser: null,
                  error: action.payload
              }
       
    
        default:
            return state   //we none of the action type matches the current action, we will return the current state 
            //and this will not make the component to re render.

    }

}

export default userReducer