/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component,PropTypes } from 'react';
import {
  View,
     ListView,
     Image,
     Text,
     TouchableOpacity,
     TouchableHighlight,
     StyleSheet,
     Alert,
     ScrollView,
     Dimensions,
 InteractionManager
} from 'react-native';
import HHButton from './../../../Base/Components/HHButton';
import HHItemCell from './../../../Base/Components/HHItemCell';
import HHStyleSheet from './../../../Base/StyleSheet/HHStyleSheet';

import Button from 'apsl-react-native-button';
import HHLoginNavigation from './../../../Base/Navigation/HHLoginNavigation';
import HHNavigationView from './../../../Base/Components/HHNavigationView';
import HHConstants from './../../../Base/Constants/HHConstants';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';


import RCTRefreshControl from 'react-refresh-control';


export default class HHMineView extends Component {

  constructor(props) {
       super(props)
       this.state = {status:0}
       console.log('this.props.route111===='+this.props.navigator.route);

   }
   _onLeftClick() {

       this.props.navigator.pop();
   }

   _onRightClick() {

   }
   render() {
     if (this.state.status==1) {

       return(<HHLoginNavigation/>);

     } else {

       return (


         <View style = {{flex:1,backgroundColor:HHConstants.MianColor}}>
               <HHNavigationView
                   navConfig = {
                     {
                      'navType':'rightIconNavBar',
                      'rightIconPath':'md-home',
                     //  'rightText':'确定',
                      'centerText':'我的',
                     }
                   }
                   onRightClick = {this._onRightClick.bind(this)}

               >
               </HHNavigationView>
               <ScrollView>
                 <View>
                     <TouchableHighlight underlayColor='transparent'>
                         <View style={Styles.tweetContainer}>
                             <Image source={{uri: 'http://lorempixel.com/68/68/people/7/'}} style={Styles.avatar} />
                             <View style={Styles.rightContainer}>
                                 <View style={Styles.userContainer}>
                                     <Text style={Styles.name}>昵称: HiApp</Text>
                                 </View>
                                 <Text style={[Styles.time, Styles.ponit]}>分数: 100</Text>
                             </View>
                         </View>
                     </TouchableHighlight>
                     <HHItemCell
                         onPress={this._gotoView.bind(this, 'feedback')}
                         showDisclosureIndicator={true}
                         showBottomBorder={false}
                         iconStyle={itemCellColor.feedbackIcon}
                         containerStyle={itemCellColor.container}
                         icon={require('./../../../../Resoures/Images/tabs/cart_focus.png')}
                        >
                         商城
                     </HHItemCell>
                     <HHItemCell
                         showDisclosureIndicator={true}
                         showBottomBorder={false}
                         iconStyle={itemCellColor.languageIcon}
                         containerStyle={itemCellColor.container}
                         icon={require('./../../../../Resoures/Images/tabs/cart_focus.png')}
                        >
                         语言
                     </HHItemCell>
                     <HHItemCell
                         onPress={this._gotoView.bind(this, 'about')}
                         showDisclosureIndicator={true}
                         showBottomBorder={false}
                         iconStyle={itemCellColor.aboutIcon}
                         containerStyle={itemCellColor.container}
                          icon={require('./../../../../Resoures/Images/tabs/cart_focus.png')}
                         >
                         关于
                     </HHItemCell>
                     <HHItemCell
                         onPress={this._gotoView.bind(this, 'about')}
                         showDisclosureIndicator={true}
                         showBottomBorder={false}
                         iconStyle={itemCellColor.aboutIcon}
                         containerStyle={itemCellColor.container}
                          icon={require('./../../../../Resoures/Images/tabs/cart_focus.png')}
                         >
                         关于
                     </HHItemCell>
                     <HHItemCell
                         onPress={this._gotoView.bind(this, 'about')}
                         showDisclosureIndicator={true}
                         showBottomBorder={false}
                         iconStyle={itemCellColor.aboutIcon}
                         containerStyle={itemCellColor.container}
                          icon={require('./../../../../Resoures/Images/tabs/cart_focus.png')}
                         >
                         关于
                     </HHItemCell>
                     <HHItemCell
                         onPress={this._gotoView.bind(this, 'about')}
                         showDisclosureIndicator={true}
                         showBottomBorder={false}
                         iconStyle={itemCellColor.aboutIcon}
                         containerStyle={itemCellColor.container}
                          icon={require('./../../../../Resoures/Images/tabs/cart_focus.png')}
                         >
                         关于
                     </HHItemCell>
                     <HHItemCell
                         onPress={this._gotoView.bind(this, 'about')}
                         showDisclosureIndicator={true}
                         showBottomBorder={false}
                         iconStyle={itemCellColor.aboutIcon}
                         containerStyle={itemCellColor.container}
                          icon={require('./../../../../Resoures/Images/tabs/cart_focus.png')}
                         >
                         关于
                     </HHItemCell>
                     <Button
                         style={Styles.logoutButton}
                         textStyle={Styles.logoutButtonFontsize}
                         onPress = {this.onClick.bind(this)}
                      >
                         退出
                     </Button>
                 </View>
                 </ScrollView>
           </View>

       )
     }
   }

   onClick(){

       RCTDeviceEventEmitter.emit('BAR_HIDDEN',true);
       this.props.navigator.replace({
           component: HHLoginNavigation,
           title: '电影详情页面',

       })
   };
   _gotoView(view) {

       this.props.navigator.push({
           title: capitalize(view),
           id: view
       })
   }
}

const itemCellColor = {
    container: HHStyleSheet.HHitemCell,
    feedbackIcon: {
        backgroundColor: '#38b57f'
    },
    languageIcon: {
        backgroundColor: '#9b59b6'
    },
    aboutIcon: {
        backgroundColor: '#5999f3'
    }
}

const Styles = StyleSheet.create({
    tweetContainer: {
        ...HHStyleSheet.HHitemCell,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 4,
        paddingBottom: 10
    },
    avatar: {
        backgroundColor: 'gray',
        width: 50,
        height: 50,
        marginLeft: 10,
        borderRadius: 4
    },
    userContainer: {
        flexDirection: 'row'
    },
    time: {
        marginLeft: 4,
        fontSize: 13,
        color: '#8999a5',
        marginTop: 2
    },
    name: {
        fontWeight: '600',
        fontSize: 15
    },
    rightContainer: {
        flex: 1,
        padding: 10
    },
    ponit: {
        marginLeft: 0
    },
    logoutButton: {
        backgroundColor: '#ff3b30',
        borderWidth: 0,
        margin: 10,
        marginTop: 20
    },
    logoutButtonFontsize: {
        fontSize: 18,
        color: 'white'
    }
})
