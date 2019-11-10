import 'react-native';
import React from 'react';
import thunk from 'redux-thunk';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import {act} from 'react-test-renderer';
import {waitForElement} from '@testing-library/react-native';
import {render} from 'react-native-testing-library';
import Products from '../index';
import {ProductsStoreType} from '../../../redux/products/reducers';
import {ScreenLoading, ServerError} from '../../../components';
import ProductsList from '../ProductsList';
import store from '../../../configs/redux/store';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

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

describe('Products Screen', () => {
  it('renders correctly when component is Fetching Data', () => {
    const mockState: {
      products: ProductsStoreType;
    } = {
      products: {products: null, isFetching: true, errorCode: null},
    };

    const Component = shallow(<Products store={mockStore(mockState)} />)
      .dive()
      .dive();

    expect(Component.find(ScreenLoading)).toHaveLength(1);
    expect(toJson(Component.dive())).toMatchSnapshot();
  });

  it('renders correctly when component is throwing Error', () => {
    const mockState: {
      products: ProductsStoreType;
    } = {
      products: {products: null, isFetching: false, errorCode: 500},
    };

    const Component = shallow(<Products store={mockStore(mockState)} />)
      .dive()
      .dive();

    expect(Component.find(ServerError)).toHaveLength(1);
    expect(toJson(Component.dive())).toMatchSnapshot();
  });

  it('renders correctly when component recieves the data', () => {
    const mockState: {
      products: ProductsStoreType;
    } = {
      products: {products: mockProducts, isFetching: false, errorCode: null},
    };

    const Component = shallow(<Products store={mockStore(mockState)} />)
      .dive()
      .dive();

    expect(Component.find(ProductsList)).toHaveLength(1);
    expect(toJson(Component)).toMatchSnapshot();
  });

  it('renders properly when is Fetching data and showing data when data is recieved', async () => {
    const {getAllByType} = render(<Products store={store} />);
    await act(async () => {
      await waitForElement(() => getAllByType(ScreenLoading));
      expect(getAllByType(ScreenLoading)).toBeTruthy();
      await waitForElement(() => getAllByType(ProductsList));
      expect(getAllByType(ProductsList)).toBeTruthy();
    });
  });
});
