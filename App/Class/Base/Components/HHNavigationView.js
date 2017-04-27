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
  Image,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

export default class HHNavigationView extends Component {

  constructor(props) {
      super(props);
      this._onLeftClick = this._onLeftClick.bind(this);
      this._onRightClick = this._onRightClick.bind(this);  // 需要在回调函数中使用this,必须使用bind(this)来绑定
  }

  _onLeftClick() {
      const {onLeftClick} = this.props;
      if (this.props.onLeftClick) {   // 在设置了回调函数的情况下
          this.props.onLeftClick();  // 回调Title和Tag

          RCTDeviceEventEmitter.emit('BAR_HIDDEN',false);
      }
  }
  _onRightClick() {
      const {onRightClick} = this.props;
      if (this.props.onRightClick) {   // 在设置了回调函数的情况下
          this.props.onRightClick();  // 回调Title和Tag
      }
  }
  render() {

  const {navConfig} = this.props;
//创建左右都是按钮的Nav
  if (this.props.navConfig.navType==='iconNavBar') {
    return (
      <View style={styles.container}>
            <TouchableOpacity style={styles.leftButtonStyle} onPress={this._onLeftClick}>
                <View style={{alignItems:'center',flex:1}}>
                  <Icon
                    name={this.props.navConfig.leftIconPath} //
                    size={30}
                    color={"#55ACEE"}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.centerButtomStyle} onPress={this._onClick}>
                <View style={{alignItems:'center',flex:1}}>
                     <Text style={styles.showText}>{this.props.navConfig.centerText}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.rightButtonStyle} onPress={this._onRightClick}>
                <View style={{alignItems:'center',flex:1}}>

                    <Icon
                      name={this.props.navConfig.rightIconPath} //
                      size={30}
                      color={"#55ACEE"}/>
                    </View>
            </TouchableOpacity>
       </View>

  );
  //创建左边图标右边文字按钮的Nav
} else if(this.props.navConfig.navType==='leftIconNavBar'){
  return (<View style={styles.container}>
              <TouchableOpacity style={styles.leftButtonStyle} onPress={this._onLeftClick}>
                  <View style={{alignItems:'center',flex:1}}>

                    <Icon
                      name={this.props.navConfig.leftIconPath} //
                      size={30}
                      color={"white"}/>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.centerButtomStyle} onPress={this._onClick}>

                       <Text style={styles.showText}>{this.props.navConfig.centerText}</Text>

              </TouchableOpacity>

              <TouchableOpacity  style={styles.rightButtonStyle} onPress={this._onRightClick}>
                      <Text style={styles.showText}>{this.props.navConfig.rightText}</Text>

              </TouchableOpacity>
         </View>);
  //创建右边图标左边文字按钮的Nav
  } else if(this.props.navConfig.navType==='rightIconNavBar'){
    return (<View style={styles.container}>
                <TouchableOpacity style={styles.leftButtonStyle} onPress={this._onLeftClick}>
                    <View style={{alignItems:'center',flex:1}}>
                       <Text style={styles.showText}>{this.props.navConfig.leftText}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.centerButtomStyle2} onPress={this._onClick}>

                         <Text style={styles.showText}>{this.props.navConfig.centerText}</Text>

                </TouchableOpacity>

                <TouchableOpacity  style={styles.rightButtonStyle} onPress={this._onRightClick}>
                    <View style={{alignItems:'center',flex:1}}>
                        <Icon
                          name={this.props.navConfig.rightIconPath} //
                          size={30}
                          color={"#55ACEE"}/>
                        </View>
                </TouchableOpacity>
           </View>);

   } else if(this.props.navConfig.navType==='textNavBar'){
     return (<View style={styles.container}>
                 <TouchableOpacity style={styles.leftButtonStyle} onPress={this._onLeftClick}>

                        <Text style={styles.showText}>{this.props.navConfig.leftText}</Text>

                 </TouchableOpacity>
                 <TouchableOpacity style={styles.centerButtomStyle} onPress={this._onClick}>

                          <Text style={styles.showText}>{this.props.navConfig.centerText}</Text>

                 </TouchableOpacity>

                 <TouchableOpacity style={styles.rightButtonStyle} onPress={this._onLeftClick}>

                        <Text style={styles.showText}>{this.props.navConfig.rightText}</Text>

                 </TouchableOpacity>
            </View>);

    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00a6ac',
    height:64
  },
  rightButtonStyle:{
    marginRight:10,
    marginTop:27,
  },
  leftButtonStyle:{
    marginLeft:10,
    marginTop:27,
  },
  centerButtomStyle:{
    marginTop:7,
    marginLeft:-30,
    justifyContent: 'center',
  },

  centerButtomStyle2:{
    marginTop:7,
    marginLeft:30,
    justifyContent: 'center',
  },

  iconImg: {
      width: 30,
      height: 30,
  },
  showText: {
      fontSize: 18,
      color:'white',
      textAlign:'center',
  }
});
