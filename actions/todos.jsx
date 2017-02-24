import * as types from '../constants/ActionTypes';

export function addVenta(description,price) {
  return { type: types.ADD_VENTA, description, price  };
}
