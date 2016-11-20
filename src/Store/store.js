import { applyMiddleware, createStore, combineReducers } from 'redux';
import { browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware, push } from 'react-router-redux';
import thunk from 'redux-thunk';
import * as reducers from '../Reducers';
import { ReduxDevTools as DevTools} from '../Components';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

export const store = createStore(
  reducer,
  applyMiddleware(thunk, routerMiddleware(browserHistory)),
  DevTools.instrument()
);

export const history = syncHistoryWithStore(browserHistory, store)
