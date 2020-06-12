import { GET_PRODUCTS } from '../actionTypes/products';

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    payload: products,
  }
}