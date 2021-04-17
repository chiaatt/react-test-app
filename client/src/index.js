import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducer/AuthenticationReducer';

import './index.css';
import App from './App';
import SingleCountry from './country/SingleCountry';
import MultipleCountries from './country/MultipleCountries';
import FilterCountries from './country/FilterCountries';
import Registration from './registration/Registration';
import Login from './login/Login';

//Create Redux Store
export const store = createStore(
  rootReducer,
  applyMiddleware(
      thunkMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/task/one' component={SingleCountry} />
        <Route path='/task/two' component={MultipleCountries} />
        <Route path='/task/three' component={FilterCountries} />
        <Route path='/registration' component={Registration} />
        <Route path='/login' component={Login} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
