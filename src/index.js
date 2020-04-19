import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux/store"

ReactDOM.render(  //browserrouter is a comonent that gives all the routing functionality to the comp in it
  <Provider store = {store} >      
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
 //provider is the comp that gives the access to the store , where we gonna store our redux, and it has to be the parent of everyone.
  document.getElementById('root')
);
//deleted service worrker code bcz we dont need that.

