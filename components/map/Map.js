import React, { Component } from 'react';
import { MapView } from 'expo';
import firebase from 'firebase';

export default class Map extends Component {

  componentDidMount(){
    console.log(firebase.auth().currentUser);
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}
