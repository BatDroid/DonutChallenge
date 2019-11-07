import {Dispatch} from 'redux';
import {GET_STATS_REQUEST, GET_STATS_SUCCESS, GET_STATS_ERROR} from './types';
import api from '../../../configs/api';
import {getProductsStatsUrl} from '../../../configs/api/routes';

export function getProductStats(productId: string) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: GET_STATS_REQUEST,
    });
    api
      .get(getProductsStatsUrl(productId))
      .then(({data}) => {
        if (data) {
          dispatch({
            type: GET_STATS_SUCCESS,
            stats: data,
          });
        }
      })
      .catch(e => {
        dispatch({
          type: GET_STATS_ERROR,
          errorCode: 500,
        });
      });
  };
}
