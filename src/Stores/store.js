import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
// import { routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import * as reducers from '../Reducers';
// import { ReduxDevTools as DevTools } from '../Components';

const reducer = combineReducers({
  ...reducers,
  // routing: routerReducer,
});

export default function configStore(initalstate) {
  if (process.env.NODE_ENV !== 'production') {
    return createStore(
      reducer,
      initalstate,
      compose(
        applyMiddleware(thunk),
        // DevTools.instrument(),
      ),
    );
  }

  return createStore(
    reducer,
    initalstate,
    compose(applyMiddleware(thunk)),
  );
}
