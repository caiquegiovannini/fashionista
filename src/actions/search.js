import { SEARCH_ITEMS } from '../actionTypes/search';

export const searchItems = (input, products) => {
  return {
    type: SEARCH_ITEMS,
    payload: {
      input,
      products,
    },
  }
}