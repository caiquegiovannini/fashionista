import { ADD_ITEM } from '../actionTypes/cart';

const cartInitialState = {
  items: [],
  quantity: 0,
}

const cartReducer = (state = cartInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM: {
      return {
        ...state,
        items: [
          ...state.items,
          payload,
        ],
      }
    }

    default:
      return state;
  }
}

export default cartReducer;