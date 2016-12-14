import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Routes from '../../routes';
import { ReduxDevTools as DevTools } from '../../Components';

export default function ReduxProvider(store, history) {
  if (process.env.NODE_ENV !== 'production') {
    return (
      <Provider store={store}>
        <div>
          <Routes history={history} />
          <DevTools />
        </div>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  );
}

ReduxProvider.propTypes = {
  store: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
