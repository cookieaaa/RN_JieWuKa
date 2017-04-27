/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    TouchableOpacity,
    StyleSheet,
    Navigator,
    View,
  Text
} from 'react-native';
import HHMineView from './../../ProModules/Home/Mine/HHMineView';
import HHUtils from './../Utils/HHUtils';


const defaultRoute = {
   component: HHMineView,
   	title: '我的'
}

export default class HHMineNavigation extends Component {


  constructor(props) {
      super(props);

  }

  render() {
    return (
      <Navigator
        initialRoute={defaultRoute}
        renderScene={HHUtils.renderScene}
        // sceneStyle={{paddingTop: (Platform.OS === 'android' ? 66 : 64)}}
        // navigationBar={HHUtils.renderNavBar()}
      />

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
