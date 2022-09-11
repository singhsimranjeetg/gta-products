import React, { useEffect } from 'react';
import { signOutStart } from '../../redux/user/users.actions';
import { getOrdersStart } from '../../redux/account/account.actions';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const AccountPage = ({ signOutStart, getOrdersStart, currentUser }) => {
  useEffect(() => {
    if (currentUser) {
      getOrdersStart();
    }
  }, [getOrdersStart, currentUser]);
  return (
    <div className="checkout-page">
      Account Page
      <div onClick={signOutStart}>Sign out</div>
      <div>Orders</div>
      <div>Profile</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  getOrdersStart: () => dispatch(getOrdersStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);
