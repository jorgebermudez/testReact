// cargamos el método de Redux para
// poder combinar reducers
import { combineReducers } from 'redux';

const initialStatePagos = [
  {name: "SamsungGalaxi", mount: "$49.99", id:"99"},
  {name: "iphone"       , mount: "$9.99",  id:"100"},
  {name: "asus"         , mount: "$29.99", id:"101"}
];

export default function pagos(state = [], action) {
  switch(action.type) {
  case 'ADD_PAGO':
    // creamos una copia del state actual
    const copy = Array.from(state);
    // modificamos lo que necesitamos
    copy.push({
              name: action.name,
              mount: action.mount,
              id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
            });
    // retornamos el nuevo state
    return copy;
  default:
    // si el action.type no existe o no concuerda
    // con ningunos de los casos definidos
    // devolvemos el estado sin modificar
    return state;
  }
}
