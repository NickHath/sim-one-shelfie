// state: name, imageurl, price

import React, { Component } from 'react';
import axios from 'axios';
import './Bin.css';

class Bin extends Component {
  constructor() {
    super();
    this.state = {
      bin: {},
      name: '',
      price: null,
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

  componentDidMount() {
    axios.get(`http://localhost:3000/api/${this.props.match.params.shelf}/${this.props.match.params.bin}`)
         .then((res) => this.setState({ bin: res.data }))
  }

  render() {
    console.log(this.state);
    return(
      <div className='container'>
        <div className='nav'>
          <div className = 'logo'>
            <img src='../assets/logo.png'/>
          </div>
          <h1>{ this.props.match.params.shelf }</h1>
          <h1>Bin { this.props.match.params.bin }</h1>
        </div>
        <div className='editor'>
          <img />
          <p>Name</p>
          <input placeholder='Enter name'
                 disabled={this.state.editing}
                 onChange={(e) => this.inputName(e)} />
          <p>Price</p>
          <input placeholder='Enter price'
                 disabled={this.state.editing}
                 onChange={(e) => this.inputPrice(e)} />
          {
            this.state.editing === 'disabled' ?
              <button onClick={() => this.setEditing()}>Edit</button> :
              <button onClick={() => {
                this.setEditing()
                this.setName();
                this.setPrice();
              }}>Save</button>
          }
          {/* Delete the entire bin, need to use SQL */}
          <button>Delete</button>
         </div>
      </div>
    )
  }
}
 
export default Bin;