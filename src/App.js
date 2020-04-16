import React from 'react';
import HomePage from "./pages/homepage/homepage.component"
import './App.css';
import {Switch, Route} from "react-router-dom"

function App() { //Route comp takes three attributes, exact means only that path(which exactly maches the path name), path is the url and component is name of the component
  return (       //switch comp only lets run the base url nothing else, but when use exact it only renders the hatspage even with the switch
    <div className="App">
      <Switch>
      <Route exact  path = "/" component = {HomePage}  />
     <Route   path = "/hats"component = {HatsPage}  /> 
      </Switch>
      
    </div>
  );
}

function HatsPage(){
  //console.log(props)
  return (
    
    <h1>Heloooooooooo</h1>
    
  )
  
}

export default App;
