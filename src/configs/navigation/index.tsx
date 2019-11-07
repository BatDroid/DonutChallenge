import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import screens from './screens';
import Products from '../../screens/Products';
import ProductStats from '../../screens/ProductStats';

const AppNavigator = createStackNavigator(
  {
    [screens.products]: Products,
    [screens.product_stats]: ProductStats,
  },
  {
    initialRouteName: screens.products,
  },
);

export default createAppContainer(AppNavigator);
