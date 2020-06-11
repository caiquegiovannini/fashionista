import { combineReducers } from 'redux';

import cartReducer from './cart';
import productsReducer from './products';
import productReducer from './product';

const appReducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  product: productReducer,
});

export default appReducers;