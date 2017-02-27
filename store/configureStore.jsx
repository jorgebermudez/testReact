import {compose, createStore } from 'redux';
import persistState from 'redux-localstorage'// for local storage
// cargamos nuestros reducers (ya combinados) de reducers/index.js
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const enhancer = compose(
    persistState(/*paths, config*/),
  );
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
