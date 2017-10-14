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
      <div className='container'>
        <div className='nav'>
          <img src='../assets/logo.png'/>
          <h1>Shelfie</h1>
        </div>
        <div className='shelf'>Shelf A</div>
        <div className='shelf'>Shelf B</div>
        <div className='shelf'>Shelf C</div>
        <div className='shelf'>Shelf D</div>
      </div>
    );
  }
}

export default App;



{/* <div className="App">
<button onClick={() => this.getTest()}>Get Test</button>
<p>Test val: {JSON.stringify(this.state.test)}</p>
</div> */}