// displays bins
// state: [bin1, bin2, bin3] -- objects

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../logo.png';


class Shelf extends Component {
  constructor() {
    super();
    this.state = {
      bins: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/${this.props.match.params.shelf}`)
         .then((res) => this.setState({ bins: res.data }))
  }

  render() {
    let shelf = this.props.match.params.shelf;
    let shelfEndInd = shelf.length - 1;
    let binJSX = this.state.bins.map((bin) => {
      if (bin.name === null) {
        return <Link className='shelf empty nostyle' to={`new/${shelf}/${bin.id}`}><div>+ Add inventory to bin</div></Link>
      } else {
        return <Link className='shelf nostyle' to={`/${shelf}/${bin.id}`}><div>Bin {bin.id}</div></Link>
      }
    })
    return (
      <div className='container'>
        <div className='nav'>
          <div className = 'logo'>
            <Link to='/'><img src={logo}/></Link>
          </div>
          <h1>{shelf.slice(0, shelfEndInd) + ' ' + shelf.slice(shelfEndInd)}</h1>
        </div>
        { binJSX }
    </div>
    )
  }
}

export default Shelf;