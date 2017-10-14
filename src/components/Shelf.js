// displays bins
// state: [bin1, bin2, bin3] -- objects

import React, { Component } from 'react';
import axios from 'axios';

class Shelf extends Component {
  constructor() {
    super();
    this.state = {
      bins: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/${this.props.match.params.shelf}`)
         .then((res) => this.setState({bins: res.data}))
  }

  render() {
    let binJSX = this.state.bins.map((bin) => <div className='shelf'>Bin {bin.id}</div>)
    return (
      <div className='container'>
        <div className='nav'>
          <div className = 'logo'>
            <img src='../assets/logo.png'/>
          </div>
          <h1>{this.props.match.params.shelf}</h1>
        </div>
        { binJSX }
    </div>
    )
  }
}

export default Shelf;