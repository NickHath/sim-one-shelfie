import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      test: null
    }
  }

  getTest() {
    axios.get('http://localhost:3000/api/test')
         .then((res) => this.setState({ test: res.data}))
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <button onClick={() => this.getTest()}>Get Test</button>
        <p>Test val: {JSON.stringify(this.state.test)}</p>
      </div>
    );
  }
}

export default App;
