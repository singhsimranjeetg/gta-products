import {createSelector} from "reselect"

export const selectshop = state => state.shop

export const selectCollections = createSelector(
    [selectshop],
    shop => shop.collections
)

