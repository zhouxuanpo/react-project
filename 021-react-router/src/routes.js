
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Account from './components/Account';

export default (
  <Route path="/" component={App} >
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/account" component={Account} />
    <IndexRoute component={Home} />
  </Route>
);
