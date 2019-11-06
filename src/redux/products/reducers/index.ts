import {combineReducers} from 'redux';
import {
  ProductAction,
  ProductType,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_ERROR,
} from '../actions/types';

function productsReducer(
  state: ProductType[] | null = null,
  action: ProductAction,
) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return action.products;
    default:
      return state;
  }
}

function isFetchingReducer(state: boolean = false, action: ProductAction) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return true;
    case GET_PRODUCTS_SUCCESS:
    case GET_PRODUCTS_ERROR:
      return false;
    default:
      return state;
  }
}

function errorReducer(state: number | null = null, action: ProductAction) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
    case GET_PRODUCTS_SUCCESS:
      return null;
    case GET_PRODUCTS_ERROR:
      return action.errorCode;
    default:
      return state;
  }
}

export interface ProductsStoreType {
  errorCode: number | null;
  isFetching: boolean;
  products: ProductType[] | null;
}

export default combineReducers({
  products: productsReducer,
  isFetching: isFetchingReducer,
  errorCode: errorReducer,
});
