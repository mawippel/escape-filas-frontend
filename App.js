import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './components/login/Login';
import Register from './components/register/Register'
import Map from './components/map/Map'
import firebase from 'firebase';


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

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_77lDDol5am29eEt06IQ90WMbkRcZyw4",
  authDomain: "escape-filas.firebaseapp.com",
  databaseURL: "https://escape-filas.firebaseio.com",
  projectId: "escape-filas",
  storageBucket: "escape-filas.appspot.com",
  messagingSenderId: "891946065112"
};

firebase.initializeApp(firebaseConfig);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}