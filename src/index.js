import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(  //browserrouter is a comonent that gives all the routing functionality to the comp in it
    <BrowserRouter>
    <App />
    </BrowserRouter>,
  
  document.getElementById('root')
);
//deleted service worrker code bcz we dont need that.

