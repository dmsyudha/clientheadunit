import React from 'react';
// import {StyleSheet, Platform, Image, Text, View} from 'react-native';

// import the different screens
import Loading from './Loading';
import SignUp from './SignUp';
import Login from './Login';
import Main from './Main';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const RootStack = createStackNavigator({
  Loading: {
    screen: Loading,
  },
  Main: {
    screen: Main,
  },
  Signup: {
    screen: SignUp,
  },
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
  initialRouteName: Loading,
});

const App = createAppContainer(RootStack);

export default App;
