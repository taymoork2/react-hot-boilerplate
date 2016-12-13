import React from 'react';
import { Link } from 'react-router';
import './assets/Navbar.css';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to={`${process.env.PUBLIC_URL}/`} activeOnlyWhenExact activeStyle={{ textDecoration: 'underline' }}><b>Get Started</b></Link></li>
      <li><Link to={`${process.env.PUBLIC_URL}/counter`} activeStyle={{ textDecoration: 'underline' }}><b>Counter Example</b></Link></li>
    </ul>
  </nav>
);

export default Navbar;
