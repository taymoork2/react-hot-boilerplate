import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux';
import Store from './Stores/store';
import { ReduxProvider as Provider } from './Containers';
import './index.css';

const store = Store(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
  <AppContainer>
    <Provider store={store} history={history} />
  </AppContainer>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./Containers/ReduxProvider/ReduxProvider', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <Routes /> here rather than require() a <HotRoutes />.
    const HotProvider = require('./Containers/ReduxProvider/ReduxProvider').default;
    ReactDOM.render((
      <AppContainer>
        <HotProvider store={store} history={history} />
      </AppContainer>
    ), document.getElementById('root'));
  });
}

