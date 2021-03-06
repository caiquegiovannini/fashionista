import { GET_PRODUCT, SET_SELECTED_SIZE, RESET_SELECTED_SIZE } from '../actionTypes/product';

export const getProduct = (product) => {
  return {
    type: GET_PRODUCT,
    payload: product,
  }
}

export const setSelectedSize = (size) => {
  return {
    type: SET_SELECTED_SIZE,
    payload: size,
  }
}

export const resetSelectedSize = () => {
  return {
    type: RESET_SELECTED_SIZE,
  }
}