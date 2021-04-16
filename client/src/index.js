import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import SingleCountry from './country/SingleCountry';
import MultipleCountries from './country/MultipleCountries';
import FilterCountries from './country/FilterCountries';

ReactDOM.render(
  <Router>
  <div>
    <Route exact path='/' component={App} />
    <Route path='/task/one' component={SingleCountry} />
    <Route path='/task/two' component={MultipleCountries} />
    <Route path='/task/three' component={FilterCountries} />
  </div>
  </Router>,
  document.getElementById('root')
);
