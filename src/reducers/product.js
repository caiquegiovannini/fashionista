import { GET_PRODUCT, SET_SELECTED_SIZE, RESET_SELECTED_SIZE } from '../actionTypes/product';

const productsInitialState = {
  product: {
    image: '',
    name: '',
    discount_percentage: '',
    regular_price: '',
    actual_price: '',
    installments: '',
    sizes: [],
  },
  selectedSize: {},
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
          quantity: 1,
        }
      };

    case SET_SELECTED_SIZE: {
      const sizeInfo = {
        size: payload.size,
        sku: payload.sku,
      }

      return {
        ...state,
        selectedSize: {
          ...sizeInfo,
        },
      };
    }

    case RESET_SELECTED_SIZE:
      return {
        ...state,
        selectedSize: {},
      }

    default:
      return state;
  }
}

export default productReducer;