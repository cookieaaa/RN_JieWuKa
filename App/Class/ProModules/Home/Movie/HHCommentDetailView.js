/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import HHUserDefaults from './../../../Base/Utils/HHUserDefaults';
export default class HHCommentDetailView extends Component {


   constructor(props) {
       super(props);
      //  HHUserDefaults.setObject('name','xiaohei');


   }



  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.instructions}>
          HHCommentDetailView
        </Text>

      </View>
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
  button: {
      backgroundColor: '#00a6ac',
      justifyContent: 'center',
      alignSelf: 'center',
      width:320-40,
      height:40,
      marginTop:80
  },
  buttonText: {
       textAlign:'center',
       color:'white',

  },
});
