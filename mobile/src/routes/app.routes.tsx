import React from 'react';
import {Image} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

import Login from '../pages/Login';
import Onboarding from '../pages/Onboarding';
import SecondOnboarding from '../pages/SecondOnboarding';
import Feed from '../pages/Feed';
import Menu from '../pages/menu';
import CollectionItem from '../pages/CollectionItem';
import Logo from '../assets/logo.png';
const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: true,
      cardStyle: {backgroundColor: '#512DA8'},
    }}
    initialRouteName="Login">
    <App.Screen
      options={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
      }}
      name="Login"
      component={Login}
    />
    <App.Screen
      options={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
      }}
      name="Onboarding"
      component={Onboarding}
    />
    <App.Screen
      options={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
      }}
      name="SecondOnboarding"
      component={SecondOnboarding}
    />
    <App.Screen
      options={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
      }}
      name="Feed"
      component={Feed}
    />
    <App.Screen
      options={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
      }}
      name="Menu"
      component={Menu}
    />
    <App.Screen
      options={{
        headerShown: false,
        headerTransparent: true,
        headerBackTitleVisible: false,
      }}
      name="CollectionItem"
      component={CollectionItem}
    />
  </App.Navigator>
);

export default AppRoutes;
