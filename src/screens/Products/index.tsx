import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {NavigationScreenProp} from 'react-navigation';
import {getProducts as getProuctsApi} from '../../redux/products/actions';
import {ProductsStoreType} from 'src/redux/products/reducers';
import {ServerError, ScreenLoading} from '../../components';
import ProductsList from './ProductsList';
import screens from '../../configs/navigation/screens';

interface Props extends ProductsStoreType {
  getProducts: Function;
  navigation: NavigationScreenProp<{}>;
}

const Products = (props: Props) => {
  const {getProducts, errorCode, isFetching, products, navigation} = props;
  useEffect(() => {
    getProducts();
  }, []);

  if (errorCode) return <ServerError errorMessage="unknown error" />;
  if (isFetching || !products) return <ScreenLoading />;

  return (
    <SafeAreaView>
      <ProductsList
        data={products}
        onItemPressed={product => {
          navigation.navigate(screens.product_stats, {
            productId: product.id,
            screenTitle: product.display_name
          })
        }}
      />
    </SafeAreaView>
  );
};

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      getProducts: getProuctsApi,
    },
    dispatch,
  );
}

function mapStateToProps({
  products: {products, isFetching, errorCode},
}: {
  products: ProductsStoreType;
}) {
  return {
    products,
    isFetching,
    errorCode,
  };
}

const Connected: any = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);

Connected.navigationOptions = {
  title: 'Products',
};

export default Connected;
