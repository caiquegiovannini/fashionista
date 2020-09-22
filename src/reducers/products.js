import { GET_PRODUCTS } from '../actionTypes/products';

const productsInitialState = {
  products: [],
}

const productsReducer = (state = productsInitialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
}

export default productsReducer;