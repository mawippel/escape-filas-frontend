import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './components/login/Login';
import Register from './components/register/Register'
import Map from './components/map/Map'


const RootStack = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    Map: Map
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