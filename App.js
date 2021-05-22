import React, {Component} from 'react';
import {Text, Modal, View} from 'react-native';
import {Scene, Router, Stack, Tabs} from 'react-native-router-flux';
// import Icon from 'react-native-vector-icons/FontAwesome';
import BatteryStatus from './src/Manager/BatteryStatus';
import InternetStatus from './src/Manager/InternetStatus';
import Home from './src/Navigation/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack hideNavBar key="root">
          <Scene hideNavBar key="home" title="Home" component={Home} />
          <Scene
            hideNavBar
            key="camera"
            title="Camera"
            component={BatteryStatus}
          />
          <Scene
            hideNavBar
            key="internet"
            title="Internet"
            component={InternetStatus}
          />
        </Stack>
      </Router>
    );
  }
}
