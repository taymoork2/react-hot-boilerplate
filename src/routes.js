import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router'; // eslint-disable-line no-unused-vars
import { Layout } from './Containers';
import { App, Counter } from './Components';

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout
        routes={[
          {
            pattern: '/',
            exactly: true,
            component: App,
          },
          {
            pattern: '/counter',
            component: Counter,
          },
        ]}
      />
    </BrowserRouter>
  );
}
