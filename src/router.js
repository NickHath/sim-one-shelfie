import React from 'react';
import { Switch, Route } from 'react-router-dom';

// components
import Home from './components/Home';
import Shelf from './components/Shelf';
import Bin from './components/Bin';
import NewBin from './components/NewBin';

export default (
  <Switch>
    <Route exact path='/' component={ Home } />
    <Route exact path='/:shelf' component={ Shelf } />
    <Route exact path='/:shelf/:bin' component={ Bin } />
    <Route path='/new/:shelf/:bin' component={ NewBin }/>
  </Switch>
)