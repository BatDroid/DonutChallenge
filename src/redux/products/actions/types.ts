export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

export interface ProductType {
  id: string;
  base_currency: string;
  quote_currency: string;
  base_min_size: string;
  base_max_size: string;
  quote_increment: string;
  base_increment: string;
  display_name: string;
  min_market_funds: string;
  max_market_funds: string;
  margin_enabled: boolean;
  post_only: boolean;
  limit_only: boolean;
  cancel_only: boolean;
  status: string;
  status_message: string;
}

export interface ProductActionType {
  products: ProductType[];
  isFetching: boolean;
  errorCode: number;
}

export interface ProductAction extends ProductActionType {
  type:
    | typeof GET_PRODUCTS_REQUEST
    | typeof GET_PRODUCTS_SUCCESS
    | typeof GET_PRODUCTS_ERROR;
}
