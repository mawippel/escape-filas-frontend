import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './components/login/Login';


const RootStack = createStackNavigator(
  {
    Login: Login
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}