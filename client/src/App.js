import React, { useEffect, lazy, Suspense } from 'react';
import Amplify from 'aws-amplify';

import { GlobalStyle } from './global.styles';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import { checkUserSession } from './redux/user/users.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const ContactPage = lazy(() => import('./pages/contactPage/contactPage.component'));
const ProductPage = lazy(() => import('./pages/product-page/productPage.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const Checkout = lazy(() => import('./pages/checkout/checkoutpage/checkout.component'));

const AccountPage = lazy(() => import('./pages/account/account.component'));

const SmallApp = lazy(() => import('./pages/test-page/testPage'));

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/checkout" component={Checkout} />
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/product/:productId" component={ProductPage} />
            <Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)} />
            <Route path="/account" component={AccountPage} />
            <Route path="/small-app" component={SmallApp} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
