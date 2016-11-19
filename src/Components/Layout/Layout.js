import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import logo from './assets/logo.svg';
import './assets/Layout.css'

export default class Layout extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Navbar />
        </header>
        <div className="main">
          {this.props.children} {/* <-- Where Components/Routes will be displayed  */}
        </div>
      </div>
    );
  }
}
