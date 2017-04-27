/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,props} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
// import HHUserDefaults from './../../../Base/Utils/HHUserDefaults';
import HHNavigationView from './../../../../Class/Base/Components/HHNavigationView';
import HHConstants from './../../../Base/Constants/HHConstants';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'
export default class HHPhoneRegisterView extends Component {


   constructor(props) {
       super(props);
      //  HHUserDefaults.setObject('name','xiaohei');


   }

   _onLeftClick() {

       this.props.navigator.pop();

   }

   _onRightClick() {

   }

  render() {

    return (
      <View>
                <HHNavigationView
                    navConfig = {
                      {
                       'navType':'leftIconNavBar',
                       'leftIconPath':'ios-arrow-back',
                      //  'rightText':'确定',
                       'centerText':'手机注册',
                      }
                    }
                    onLeftClick = {this._onLeftClick.bind(this)}

                >
                </HHNavigationView>
              <View style={{height:HHConstants.DeviceHeight,backgroundColor:'white'}}>


               <View style={styles.cityViewContainer}>

                        <Text style = {{paddingLeft:10}}>
                          国家和地区
                        </Text>

                    <Text style = {{paddingRight:10}}>
                     中国
                    </Text>

               </View>
               <View style={{width:HHConstants.DeviceWidth,borderWidth:0.3,borderColor:'#ccc'}}/>
               <View style={styles.cityViewContainer}>

                     <View style={styles.cityViewContainer}>
                         <Text style = {{paddingLeft:10}}>
                           +    86
                         </Text>

                            <TextInput style = {styles.inputs}
                                                            returnKeyType = "search"
                                                            placeholder= "请输入手机号"
                                                           keyboardType="number-pad"
                                                            />



                     </View>

               </View>
              <View style={{width:HHConstants.DeviceWidth,borderWidth:0.3,borderColor:'#ccc'}}/>

              <View style={styles.cityViewContainer}>
                       <View style={styles.cityViewContainer}>
                           <Text style = {{paddingLeft:10}}>
                             验证码
                           </Text>

                              <TextInput style = {styles.inputs}
                                                              returnKeyType = "search"
                                                              placeholder= "请输入验证码"
                                                              keyboardType="number-pad"
                                                            />


                       </View>

                       <TouchableOpacity style= {styles.validateButton}>
                             <Text style={styles.buttonText}> 发验证码</Text>
                       </TouchableOpacity>

               </View>

               <View style={{width:HHConstants.DeviceWidth,borderWidth:0.3 ,borderColor:'#ccc'}}/>


                <TouchableOpacity style= {styles.button}>
                      <Text style={styles.buttonText}> 确定</Text>
                </TouchableOpacity>

           </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  cityViewContainer: {
   flexDirection:'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   height:50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
      width:HHConstants.DeviceWidth-40,
      height:40,
      marginTop:80
  },
  buttonText: {
       textAlign:'center',
       color:'white',

  },
  validateButton: {
      backgroundColor: '#00a6ac',
      justifyContent: 'center',
      width:80,
      height:40,
      paddingRight:10
  },


  inputs: {

       width:200,
       paddingLeft: 35,
       borderColor: '#CCC',
       borderRadius: 4,


   },
});
