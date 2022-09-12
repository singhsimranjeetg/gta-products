export enum shopActionTypes {
    FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START' ,
    FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS',
    FETCH_COLLECTIONS_FAILED = 'FETCH_COLLECTIONS_FAILED'
}

export type collectionItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type collection = {
  title: string;
  imageUrl: string;
  items: collectionItem[];
};

export type collectionMap = {
  [key: string]: collectionItem[];
};