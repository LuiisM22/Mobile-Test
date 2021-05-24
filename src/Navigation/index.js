// import React, {Component} from 'react';
// import {Text, View} from 'react-native';

// export default class Home extends Component {
//   render() {
//     return (
//       <View>
//         <Text> Home </Text>
//         <TakePicture />
//         <LoadPicture />
//       </View>
//<Router>
//<Stack hideNavBar key="root">
//    <Scene hideNavBar key="home" title="Home" component={Home} />
//    <Scene hideNavBar key="camera" title="Camera" component={BatteryStatus} />
//    <Scene
//      hideNavBar
//      key="internet"
//      title="Internet"
//      component={InternetStatus}
//    />
//  </Stack>
//</Router>
//     );
//   }
// }

import * as React from 'react';
import {Scene, Router, Stack} from 'react-native-router-flux';
import {StyleSheet} from 'react-native';
import internetStatus from '../Manager/internetStatus';
import batteryStatus from '../Manager/batteryStatus';
import TakePicture from '../Actions/takePicture';
import LoadPicture from '../Actions/loadPicture';
import Home from '../Home';

function Navigation() {
  return (
    <Router>
      <Stack>
        <Scene hideNavBar key="home" title="Home" component={Home} />
        <Scene
          hideNavBar
          key="battery"
          title="Battery"
          component={batteryStatus}
        />
        <Scene
          hideNavBar
          key="internet"
          title="Internet"
          component={internetStatus}
        />
        <Scene key="load" title="Load" component={LoadPicture} />
        <Scene key="take" title="Take" component={TakePicture} />
      </Stack>
    </Router>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  fontWeight: {
    fontWeight: 'bold',
    fontSize: 23,
  },

  LoginInputs: {
    minWidth: '85%',
    maxWidth: '85%',
    height: 50,
    marginBottom: '5%',
    borderColor: 'gray',
    borderWidth: 3,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  LoginBtn: {
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
  text: {
    fontSize: 30,
    fontWeight: '400',
    marginVertical: '5%',
  },
  SignIn: {
    marginVertical: '10%',
    //paddingVertical: '10%',
  },
  flx: {
    flex: 1,
  },
});
//
export default Navigation;
