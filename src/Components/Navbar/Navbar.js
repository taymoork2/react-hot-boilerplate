import React, { Component } from 'react';
import { Link } from 'react-router';
import './assets/Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to={'/'}>Get Started</Link></li>
          <li><Link to={'/counter'}>Counter Example</Link></li>
        </ul>
      </nav>
    );
  }
}
