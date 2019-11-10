import 'react-native';
import React from 'react';
import {ScreenLoading} from '../index';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ScreenLoading />).toJSON();
  expect(tree).toMatchSnapshot();
});
