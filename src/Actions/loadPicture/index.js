import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
const onLoad = () => {
  // Keyboard.dismiss();
  Actions.pop();
  Actions.save();
};

export default class loadPicture extends Component {
  render() {
    return (
      <View style={styles.pictureFrame}>
        <TouchableOpacity onPress={() => onLoad()}>
          <Text style={styles.Botton}>Device Picture Gallery</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    marginHorizontal: '6%',
    marginVertical: '6%',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
