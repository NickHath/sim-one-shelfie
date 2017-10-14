// state: name, imageurl, price

import React, { Component } from 'react';
import './Bin.css';

class Bin extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className='container'>
        <div className='nav'>
          <div className = 'logo'>
            <img src='../assets/logo.png'/>
          </div>
          <h1>Shelf A</h1>
          <h1>Bin 1</h1>
        </div>
        <div className='editor'>
          <img />
          <p>Name</p>
          <input placeholder='Enter name'/>
          <p>Price</p>
          <input placeholder='Enter price'/>
          <button>Edit</button>
          <button>Delete</button>
         </div>
      </div>
    )
  }
}
 
export default Bin;