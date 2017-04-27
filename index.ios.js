// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  */
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//
// } from 'react-native';
//
// // import HHMainScreen from './HHMainScreen';
// // import HHLoginView from './App/Class/ProModules/Login&&Register/Login/HHLoginView';
//
// import HHLoginNavigation from './App/Class/Base/Navigation/HHLoginNavigation';
//
//
//
// AppRegistry.registerComponent('RN_Moviepa', () => HHLoginNavigation);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert, Image } from 'react-native';

import HHLoginNavigation from './App/Class/Base/Navigation/HHLoginNavigation';
// import HHAppGuideView from './App/Class/Base/Components/HHAppGuideView'
import AppIntro from 'react-native-app-intro';
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pic: {
    width: 75 * 2,
    height: 63 * 2,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  info: {
    flex: 0.5,
    alignItems: 'center',
    padding: 40
  },
  title: {
    color: '#fff',
    fontSize: 30,
    paddingBottom: 20,
  },
  description: {
    color: '#fff',
    fontSize: 20,
  },
});

class RN_JiewuKa extends Component {


  constructor(props){
        super(props);
        this.state = {stuaes:1};
    }

  onSkipBtnHandle = (index) => {
    Alert.alert('Skip');
    console.log(index);


  }
  doneBtnHandle = () => {
    this.setState({
          stuaes:2
      });
  }
  nextBtnHandle = (index) => {
    Alert.alert('Next');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }

  render() {
    if (this.state.stuaes==2) {
        return<HHLoginNavigation/>;
    } else {
      return (


        <AppIntro
          onNextBtnClick={this.nextBtnHandle}
          onDoneBtnClick={this.doneBtnHandle}
          onSkipBtnClick={this.onSkipBtnHandle}
          onSlideChange={this.onSlideChangeHandle}
        >
        <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>


         </View>
         <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>


         </View>
         <View style={[styles.slide, { backgroundColor: '#406E9F' }]}>



         </View>
         <View style={[styles.slide, { backgroundColor: '#DB4302' }]}>

           </View>

        </AppIntro>
      );
    }

  }
}

AppRegistry.registerComponent('RN_JiewuKa', () => RN_JiewuKa);
