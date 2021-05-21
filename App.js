import React, {Component} from 'react';
import {Text, View} from 'react-native';
// import {Scene, Router} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text> Mobile Test </Text>
        <Icon name="user" style={{fontSize: 50}} />
      </View>
    );
  }
}
