import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './LoginScreen';
import MainScreen from './MainScreen';
import CameraScreen from './CameraScreen';

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
});
const AppStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header: null
    }
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      header: null
    }
  },
});

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRoutename: 'Auth'
  })
);
