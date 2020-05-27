import React, {useEffect} from 'react';
import HomePage from "./pages/homepage/homepage.component"
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component"
import Checkout from "./pages/checkout/checkoutpage/checkout.component"

import Header from  "./components/header/header.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
//import {auth, createUserProfileDocument} from "./firebase/firebase.utils"
import {connect} from "react-redux"
//import {setCurrentUser} from "./redux/user/users.actions"
import {selectCurrentUser} from "./redux/user/user.selectors"
import {createStructuredSelector} from "reselect"
import ContactPage from './pages/contactPage/contactPage.component';

import {checkUserSession} from "./redux/user/users.actions"

//import {selectCollectionsForPreview } from "./redux/shop/shop.selector"


const App = ({checkUserSession, currentUser}) =>  { 

  //converted app comp to hooks and use useEffect instead of componentdidcomponent.
    useEffect(() => {
      checkUserSession()
    }, [checkUserSession]) //if not passed this second array, useEffect will re render after signinsuccess bcz current user changes. 


    // doesnt work-  const {currentUser} = this.state    <h2>Welcome to {this.state.currentUser.DisplayNam}</h2>
   return (  
   //using reducer to pass the props in the header comp
    <div className="App">
      <Header  />     
    
      <h4>GTA PRODUCTS </h4>
    
      <Switch>
      <Route  path = "/checkout" component = {Checkout} />
      <Route exact  path = "/" component = {HomePage}  />
     <Route path = "/shop" component = {ShopPage} />
     <Route path = "/contact" component = {ContactPage} />
     
     <Route exact path = "/signin" render = {() =>
       currentUser ? (<Redirect to = "/"/>) 
       : (<SignInAndSignUpPage />) }/>
      </Switch>
      
    </div>
  );  
}  

    //we are passing a user obj to the setscuurent user action, dispatch is a way for redux to know whatever obj we are passing
  //will be a action obj and will be passed to all the reducers.
  //the setcurrent user is a fx and we are passsing a obj as a arguement which will be the payload for that.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
 //collectionsArray: selectCollectionsForPreview
})
 const mapDispatchToProps = dispatch => ({
   checkUserSession: () => dispatch(checkUserSession())
 })



 
export default connect(mapStateToProps, mapDispatchToProps)(App)    //first arguement is null bcz we dont need the currentuser prop here in the app comp



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