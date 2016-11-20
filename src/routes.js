import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory } from 'react-router'; // React Router v3
// import { BrowserRouter as Router, Match, Link } from 'react-router'; // React Router v4
import { Layout } from './Containers';
import { App, Counter } from './Components';

export default class Routes extends Component { // React Router v3
  // Replace browserHistory with hashHistory (for static hosting sites like github pages or surge)
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={App} />
          <Route path="counter" component={Counter}/>
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
