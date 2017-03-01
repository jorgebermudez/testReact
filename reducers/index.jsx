import { combineReducers } from 'redux';
import ventas from './ventas';
import pagos from './pagos';

const rootReducer = combineReducers({
  ventas,
  pagos
});

export default rootReducer;
