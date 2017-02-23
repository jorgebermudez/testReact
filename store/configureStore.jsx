import { createStore } from 'redux';
// cargamos nuestros reducers (ya combinados) de reducers/index.js
import rootReducer from '../reducers';

//  +++++++++++++++ POSIBLE ERROR ++++++++++++++++++++++++
//Prestar atencion a que pasa el parametro inicial store y en la documentacion
//https://medium.com/react-redux/introducci%C3%B3n-a-redux-js-8bdf4fe0751e#.itl3gw7s7
// es distinto
//  POSIBLE ERROR

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
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
