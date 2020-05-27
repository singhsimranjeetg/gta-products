import {createSelector} from "reselect"


const selectUser = state => state.user   //input selector, access the cart obj from state

export const selectCurrentUser = createSelector(
    [selectUser] ,
    user => user.currentUser
)


