import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Routes from './routes';
import './index.css';

ReactDOM.render((
  <AppContainer>
    <Routes />
  </AppContainer>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./routes', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <Routes /> here rather than require() a <HotRoutes />.
    const HotRoutes = require('./routes').default;
    ReactDOM.render((
      <AppContainer>
        <HotRoutes />
      </AppContainer>
    ), document.getElementById('root'));
  });
}
