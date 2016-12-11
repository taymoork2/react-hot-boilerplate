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
      titleTemplate="React+Router+Redux | %s"
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

// It is disabled on this file because object is the correct type
// ESlint format says otherwise (but even they say it's not a hard rule to follow)
Layout.propTypes = {
  children: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Layout;
