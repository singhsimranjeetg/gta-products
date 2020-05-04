import {createSelector} from "reselect"

export const selectshop = state => state.shop

export const selectCollections = createSelector(
    [selectshop],
    shop => shop.collections
)
 //Keys does is it gets us all of the keys of an object that we pass into it and gives it to us in an array format
export const selectCollectionsForPreview = createSelector(
    [selectCollections], 
    collection => Object.keys(collection).map(key => collection[key] )
    
)

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections1 => collections1[collectionUrlParam]
);