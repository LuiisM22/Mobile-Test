import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Keyboard} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {BatteryStatus, InternetStatus} from '../../Manager';

const onNext = () => {
  Keyboard.dismiss();
  // Actions.pop();
  Actions.save();
};

const onClear = () => {
  // Keyboard.dismiss();
  // Actions.pop();
  Actions.refresh();
};

const onFlip = () => {
  // Keyboard.dismiss();
  // Actions.pop();
  Actions.refresh();
};

const onTake = () => {
  // Keyboard.dismiss();
  // Actions.pop();
  Actions.refresh();
};

export default class TakePicture extends Component {
  render() {
    return (
      <View style={styles.home}>
        {/* <Text> Home </Text> */}
        <View style={styles.headerFrame}>
          <View>
            <BatteryStatus />
            <InternetStatus />
          </View>
          <TouchableOpacity style={styles.end} onPress={() => onClear()}>
            <Text style={styles.Botton}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pictureFrame}>
          {/* <TouchableOpacity onPress={() => onLoad()}>
            <Text style={styles.Botton}>Load Picture from Galery</Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.bottonsFrame}>
          <TouchableOpacity onPress={() => onFlip()}>
            <Text style={styles.Bottons}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onTake()}>
            <Text style={styles.Bottons}>Take Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onNext()}>
            <Text style={styles.Bottons}>Next</Text>
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
  headerFrame: {
    // backgroundColor: 'red',
    padding: '2%',
    flexDirection: 'row',
    marginHorizontal: '5%',
    // alignContent: 'flex-end',
    justifyContent: 'space-between',
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
  end: {
    justifyContent: 'flex-end',
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
    minWidth: '1%',
    minHeight: '5%',
    marginVertical: '5%',
    paddingHorizontal: '5%',
    paddingVertical: '1%',
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
    minWidth: '80%',
    minHeight: '10%',
    marginVertical: '5%',
    marginHorizontal: '5%',
    paddingHorizontal: '15%',
    paddingVertical: '5%',
  },
});
