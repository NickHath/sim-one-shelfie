import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Home from './components/Home';
import Shelf from './components/Shelf';
import Bin from './components/Bin';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route path='' component={ Shelf } />
    <Route path='' component={ Bin } />
  </Switch>
)