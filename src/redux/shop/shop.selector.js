import {createSelector} from "reselect"

export const selectshop = state => state.shop

export const selectCollections = createSelector(
    [selectshop],
    shop => shop.collections
)
 //Keys does is it gets us all of the keys of an object that we pass into it and gives it to us in an array format
export const selectCollectionsForPreview = createSelector(
    [selectCollections], 
    collection => collection ?  Object.keys(collection).map(key => collection[key] ) : []
    
)

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections1 => collections1 ? collections1[collectionUrlParam] : null
);

export const selectCollctionFetching = createSelector(
    [selectshop],
    shop => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectshop],
    shop => !!shop.collections  //if collection stores an object, return true, if null false
)
//using !!null will return us false.
// but !!object will return true.