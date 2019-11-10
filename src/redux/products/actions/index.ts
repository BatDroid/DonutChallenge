import {Dispatch} from 'redux';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from './types';
import api from '../../../configs/api';
import {PRODUCTS_URL} from '../../../configs/api/routes';

export function getProducts() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
    });
    return api
      .get(PRODUCTS_URL)
      .then(({data}) => {
        if (data) {
          dispatch({
            type: GET_PRODUCTS_SUCCESS,
            products: data,
          });
        }
      })
      .catch(e => {
        dispatch({
          type: GET_PRODUCTS_ERROR,
          errorCode: 500,
        });
      });
  };
}
