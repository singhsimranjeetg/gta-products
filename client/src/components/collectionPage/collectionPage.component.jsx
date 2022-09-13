import React, { useState } from 'react';
import './collectionPage.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const CollectionPage = ({ collection }) => {
  const [searchField, setSearchField] = useState('');
  const filteredItem =
    collection && collection.items.filter((item) => item.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div>
      <input
        type="search"
        placeholder={`Search ${collection && collection.title}`}
        onChange={(e) => setSearchField(e.target.value)}
      />
      <div className="collection-page">
        <h2 className="title">{collection && collection.title}</h2>
        <div className="items">
          {filteredItem && filteredItem.map((item) => <CollectionItem key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state)
});
export default connect(mapStateToProps, null)(CollectionPage);
