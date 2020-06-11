import { ADD_ITEM } from '../actionTypes/cart';

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item,
  }
}