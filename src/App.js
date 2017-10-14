import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import router from './router';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.state);
    return (
      { router }
    );
  }
}

export default App;