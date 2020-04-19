import {userActionTypes} from "./user.types"

export const setCurrentUser = user => ({  //so user is same obj as UserAuth or Users in the app.js
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})