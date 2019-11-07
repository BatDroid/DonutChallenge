import {combineReducers} from 'redux';
import {
  StatsType,
  GET_STATS_SUCCESS,
  GET_STATS_REQUEST,
  GET_STATS_ERROR,
  StatAction,
} from '../actions/types';

function statReducer(state: StatsType | null = null, action: StatAction) {
  switch (action.type) {
    case GET_STATS_SUCCESS:
      return action.stats;
    default:
      return state;
  }
}

function isFetchingReducer(state: boolean = false, action: StatAction) {
  switch (action.type) {
    case GET_STATS_REQUEST:
      return true;
    case GET_STATS_SUCCESS:
    case GET_STATS_ERROR:
      return false;
    default:
      return state;
  }
}

function errorReducer(state: number | null = null, action: StatAction) {
  switch (action.type) {
    case GET_STATS_REQUEST:
    case GET_STATS_SUCCESS:
      return null;
    case GET_STATS_ERROR:
      return action.errorCode;
    default:
      return state;
  }
}

export interface StatStoreType {
  errorCode: number | null;
  isFetching: boolean;
  stats: StatsType | null;
}

export default combineReducers({
  stats: statReducer,
  isFetching: isFetchingReducer,
  errorCode: errorReducer,
});
