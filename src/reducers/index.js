import { combineReducers } from 'redux';

import cartReducer from './cart';
import searchReducer from './search';
import productsReducer from './products';
import productReducer from './product';

const appReducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  product: productReducer,
  search: searchReducer,
});

export default appReducers;