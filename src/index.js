import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory, hashHistory } from 'react-router'; // eslint-disable-line no-unused-vars
// import { syncHistoryWithStore } from 'react-router-redux';
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
    const HotProvider = require('./Containers/ReduxProvider/ReduxProvider').default; // eslint-disable-line global-require
    ReactDOM.render((
      <AppContainer>
        <HotProvider />
      </AppContainer>
    ), document.getElementById('root'));
  });
}
