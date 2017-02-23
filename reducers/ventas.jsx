// cargamos el método de Redux para
// poder combinar reducers
import { combineReducers } from 'redux';


const initialStateVentas = [
  {description: "SamsungGalaxi", price: "$49.99" , id:"1"},
  {description: "iphone", price: "$9.99" , id:"2"},
  {description: "asus sen phone", price: "$29.99", id:"3"},
  {description: "dist", price: "$99.99" , id:"4"},
  {description: "casa", price: "$399.99", id:"5"},
  {description: "perro", price: "$199.99" , id:"7"}
];


export default function ventas(state = initialStateVentas, action) {
  switch(action.type) {
  case 'ADD_VENTA':
    // creamos una copia del state actual
    let copy = Array.from(state);
    // modificamos lo que necesitamos
    copy.push({
              description: action.description,
              price: action.price,
              id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
            });
    // retornamos el nuevo state
    return copy;
  default:
    return state;
  }
}
