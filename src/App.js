import React, { Component } from 'react';
import './App.css';

import router from './router';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        { router }
      </div>
    );
  }
}

export default App;