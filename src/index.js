import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./Components/App/App', () => {
    const Hot = require('./Components/App/App').default;
    ReactDOM.render(
      <Hot />,
      document.getElementById('root')
    );
  });
}