import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes/index';

const App: React.FC = () => (
  <NavigationContainer>
    <View style={{backgroundColor: '#512DA8', flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#512DA8" />
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
