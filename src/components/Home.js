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
      <Link to='/shelfa'><div className='shelf'>Shelf A</div></Link>
      <Link to='/shelfb'><div className='shelf'>Shelf B</div></Link>
      <Link to='/shelfc'><div className='shelf'>Shelf C</div></Link>
      <Link to='/shelfd'><div className='shelf'>Shelf D</div></Link>
    </div>
    )
  }
}

export default Home;