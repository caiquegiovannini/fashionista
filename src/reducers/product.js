import { GET_PRODUCT, SET_SELECTED_SIZE } from '../actionTypes/product';

const productsInitialState = {
  product: {
    image: '',
    name: '',
    discount_percentage: '',
    regular_price: '',
    actual_price: '',
    installments: '',
    sizes: [],
    loaded: false,
  },
  selectedSize: '',
}

const productReducer = (state = productsInitialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: {
          image: payload.image,
          name: payload.name,
          discount_percentage: payload.discount_percentage,
          regular_price: payload.regular_price,
          actual_price: payload.actual_price,
          installments: payload.installments,
          sizes: payload.sizes,
        }
      };

    case SET_SELECTED_SIZE:
      return {
        ...state,
        selectedSize: payload,
      }

    default:
      return state;
  }
}

export default productReducer;