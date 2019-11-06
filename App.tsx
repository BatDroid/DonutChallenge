import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import store from './src/configs/redux/store';
import RootNavigation from './src/configs/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <RootNavigation />
    </Provider>
  );
};

export default App;
