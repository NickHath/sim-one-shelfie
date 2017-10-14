import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <Link className='shelf nostyle' to='/shelfa'><div>Shelf A</div></Link>
      <Link className='shelf nostyle' to='/shelfb'><div>Shelf B</div></Link>
      <Link className='shelf nostyle' to='/shelfc'><div>Shelf C</div></Link>
      <Link className='shelf nostyle' to='/shelfd'><div>Shelf D</div></Link>
    </div>
    )
  }
}

export default Home;