import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import * as reducers from '../Reducers';
import { ReduxDevTools as DevTools } from '../Components';

export const history = createBrowserHistory();

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});

export const store = () => {
  if (process.env.NODE_ENV !== 'production') {
    return createStore(
      reducer,
      compose(
        applyMiddleware(
          thunk,
          routerMiddleware(history),
        ),
        DevTools.instrument(),
      ),
    );
  }

  return createStore(
    reducer,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
      ),
    ),
  );
};
