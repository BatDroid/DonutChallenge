import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import screens from './screens';
import Products from '../../screens/Products';

const AppNavigator = createStackNavigator(
  {
    [screens.products]: Products,
  },
  {
    initialRouteName: screens.products,
  },
);

export default createAppContainer(AppNavigator);
