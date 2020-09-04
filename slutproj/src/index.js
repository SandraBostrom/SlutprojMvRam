import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Header from './Components/elements/Header';
import { Router } from "@reach/router";
import Recipe from './Recipe';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <App path="/" />
      <Recipe path="/:url" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
