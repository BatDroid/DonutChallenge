import {combineReducers} from 'redux';
import products from './products/reducers';
import productStats from './productStats/reducers';

export default combineReducers({
  products,
  productStats,
});
