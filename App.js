import React from 'react';
import { createAppContainer } from 'react-navigation';
import firebase from 'firebase';
import firebaseConfig from './firebase/firebase.config'
import navigationStack from './navigation/navigation.stack'


firebase.initializeApp(firebaseConfig);

const AppContainer = createAppContainer(navigationStack);

export default App = () => {
  return <AppContainer />;
}
