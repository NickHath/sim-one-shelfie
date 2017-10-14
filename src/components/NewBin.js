import React, { Component } from 'react';
import axios from 'axios'
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import './Bin.css'

class NewBin extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: ''
    }
  }

  inputName(e) {
    this.setState({
      name: e.target.value
    })
  }

  inputPrice(e) {
    this.setState({
      price: e.target.value
    })
  }

  createBin() {
    axios.put(`http://localhost:3000/api/new/${this.props.match.params.shelf}/${this.props.match.params.bin}`,
              {name: this.state.name, price: this.state.price, imageurl: '#', shelfid: this.props.match.params.shelf});
  }

  render() {
    console.log(this.state);
    let shelf = this.props.match.params.shelf, bin = this.props.match.params.bin;
    let shelfEndInd = shelf.length - 1, binEndInd = bin.length - 1;
    return(
      <div className='container'>
        <div className='nav'>
          <div className='logo'>
            <Link to='/'><img src={logo}/></Link>
          </div>
          <h1>{ shelf.slice(0, shelfEndInd) + ' ' + shelf.slice(shelfEndInd)}</h1>
          <h1>Add to Bin { bin.slice(0, binEndInd) + ' ' + bin.slice(binEndInd) }</h1>
        </div>
        <div className='editor'>
          <p>Name</p>
          <input onChange={ (e) => this.inputName(e) } />
          <p>Price</p>
          <input placeholder='$0' onChange={ (e) => this.inputPrice(e) } />
          <Link to={`/${shelf}`} className='nostyle' onClick={ () => this.createBin() }><button className='green_button new_button'>+ Add to Inventory</button></Link>
        </div>
      </div>
    )
  }
}

export default NewBin;