import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import Routes from '../../routes';
import { ReduxDevTools as DevTools } from '../../Components';

export default class ReduxProvider extends Component {
  render() {
    const { store, history } = this.props;

    if (process.env.NODE_ENV === 'production') {
      return (
        <Provider store={store}>
          <Routes history={history} />
        </Provider>
      );
    } else {
      return (
        <Provider store={store}>
          <div>
            <Routes history={history} />
            <DevTools />
          </div>
        </Provider>
      );
    }
  }
}

ReduxProvider.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
