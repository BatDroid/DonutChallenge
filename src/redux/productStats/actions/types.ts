export const GET_STATS_REQUEST = 'GET_STATS_REQUEST';
export const GET_STATS_SUCCESS = 'GET_STATS_SUCCESS';
export const GET_STATS_ERROR = 'GET_STATS_ERROR';

export interface StatsType {
  open: string;
  high: string;
  low: string;
  volume: string;
  last: string;
  volume_30day: string;
}

export interface StatActionType {
  stats: StatsType;
  isFetching: boolean;
  errorCode: number;
}

export interface StatAction extends StatActionType {
  type:
    | typeof GET_STATS_REQUEST
    | typeof GET_STATS_SUCCESS
    | typeof GET_STATS_ERROR;
}
