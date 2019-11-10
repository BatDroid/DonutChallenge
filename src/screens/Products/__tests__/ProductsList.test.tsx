import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {render, fireEvent} from 'react-native-testing-library';
import ProductsList from '../ProductsList';

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

describe('Products List', () => {
  const onItemPressed = jest.fn();

  it('renders correctly', () => {
    const Component = shallow(
      <ProductsList data={mockProducts} onItemPressed={onItemPressed} />,
    );
    expect(toJson(Component)).toMatchSnapshot();
  });

  it('returns the pressed Item data when it is pressed', () => {
    const {getByText} = render(
      <ProductsList data={mockProducts} onItemPressed={onItemPressed} />,
    );
    const selectedItem = mockProducts[0];
    fireEvent.press(getByText(selectedItem.display_name));
    expect(onItemPressed).toHaveBeenCalledWith(selectedItem);
  });
});
