import React, { Component } from 'react';
import { history } from './Store/store';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'; // React Router v3
// import { BrowserRouter as Router, Match, Link } from 'react-router'; // React Router v4
import { Layout } from './Containers';
import { App, Counter } from './Components';

export default class Routes extends Component { // React Router v3
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={App} />
          <Route path="counter" component={Counter}/>
          <Redirect path="*" to="/" />
        </Route>
      </Router>
    );
  }
}

/* export default class Routes extends Component { // React Router v4
  render() {
    return (
      <Router>
        <Match exactly pattern="/" component={App} />
        <Match pattern="/counter" component={Counter} />
      </Router>
    );
  }
} */
