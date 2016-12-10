import React, { PropTypes } from 'react';
import { Match, Miss, Redirect } from 'react-router';
import { Navbar } from '../../Components';
import logo from './assets/logo.svg';
import './assets/Layout.css';

// This is an example of a stateless function [Redux]
// All it does is take in props and displays them (no manipulations of data)
const Layout = ({ routes }) => (
  <div className="App">
    <header>
      <img src={logo} className="logo" alt="logo" />
      <h1>Welcome to React</h1>
      <Navbar />
    </header>
    <div className="main">
      {routes.map((route, index) => (
        <Match
          key={index}
          pattern={route.pattern}
          component={route.component}
          exactly={route.exactly}
        />
      ))}
      <Miss component={() => <Redirect to="/" />} />
    </div>
  </div>
);

// Typechecking (Proptypes) is required
Layout.propTypes = {
  routes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Layout;
