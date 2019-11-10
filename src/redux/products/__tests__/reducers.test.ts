import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions/types';
import {productsReducer, isFetchingReducer, errorReducer} from '../reducers';

const mockProducts = [
  {
    id: 'EOS-BTC',
    base_currency: 'EOS',
    quote_currency: 'BTC',
    base_min_size: '0.10000000',
    base_max_size: '5000.00000000',
    quote_increment: '0.00000100',
    base_increment: '0.10000000',
    display_name: 'EOS/BTC',
    min_market_funds: '0.001',
    max_market_funds: '30',
    margin_enabled: false,
    post_only: false,
    limit_only: true,
    cancel_only: false,
    status: 'online',
    status_message: '',
  },
];

describe('products reducers', () => {
  it('productsReducer should return products hen there is Sucess', async () => {
    //todo: fix type issues
    //@ts-ignore
    const reducer = productsReducer(null, {
      type: GET_PRODUCTS_SUCCESS,
      products: mockProducts,
    });
    expect(reducer).toEqual(mockProducts);
  });

  it('isFetching Reducer should return proper status based on Actions', async () => {
    //@ts-ignore
    const requestingReducer = isFetchingReducer(false, {
      type: GET_PRODUCTS_REQUEST,
    });
    expect(requestingReducer).toEqual(true);
    //@ts-ignore
    const gettingDataReducer = isFetchingReducer(false, {
      type: GET_PRODUCTS_SUCCESS,
      products: mockProducts,
    });
    expect(gettingDataReducer).toEqual(false);

    //@ts-ignore
    const errorReducer = isFetchingReducer(false, {
      type: GET_PRODUCTS_ERROR,
      errorCode: 500,
    });
    expect(errorReducer).toEqual(false);
  });

  it('error Reducer should return proper status based on Actions', async () => {
    //@ts-ignore
    const requestingReducer = errorReducer(false, {
      type: GET_PRODUCTS_REQUEST,
    });
    expect(requestingReducer).toEqual(null);
    //@ts-ignore
    const gettingDataReducer = errorReducer(false, {
      type: GET_PRODUCTS_SUCCESS,
      products: mockProducts,
    });
    expect(gettingDataReducer).toEqual(null);

    //@ts-ignore
    const onError = errorReducer(false, {
      type: GET_PRODUCTS_ERROR,
      errorCode: 500,
    });
    expect(onError).toEqual(500);
  });
});
