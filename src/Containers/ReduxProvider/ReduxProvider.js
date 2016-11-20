import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../Store/store';
import Routes from '../../routes';
import { ReduxDevTools as DevTools } from '../../Components';

export default class ReduxProvider extends Component {
  render() {
    if (module.hot) {
      return (
        <Provider store={store}>
          <div>
            <Routes />
            <DevTools />
          </div>
        </Provider>
      )
    } else {
      return (
        <Provider store={store}>
          <Routes />
        </Provider>
      )
    }
  }
}
