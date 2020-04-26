import {createSelector} from "reselect"

export const selectshop = state => state.collection

export const selectCollections = createSelector(
    [selectshop],
    collection => collection.collections
)

