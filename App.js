import React, {Component} from 'react';
import {Text, Modal, View} from 'react-native';
import {Scene, Router, Stack, Tabs} from 'react-native-router-flux';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Navigation from './src/Navigation';

export default class App extends Component {
  render() {
    return (
      <>
        <Navigation />
      </>
    );
  }
}
