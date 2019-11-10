import 'react-native';
import React from 'react';
import {ServerError} from '../index';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<ServerError errorMessage="Unknown Error" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
