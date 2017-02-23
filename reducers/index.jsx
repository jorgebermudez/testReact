import { combineReducers } from 'redux';
import todos from './todos';
import ventas from './ventas';
import pagos from './pagos';

const rootReducer = combineReducers({
    todos,
    ventas,
    pagos
});

export default rootReducer;
