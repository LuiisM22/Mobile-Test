import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {BatteryStatus, internetStatus} from '../../Manager';
export default class TakePicture extends Component {
  render() {
    return (
      <View style={styles.home}>
        <Text> Home </Text>
        <BatteryStatus />

        <TouchableOpacity onPress={() => onTake()}>
          <Text style={styles.Botton}>Clear</Text>
        </TouchableOpacity>
        <View style={styles.pictureFrame}>
          <TouchableOpacity onPress={() => onLoad()}>
            <Text style={styles.Botton}>Load Picture from Galery</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottonsFrame}>
          <TouchableOpacity onPress={() => onLoad()}>
            <Text style={styles.Bottons}>Load Picture from Galery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onLoad()}>
            <Text style={styles.Bottons}>Load Picture from Galery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onLoad()}>
            <Text style={styles.Bottons}>Load Picture from Galery</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    color: 'black',
    fontSize: 15,
    padding: '2%',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    // paddingHorizontal: '28%',
  },
  pictureFrame: {
    // backgroundColor: 'red',
    flex: 1,
    // flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    color: 'black',
    fontSize: 15,
    // minWidth: '85%',
    padding: '2%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bottonsFrame: {
    flexDirection: 'row',
    color: 'black',
    fontSize: 15,
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: '33%',
    paddingVertical: '2%',
    // marginVertical: '2%',
    // marginHorizontal: '15%',
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
  Bottons: {
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
    marginHorizontal: '5%',
    paddingHorizontal: '15%',
    paddingVertical: '10%',
  },
});
