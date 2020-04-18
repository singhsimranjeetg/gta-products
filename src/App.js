import React from 'react';
import HomePage from "./pages/homepage/homepage.component"
import './App.css';
import {Switch, Route} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component"
import Header from  "./components/header/header.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"


class App extends React.Component { 
  constructor(){
    super()

    this.state = {
      currentUser: null
    }

  }

    unSubscribeFromAuth = null


   componentDidMount(){   //telling to whenever a auth change, update the state of app comp
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async UsersAuth => {     //this UserAuth objects that get passed to createuserprofile fx in the firebase utils
     //console.log(UsersAuth) // this userAuth returns null if sign out and if sign in returns an auth object with display name email etc.
       if(UsersAuth){
      const userRef = await createUserProfileDocument(UsersAuth)

       userRef.onSnapshot(snapShot => {
        //console.log(snapShot.data()) this returns the collections obj(like display name) for that particualar user doc, but snapshot just rerurn the obj
         this.setState({
           currentUser: {
           id: snapShot.id,
           ...snapShot.data()
         }})
         console.log(this.state.currentUser)
      })
      

       }
       else {
         this.setState({currentUser: UsersAuth})  //this will set currentuser to null if there is not Userauth, means no user signed in
       }
    
       
     })
   }
    componentWillUnmount(){
      this.unSubscribeFromAuth()
    }
   render() {
    // doesnt work-  const {currentUser} = this.state    <h2>Welcome to {this.state.currentUser.DisplayNam}</h2>
   return (  
   
    <div className="App">
      <Header currentUser = {this.state.currentUser}  />
      <h4>GTA-PRODUCTS</h4>
      
      <Switch>
      <Route exact  path = "/" component = {HomePage}  />
     <Route path = "/shop" component = {ShopPage} />
     <Route path = "/signin" component = {SignInAndSignUpPage} />
      </Switch>
      
    </div>
  );  
}  
}



export default App;



//Route comp takes three attributes, exact means only that path(which exactly maches the path name), path is the url and component is name of the component
 //switch comp only lets run the base url nothing else, but when use exact it only renders the hatspage even with the switch
 //we are placing our header comp out of the swich bz, no matter what switch and route display, header comp will be there for all urls
  //the auth method of firebase keeps the user logged in untill they sign out,
     //unlike express app which required the use of sessions to do so  
     //async fx for createUser bcz its waiting for a query from the db