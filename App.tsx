import React from 'react';
import {Provider} from 'react-redux';
import store from './src/configs/redux/store';
import RootNavigation from './src/configs/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
