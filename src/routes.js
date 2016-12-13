import React, { Component, PropTypes } from 'react';
import { BrowserRouter, HashRouter, Match, Miss, Redirect } from 'react-router'; // eslint-disable-line no-unused-vars
import { RoutesProvider, MatchWithRoutes } from 'react-router-addons-routes';
import MemoryRouter from 'react-router-addons-controlled/ControlledMemoryRouter'; // eslint-disable-line no-unused-vars
import Helmet from 'react-helmet';
import { Layout } from './Containers';
import { App, Counter } from './Components';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {
          pattern: `${process.env.PUBLIC_URL}/`,
          exactly: true,
          component: App,
          title: 'App',
        },
        {
          pattern: `${process.env.PUBLIC_URL}/Counter`,
          component: Counter,
          title: 'Counter',
        },
      ],
    };
  }

  render() {
    const routes = this.state.routes;

    return (
      <BrowserRouter>
        <RoutesProvider routes={routes}>
          <Layout>
            {routes.map((route, index) => <Route key={index} route={route} />)}
            <Miss component={() => <Redirect to="/" />} />
          </Layout>
        </RoutesProvider>
      </BrowserRouter>
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
