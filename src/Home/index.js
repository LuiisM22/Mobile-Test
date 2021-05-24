import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Keyboard} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default () => {
  const onLoad = () => {
    Keyboard.dismiss();
    Actions.load();
  };
  const onTake = () => {
    Keyboard.dismiss();
    Actions.take();
  };
  return (
    <View style={styles.home}>
      <Text> Home </Text>
      {/* <LoadPicture /> */}
      <TouchableOpacity onPress={() => onTake()}>
        <Text style={styles.Botton}>Take new Picture</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onLoad()}>
        <Text style={styles.Botton}>Load Picture from Galery</Text>
      </TouchableOpacity>
      {/* <TakePicture /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    color: 'black',
    fontSize: 15,
    padding: '2%',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: '28%',
  },
  Botton: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    color: 'black',
    fontSize: 15,
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    minWidth: '85%',
    marginVertical: '5%',
    paddingHorizontal: '15%',
    paddingVertical: '10%',
  },
});
