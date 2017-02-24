import { combineReducers } from 'redux';
import ventas from './ventas';
import pagos from './pagos';
import todos from './todos';

const rootReducer = combineReducers({
    todos,
    ventas,
    pagos
});

export default rootReducer;
