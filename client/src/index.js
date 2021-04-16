import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import SingleCountry from './country/SingleCountry';

ReactDOM.render(
  <Router>
  <div>
    <Route exact path='/' component={App} />
    <Route path='/task/one' component={SingleCountry} />
  </div>
  </Router>,
  document.getElementById('root')
);
