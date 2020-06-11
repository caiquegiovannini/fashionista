import { ADD_ITEM, INCREASE_ITEM, DECREASE_ITEM, REMOVE_ITEM } from '../actionTypes/cart';

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item,
  }
}

export const increaseItem = itemId => {
  return {
    type: INCREASE_ITEM,
    payload: itemId,
  }
}

export const decreaseItem = itemId => {
  return {
    type: DECREASE_ITEM,
    payload: itemId,
  }
}

export const removeItem = itemId => {
  return {
    type: REMOVE_ITEM,
    payload: itemId,
  }
}