// displays bins
// state: [bin1, bin2, bin3] -- objects

import React, { Component } from 'react';

class Shelf extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className='container'>
      <div className='nav'>
        <div className = 'logo'>
          <img src='../assets/logo.png'/>
        </div>
        <h1>Shelf A</h1>
      </div>
      <div className='shelf'>Bin 1</div>
      <div className='shelf'>Bin 2</div>
      <div className='shelf'>Bin 3</div>
      <div className='shelf'>Bin 4</div>
    </div>
    )
  }
}

export default Shelf;