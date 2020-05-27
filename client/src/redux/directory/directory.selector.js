import {createSelector} from "reselect"


const selectDirectory = state => state.directory   //input selector, access the cart obj from state

export const selectDirectorySections = createSelector(
    [selectDirectory] ,
    directory => directory.sections
)