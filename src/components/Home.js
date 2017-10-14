import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
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
    )
  }
}

export default Home;