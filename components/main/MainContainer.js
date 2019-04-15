import React, { Component } from 'react';
import Map from '../map/Map';
import LineReporter from '../lineReporter/LineReporter';


export default class MainContainer extends Component {
  render() {
    return (
      <>
        <Map />
        <LineReporter />
      </>
    );
  }
}
