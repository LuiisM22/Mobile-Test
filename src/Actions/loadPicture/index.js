import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class loadPicture extends Component {
  render() {
    return (
      <View>
        <Text>Load Picture from Galery</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Load: {
    backgroundColor: '#211F1F',
    borderColor: 'white',
    borderRadius: 10,
    color: 'white',
    fontSize: 15,
    padding: '2%',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    minWidth: '85%',
  },
});
