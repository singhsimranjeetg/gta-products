import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
//import "./product.styles.scss"
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import { withRouter } from 'react-router-dom';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import ProductComponent from '../../components/product/product.component';

const ProductPage = ({ fetchCollectionsStartNow, collection, match }) => {
  useEffect(() => {
    fetchCollectionsStartNow();
  }, [fetchCollectionsStartNow]);

  let productid = match.params.productId;
  const item1 = collection.map((item) => item.items.find((item2) => item2.id === Number(productid)));
  const item3 = item1.filter((item) => item !== undefined);

  return (
    <div>
      {item3.map((item) => (
        <ProductComponent key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collection: selectCollectionsForPreview(state)
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  fetchCollectionsStartNow: () => dispatch(fetchCollectionsStart())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPage));
