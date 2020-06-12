import { SEARCH_ITEMS } from '../actionTypes/search';

const searchInitialState = {
  items: [],
  input: '',
}

const searchReducer = (state = searchInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_ITEMS: {
      let itemsSearched = payload.products.filter(product => {
        const name = product.name.toLowerCase();
        return name.includes(payload.input.toLowerCase());
      });

      return {
        ...state,
        items: itemsSearched,
        input: payload.input,
      }
    }

    default:
      return state;
  }
}

export default searchReducer;