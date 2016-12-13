import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../../routes';
import Store from '../../Stores/store';
import { ReduxDevTools as DevTools } from '../../Components';

const store = Store();

export default function ReduxProvider() {
  if (process.env.NODE_ENV !== 'production') {
    return (
      <Provider store={store}>
        <Routes />
        <DevTools />
      </Provider>
    );
  }

  return <Provider store={store}><Routes /></Provider>;
}
