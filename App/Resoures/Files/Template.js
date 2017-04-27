/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import HHNavigationView from './../../../Base/Components/HHNavigationView';
export default class HHXXXXView extends Component {




 constructor(props, context) {
     super(props, context);

     this.state = {
         isVisible: false,
     };
  }

  _onLeftClick() {

      this.props.navigator.pop();
  }

  _onRightClick() {

  }
  render() {

      return (
//右边按钮导航
        // <View style = {{flex:1}}>
        //       <HHNavigationView
        //           navConfig = {
        //             {
        //              'navType':'rightIconNavBar',
        //              'rightIconPath':'md-home',
        //             //  'rightText':'确定',
        //              'centerText':'附近',
        //             }
        //           }
        //           onRightClick = {this._onRightClick.bind(this)}
        //           onLeftClick = {this._onLeftClick.bind(this)}
        //       >
        //       </HHNavigationView>
        //
        //   </View>



          //左边按钮导航
                  <View style = {{flex:1,backgroundColor:HHConstants.MianColor}}>
                        <HHNavigationView
                            navConfig = {
                              {
                               'navType':'leftIconNavBar',
                               'leftIconPath':'md-home',
                              //  'rightText':'确定',
                               'centerText':'附近',
                              }
                            }
                            onRightClick = {this._onRightClick.bind(this)}
                            onLeftClick = {this._onLeftClick.bind(this)}
                        >
                        </HHNavigationView>

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
});
