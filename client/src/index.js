import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom" 
import {Provider} from "react-redux"

import {PersistGate} from "redux-persist/integration/react"
import {store, persistor } from "./redux/store"

ReactDOM.render(  //browserrouter is a comonent that gives all the routing functionality to the comp in it
  <Provider store = {store} > 
  <BrowserRouter>     
   <PersistGate persistor = {persistor}>
    <App /> 
    </PersistGate>
  </BrowserRouter>
  </Provider>,
 //provider is the comp that gives the access to the store , where we gonna store our redux, and it has to be the parent of everyone.
  document.getElementById('root')
);
//deleted service worrker code bcz we dont need that.

