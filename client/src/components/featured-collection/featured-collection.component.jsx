import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import { FCStyle } from '../featured-collection/featured-collection.styles';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const FeaturedCollection = ({ fetchCollectionsStart, collection }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <>
      <h1 className="category__heading">Shop Best Sellers</h1>
      <FCStyle>
        {collection
          ? collection.items.filter((item, idx) => idx < 3).map((item) => <CollectionItem key={item.id} item={item} />)
          : []}
      </FCStyle>
    </>
  );
};

const mapStateToProps = (state) => ({
  collection: selectCollection('hats')(state)
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedCollection);
