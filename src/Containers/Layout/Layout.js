import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Navbar } from '../../Components';
import logo from './assets/logo.svg';
import './assets/Layout.css';

// This is an example of a stateless function [Redux]
// All it does is take in props and displays them (no manipulations of data)
const Layout = ({ children }) => (
  <div className="App">
    <Helmet
      title=""
      titleTemplate="React App | %s"
    />
    <header>
      <img src={logo} className="logo" alt="logo" />
      <h1>Welcome to React</h1>
      <Navbar />
    </header>
    <div className="main">
      { children }
    </div>
  </div>
);

// Typechecking (Proptypes) is required
Layout.propTypes = {
  children: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Layout;
