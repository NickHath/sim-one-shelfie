// state: name, imageurl, price

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../logo.png'
import './Bin.css';

class Bin extends Component {
  constructor() {
    super();
    this.state = {
      bin: {},
      name: '',
      price: null,
      imageurl: '',
      tempName: '',
      tempPrice: null,
      editing: 'disabled'
    }
  }

  inputName(e) {
    this.setState({
      tempName: e.target.value
    })
  }

  inputPrice(e) {
    this.setState({
      tempPrice: e.target.value
    })
  }

  setName() {
    if (this.state.tempName !== '') {
      this.setState({
        name: this.state.tempName,
        tempName: ''
      })
    }
  }

  setPrice() {
    if (this.state.tempPrice !== null) {
      this.setState({
        price: this.state.tempPrice,
        tempPrice: null
      })
    }
  }

  setEditing() {
    if (this.state.editing === 'disabled') {
      this.setState({ editing: '' })
    } else {
      this.setState({ editing: 'disabled' })
    }
  }

  updateDB() {
    axios.put(`http://localhost:3000/api/${this.props.match.params.shelf}/${this.props.match.params.bin}`,
               {name: this.state.name, price: this.state.price, imageurl: this.state.bin.imageurl})
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/${this.props.match.params.shelf}/${this.props.match.params.bin}`)
         .then((res) => this.setState({ name: res.data[0].name, price: res.data[0].price, imageurl: res.data[0].imageurl }))
  }

  deleteBin() {
    console.log(`http://localhost:3000/api/${this.props.match.params.shelf}/${this.props.match.params.bin}`);
    axios.delete(`http://localhost:3000/api/${this.props.match.params.shelf}/${this.props.match.params.bin}`);
  }

  render() {
    let shelf = this.props.match.params.shelf, bin = this.props.match.params.bin;
    let shelfEndInd = shelf.length - 1, binEndInd = bin.length - 1;
    return(
      <div className='container'>
        <div className='nav'>
          <div className = 'logo'>
            <Link to='/'><img src={logo}/></Link>
          </div>
          <h1>{ shelf.slice(0, shelfEndInd) + ' ' + shelf.slice(shelfEndInd)}</h1>
          <h1>Bin { bin.slice(0, binEndInd) + ' ' + bin.slice(binEndInd) }</h1>
        </div>
        <div className='editor'>
          <img src={ this.state.imageurl } />
          <p>Name</p>
          <input placeholder={ this.state.name }
                 disabled={ this.state.editing }
                 onChange={ (e) => this.inputName(e) } />
          <p>Price</p>
          <input placeholder={ this.state.price }
                 disabled={ this.state.editing }
                 onChange={ (e) => this.inputPrice(e) } />
          {
            this.state.editing === 'disabled' ?
              <button onClick={ () => this.setEditing() }>Edit</button> :
              <button className='green_button'
                      onClick={ () => {
                        this.setEditing()
                        this.setName();
                        this.setPrice();
                        // this.updateDB();
                      } }>Save</button>
          }
          {/* Delete the entire bin, need to use SQL */}
          <Link to={`/${shelf}`} className='nostyle' onClick={ () => this.deleteBin() }><button>Delete</button></Link>
         </div>
      </div>
    )
  }
}
 
export default Bin;