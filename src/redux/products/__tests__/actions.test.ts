import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import api from '../../../configs/api';
import {PRODUCTS_URL} from '../../../configs/api/routes';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions/types';
import {ProductsStoreType} from '../reducers';
import {getProducts} from '../actions';

const middlewares = [thunk];

const mockApi = new MockAdapter(api);

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

const mockState: {
  products: ProductsStoreType;
} = {
  products: {products: mockProducts, isFetching: false, errorCode: null},
};

const mockStore = configureMockStore(middlewares)(mockState);

describe('products actions', () => {
  beforeEach(() => {
    mockStore.clearActions();
  });

  it('should call actions with data when the result is successful', async () => {
    mockApi.onGet(PRODUCTS_URL).reply(200, mockProducts);

    const expectedActions = [
      {type: GET_PRODUCTS_REQUEST},
      {type: GET_PRODUCTS_SUCCESS, products: mockProducts},
    ];

    // @ts-ignore
    return mockStore.dispatch(getProducts()).then(() => {
      expect(mockStore.getActions()).toEqual(expectedActions);
    });
  });

  it('calls error actions when the data is not fetched properly', async () => {
    const errorCode = 500;

    mockApi.onGet(PRODUCTS_URL).reply(errorCode, undefined);

    const expectedActions = [
      {type: GET_PRODUCTS_REQUEST},
      {type: GET_PRODUCTS_ERROR, errorCode},
    ];

    // @ts-ignore
    return mockStore.dispatch(getProducts()).then(() => {
      expect(mockStore.getActions()).toEqual(expectedActions);
    });
  });
});
