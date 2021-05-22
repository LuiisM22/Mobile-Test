import React, {Component} from 'react';
import {Text, View} from 'react-native';
import InternetStatus from '../Manager/InternetStatus';
import BatteryStatus from '../Manager/BatteryStatus';
import TakePicture from '../Actions/TakePicture';
import LoadPicture from '../Actions/LoadPicture';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text> Home </Text>
        <TakePicture />
        <LoadPicture />
      </View>
    );
  }
}
