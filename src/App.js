import React from 'react';
import HomePage from "./pages/homepage/homepage.component"
import './App.css';
import {Switch, Route} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component"
import Header from  "./components/header/header.component"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

function App() { //Route comp takes three attributes, exact means only that path(which exactly maches the path name), path is the url and component is name of the component
  return (       //switch comp only lets run the base url nothing else, but when use exact it only renders the hatspage even with the switch
    <div className="App">
      
      <Header  />
      <Switch>
      <Route exact  path = "/" component = {HomePage}  />
     <Route   path = "/hats" component = {HatsPage}  /> 
     <Route path = "/shop" component = {ShopPage} />
     <Route path = "/signin" component = {SignInAndSignUp} />
      </Switch>
      
    </div>
  );  //we are placing our header comp out of the swich bz, no matter what switch and route display, header comp will be there for all urls
}

function HatsPage(){
  //console.log(props)
  return (
    
    <h1>Heloooooooooo</h1>
    
  )
  
}

export default App;
