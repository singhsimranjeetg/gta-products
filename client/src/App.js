import React, { useEffect, lazy, Suspense } from 'react';

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
const ContactPage = lazy(() =>
  import('./pages/contactPage/contactPage.component')
);
const ProductPage = lazy(() =>
  import('./pages/product-page/productPage.component')
);
const SignInAndSignUpPage = lazy(() =>
  import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component')
);
const Checkout = lazy(() =>
  import('./pages/checkout/checkoutpage/checkout.component')
);

const SmallApp = lazy(() => import('./pages/test-page/testPage'));
//const Footer = lazy(() => import("./components/footer/footer.component") )

const App = ({ checkUserSession, currentUser }) => {
  //converted app comp to hooks and use useEffect instead of componentdidcomponent.
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]); //if not passed this second array, useEffect will re render after signinsuccess bcz current user changes.

  // doesnt work-  const {currentUser} = this.state    <h2>Welcome to {this.state.currentUser.DisplayNam}</h2>
  return (
    //using reducer to pass the props in the header comp
    <div>
      <GlobalStyle />
      <Header />

      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path='/checkout' component={Checkout} />
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/product/:productId' component={ProductPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
              }
            />
            <Route path='/small-app' component={SmallApp} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
};

//we are passing a user obj to the setscuurent user action, dispatch is a way for redux to know whatever obj we are passing
//will be a action obj and will be passed to all the reducers.
//the setcurrent user is a fx and we are passsing a obj as a arguement which will be the payload for that.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  //collectionsArray: selectCollectionsForPreview
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App); //first arguement is null bcz we dont need the currentuser prop here in the app comp

//Route comp takes three attributes, exact means only that path(which exactly maches the path name), path is the url and component is name of the component
//switch comp only lets run the base url nothing else, but when use exact it only renders the hatspage even with the switch
//we are placing our header comp out of the swich bz, no matter what switch and route display, header comp will be there for all urls
//the auth method of firebase keeps the user logged in untill they sign out,
//unlike express app which required the use of sessions to do so
//async fx for createUser bcz its waiting for a query from the db

//logger tells us the state of the our redux when any action gets fired
//the prev state is the state before action was fired and second is the
//action itself and third is the state after the action has modified
//any of our reducers

// const {setCurrentUser} = this.props
/*this.unSubscribeFromAuth = auth.onAuthStateChanged(async UsersAuth => {     //this UserAuth objects that get passed to createuserprofile fx in the firebase utils
     //console.log(UsersAuth) // this userAuth returns null if sign out and if sign in returns an auth object with display name email etc.
       if(UsersAuth){
      const userRef = await createUserProfileDocument(UsersAuth)//passing the user object with Uid to this fx 

       userRef.onSnapshot(snapShot => {
        //console.log(snapShot.data()) this returns the collections obj(like display name) for that particualar user doc, but snapshot just rerurn the obj
         setCurrentUser({
           id: snapShot.id,
           ...snapShot.data()
           
         })
  //console.log(setCurrentUser(UsersAuth)) this will start an action type as set current user and payload as big userAuth obj that has all the prop of signed in user
      })
      

       }
       
         setCurrentUser(UsersAuth)  //this will set currentuser to null if there is not Userauth, means no user signed in
        // addCollectionAndDocuments("collections",collectionsArray.map(({title, items}) => ({title, items}) ))
      
    
       
     })*/
