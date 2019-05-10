import React from 'react';
import { createAppContainer } from 'react-navigation';
import { StatusBar } from 'react-native'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import firebaseConfig from './firebase/firebase.config'
import navigationStack from './navigation/navigation.stack'
import lineReportReducer from './store/reducers/lineReport';

// Firebase config
firebase.initializeApp(firebaseConfig);

// Navigation config
const AppContainer = createAppContainer(navigationStack);

// Redux config
const rootReducer = combineReducers({
  lineReporter: lineReportReducer
});

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
));

export default App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor='white' barStyle="dark-content" />
      <AppContainer />
    </Provider>
  );
}
