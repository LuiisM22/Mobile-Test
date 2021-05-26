import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class InternetStatus extends Component {
  render() {
    return (
      <View>
        <Text> Internet </Text>
        <Icon name="signal" style={{fontSize: 50}} />
      </View>
    );
  }
}
