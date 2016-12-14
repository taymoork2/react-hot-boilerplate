import React, { Component, PropTypes } from 'react';
import { Match, Miss, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { RoutesProvider, MatchWithRoutes } from 'react-router-addons-routes';
import Helmet from 'react-helmet';
import { Layout } from './Containers';
import { App, Counter } from './Components';

class Routes extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          pattern: `${process.env.PUBLIC_URL}/`,
          exactly: true,
          title: 'App',
          component: App,
        },
        {
          pattern: `${process.env.PUBLIC_URL}/Counter`,
          title: 'Counter',
          component: Counter,
        },
      ],
    };
  }

  render() {
    const routes = this.state.routes;

    return (
      <ConnectedRouter history={this.props.history}>
        <RoutesProvider routes={routes}>
          <Layout>
            {routes.map((route, index) => <Route key={index} route={route} />)}
            <Miss component={() => <Redirect to="/" />} />
          </Layout>
        </RoutesProvider>
      </ConnectedRouter>
    );
  }
}

const Route = ({ route }) => (
  <span>
    <Match {...route} render={() => <Helmet title={route.title} />} />
    <MatchWithRoutes {...route} />
  </span>
);

// Typechecking (Proptypes) is required for all Comoponents that have props
// It is disabled on this file because object is the correct type
// ESlint format says otherwise (but even they say it's not a hard rule to follow)
Route.propTypes = {
  route: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Routes;
