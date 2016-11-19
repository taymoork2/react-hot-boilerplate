import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'; // React Router v3
// import { BrowserRouter as Router, Match, Link } from 'react-router'; // React Router v4
import App from './App/App';
import Counter from './Counter/Counter';
import Layout from './Layout/Layout';

export default class Routes extends Component { // React Router v3
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
