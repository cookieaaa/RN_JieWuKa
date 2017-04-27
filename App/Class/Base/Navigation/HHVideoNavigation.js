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
import HHVideoView from './../../ProModules/Home/Video/HHVideoView';
import HHUtils from './../Utils/HHUtils';


const defaultRoute = {
   component: HHVideoView,
   	title: '视频'
}

export default class HHVideoNavigation extends Component {


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
