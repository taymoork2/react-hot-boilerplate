import React from 'react';
import { Link } from 'react-router';
import './assets/Navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to={'/'}>Get Started</Link></li>
      <li><Link to={'/counter'}>Counter Example</Link></li>
    </ul>
  </nav>
);

export default Navbar;
