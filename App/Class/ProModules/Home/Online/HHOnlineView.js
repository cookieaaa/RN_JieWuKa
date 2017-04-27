/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class HHOnlineView extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.instructions}>
              你好！郭温溪！！！
        </Text>
        <Text style={styles.instructions}>

              我喜欢你！！！
        </Text>

        <Text style={styles.instructions}>
            我们开始吧！！！
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
    color: 'red',
    marginBottom: 5,
  },
});
