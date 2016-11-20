import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ReduxProvider as Provider } from './Containers';
import './index.css';

ReactDOM.render((
  <AppContainer>
    <Provider />
  </AppContainer>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./Containers/ReduxProvider/ReduxProvider', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <Routes /> here rather than require() a <HotRoutes />.
    const HotProvider = require('./Containers/ReduxProvider/ReduxProvider').default;
    ReactDOM.render((
      <AppContainer>
        <HotProvider />
      </AppContainer>
    ), document.getElementById('root'));
  });
}
