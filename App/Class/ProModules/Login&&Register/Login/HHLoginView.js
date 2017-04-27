/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  AsyncStorage,
  Image,
  View
} from 'react-native';
import HHAppGuideView from './../../../Base/Components/HHAppGuideView';
import HHImageButton from './../../../Base/Components/HHImageButton';
import HHPhoneRegisterView from './../Register/HHPhoneRegisterView';
import HHUtils from './../../../Base/Utils/HHUtils';
import HHUserDefaults from './../../../Base/Utils/HHUserDefaults';
import HHConstants from './../../../Base/Constants/HHConstants';
import HHMainScreen from './../../../../../HHMainScreen';
import Popup from 'rn-popup'
import Button from 'apsl-react-native-button'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'
import Video from 'react-native-video';
export default class HHLoginView extends Component {


  _openPopUp() {
   this.setState({
     isVisible: true
   });
  }

  _closePopUp() {
   this.setState({
     isVisible: false
   });


   console.log(23213123);
  }

   constructor(props) {
       super(props);
       this.state={status:0};
       this.state={buttonType:'weixin'};

       HHUserDefaults.setObject('FirstLancher','hjsjhd');
   }
   componentWillMount(){


    // let obj = HHUserDefaults.getObject('FirstLancher');
    //  console.log('compeng===='+obj);
    //  console.log('compeng===='+JSON.stringify(obj));
    //  HHUserDefaults.getObject('FirstLancher');






    //  if(isFirst ==="yes"){
    //     HHUserDefaults.setObject('FirstLancher','yes');
    //     console.log('第一次启动');
    //  } else {
    //    console.log('不是第一次启动');
    //  }

   }


  _onMenuClick(title, tag) {

    switch (tag) {
      case 'weibo':

          this.setState({
                status:1
            });

        break;
      case 'weixin':
         this.setState({
            buttonType:'weixin'
         });
         this._openPopUp();
          break;
      case 'phone':

            this.props.navigator.push({
                component: HHPhoneRegisterView,
                title: '电影详情页面'
            })
          break;
      case 'qq':
         this.setState({
            buttonType:'qq'
          });
          this._openPopUp();
          break;
      default: this._closePopUp();

    }
  }
  render() {


    if (this.state.status==1) {
        return<HHMainScreen/>;


    } else if (this.state.status==2) {


    }  else {
       if (this.state.buttonType==='qq') {
         return (
            <View style={styles.container}>
              <Video source={{uri: "moments"}} // Can be a URL or a local file.
                     rate={1.0}                   // 0 is paused, 1 is normal.
                     volume={1.0}                 // 0 is muted, 1 is normal.
                     muted={false}                // Mutes the audio entirely.
                     paused={false}               // Pauses playback entirely.
                     resizeMode="cover"           // Fill the whole screen at aspect ratio.
                     repeat={true}                // Repeat forever.
                     onLoadStart={this.loadStart} // Callback when video starts to load
                     onLoad={this.setDuration}    // Callback when video loads
                     onProgress={this.setTime}    // Callback every ~250ms with currentTime
                     onEnd={this.onEnd}           // Callback when playback finishes
                     onError={this.videoError}    // Callback when video cannot be loaded
                     style={styles.backgroundVideo} />
               <View style={styles.tittleView}>
                 <View style={{width:80,borderWidth:0.5,borderColor:'#ccc'}}/>
                 <Text style={{color:'#7f7f7f',fontSize:12,padding:10}}>请选择登录方式</Text>
                 <View style={{width:80,borderWidth:0.5,borderColor:'#ccc'}}/>
               </View>

               <View style={styles.menuView}>
                   <HHImageButton renderIcon={require('./../../../../Resoures/Images/home_icons/wdgz.png')}
                               showText={''} tag={'weibo'}
                               onClick={this._onMenuClick.bind(this)}/>
                   <HHImageButton renderIcon={require('./../../../../Resoures/Images/home_icons/wlcx.png')}
                               showText={''} tag={'weixin'}
                               onClick={this._onMenuClick.bind(this)}/>
                   <HHImageButton renderIcon={require('./../../../../Resoures/Images/home_icons/cz.png')}
                               showText={''} tag={'phone'}
                               onClick={this._onMenuClick.bind(this)}/>
                   <HHImageButton renderIcon={require('./../../../../Resoures/Images/home_icons/dyp.png')}
                               showText={''} tag={'qq'}
                               onClick={this._onMenuClick.bind(this)}/>
               </View>

                <View style={styles.agreemView}>
                   <Text style={{color:'#7f7f7f',fontSize:12,padding:10}}>登录即代表你同意XX服务和隐私条款</Text>
                </View>

                <Popup isVisible={this.state.isVisible} duration={300} entry={'top'} exit={'bottom'}
                   popupConfig={{
                     backgroundColor:'white',
                     justifyContent:'center',
                     borderRadius:10,
                     marginHorizontal:20,
                     padding:20
                   }}

                   parentConfig={{
                     justifyContent:'center',
                   }}
                 >

                    <Image style={styles.image} source={{uri: 'http://img5.imgtn.bdimg.com/it/u=649785815,1828996386&fm=21&gp=0.jpg'}} />
                       <Text style={styles.instructions}>这是弹出框</Text>
                       <Text style={styles.instructions}>这是弹出框</Text>
                       <Text style={styles.instructions}>这是弹出框</Text>
                       <Text style={styles.instructions}>这是弹出框</Text>
                       <Text style={styles.instructions}>这是弹出框</Text>
                       <Text style={styles.instructions}>这是弹出框</Text>
                     <Button textStyle={{textAlign: 'center'}} onPress={() => this._closePopUp()} buttonType='primary'>关闭</Button>
                </Popup>

             </View>
         );
       } else if(this.state.buttonType==='weixin'){
         return (
            <View style={styles.container}>
                <Video source={{uri: "moments"}} // Can be a URL or a local file.
                       rate={1.0}                   // 0 is paused, 1 is normal.
                       volume={1.0}                 // 0 is muted, 1 is normal.
                       muted={false}                // Mutes the audio entirely.
                       paused={false}               // Pauses playback entirely.
                       resizeMode="cover"           // Fill the whole screen at aspect ratio.
                       repeat={true}                // Repeat forever.
                       onLoadStart={this.loadStart} // Callback when video starts to load
                       onLoad={this.setDuration}    // Callback when video loads
                       onProgress={this.setTime}    // Callback every ~250ms with currentTime
                       onEnd={this.onEnd}           // Callback when playback finishes
                       onError={this.videoError}    // Callback when video cannot be loaded
                       style={styles.backgroundVideo} />
                   <View style={styles.tittleView}>
                 <View style={{width:80,borderWidth:0.5,borderColor:'white'}}/>
                 <Text style={{color:'white',fontSize:12,padding:10}}>请选择登录方式</Text>
                 <View style={{width:80,borderWidth:0.5,borderColor:'white'}}/>
               </View>


               <View style={styles.menuView}>
                   <HHImageButton renderIcon={require('./../../../../Resoures/Images/home_icons/wdgz.png')}
                               showText={''} tag={'weibo'}
                               onClick={this._onMenuClick.bind(this)}/>
                   <HHImageButton renderIcon={require('./../../../../Resoures/Images/home_icons/wlcx.png')}
                               showText={''} tag={'weixin'}
                               onClick={this._onMenuClick.bind(this)}/>
                   <HHImageButton renderIcon={require('./../../../../Resoures/Images/home_icons/cz.png')}
                               showText={''} tag={'phone'}
                               onClick={this._onMenuClick.bind(this)}/>
                   <HHImageButton renderIcon={require('./../../../../Resoures/Images/home_icons/dyp.png')}
                               showText={''} tag={'qq'}
                               onClick={this._onMenuClick.bind(this)}/>
               </View>

                <View style={styles.agreemView}>
                   <Text style={{color:'white',fontSize:12,padding:10}}>登录即代表你同意XX服务和隐私条款</Text>
                </View>



                <Popup isVisible={this.state.isVisible} duration={300} entry={'bottom'} exit={'bottom'}
                   popupConfig={{
                     backgroundColor:'white',
                     justifyContent:'center',
                     borderRadius:0,
                     marginHorizontal:0,
                     padding:20
                   }}

                   parentConfig={{
                     justifyContent:'flex-end',
                   }}
                 >

                   <View style={styles.menuView}>
                     <HHImageButton renderIcon={require('./../../../../Resoures/Images/home_icons/wdgz.png')}
                                 showText={''} tag={'weibo1'}
                                 onClick={this._onMenuClick.bind(this)}/>
                     <HHImageButton renderIcon={require('./../../../../Resoures/Images/home_icons/wlcx.png')}
                                 showText={''} tag={'weixin1'}
                                 onClick={this._onMenuClick.bind(this)}/>
                     <HHImageButton renderIcon={require('./../../../../Resoures/Images/home_icons/cz.png')}
                                 showText={''} tag={'phone1'}
                                 onClick={this._onMenuClick.bind(this)}/>
                     <HHImageButton renderIcon={require('./../../../../Resoures/Images/home_icons/dyp.png')}
                                 showText={''} tag={'qq1'}
                                 onClick={this._onMenuClick.bind(this)}/>
                  </View>
                </Popup>

             </View>
         );
       }


    }

  }
}
const styles = StyleSheet.create({


    agreemView: {
      justifyContent: 'center',
      alignItems: 'center',
      height:50,
      width:240
    },
    tittleView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height:50,
      width:240

    },

    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom:100,
      height:HHConstants.DeviceHeight,

    },
    menuView: {

        flexDirection: 'row',
        paddingLeft:30,
        paddingRight:30,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
});
