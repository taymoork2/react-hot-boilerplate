import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'connected-react-router';
import { ReduxProvider as Provider } from './Containers';
import { store, history } from './Stores';
import './index.css';

syncHistoryWithStore(history, store);

ReactDOM.render((
  <AppContainer>
    <Provider store={store} history={history} />
  </AppContainer>
), document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./Containers/ReduxProvider', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <Routes /> here rather than require() a <HotRoutes />.
    const HotProvider = require('./Containers/ReduxProvider').default; // eslint-disable-line global-require
    ReactDOM.render((
      <AppContainer>
        <HotProvider store={store} history={history} />
      </AppContainer>
    ), document.getElementById('root'));
  });
}
