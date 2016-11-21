import React, { Component, PropTypes, contextType } from 'react';
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'; // React Router v3
// import { BrowserRouter as Router, Match, Link, IndexRoute, Redirect } from 'react-router'; // React Router v4
import { Layout } from './Containers';
import { App, Counter } from './Components';

export default class Routes extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={App} />
          <Route path="counter" component={Counter} />
          <Redirect path="*" to="/" />
        </Route>
      </Router>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object.isRequired
};
