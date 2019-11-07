import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {NavigationScreenProp} from 'react-navigation';
import {bindActionCreators, Dispatch} from 'redux';
import {getProductStats as getProductStatsApi} from '../../redux/productStats/actions';
import {StatStoreType} from '../../redux/productStats/reducers';
import {ServerError, ScreenLoading} from '../../components';
import StatItem from './StatItem';

type NavigationParmas = {
  screenTitle: string;
  productId: string;
};
type NavigationType = NavigationScreenProp<Props, NavigationParmas>;

interface Props extends StatStoreType {
  getProductStats: (productId: string) => void;
  navigation: NavigationType;
}

const ProductStats = (props: Props) => {
  const {getProductStats, errorCode, isFetching, stats, navigation} = props;
  useEffect(() => {
    getProductStats(navigation.getParam('productId'));
  }, []);

  if (errorCode) return <ServerError errorMessage="unknown error" />;
  if (isFetching || !stats) return <ScreenLoading />;

  const statsArray = Object.entries(stats);
  return (
    <SafeAreaView>
      {statsArray.map(([key, value]) => (
        <StatItem key={key} title={key} value={value} />
      ))}
    </SafeAreaView>
  );
};

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      getProductStats: getProductStatsApi,
    },
    dispatch,
  );
}

function mapStateToProps({
  productStats: {stats, isFetching, errorCode},
}: {
  productStats: StatStoreType;
}) {
  return {
    stats,
    isFetching,
    errorCode,
  };
}

const Connected: any = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductStats);

Connected.navigationOptions = ({navigation}: {navigation: NavigationType}) => ({
  title: navigation.getParam('screenTitle'),
});

export default Connected;
