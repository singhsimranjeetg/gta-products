export const setCurrentUser = user => ({  //so user is same obj as UserAuth or Users in the app.js
    type: "SET_CURRENT_USER",
    payload: user
})