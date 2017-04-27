/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,

} from 'react-native';
import HHConstants from './../../../Base/Constants/HHConstants';
import HHButton from './../../../Base/Components/HHButton';
import HHVideoListView from './HHVideoListView';


export default class HHVideoView extends Component {

    constructor(props) {
        super(props);
       //  HHUserDefaults.setObject('name','xiaohei');


    }


  buttonOnClick(tag){
    // console.log(tag);
    // Alert.alert('你点击了：'+tag);

    this.props.navigator.push({
        component: HHVideoListView,
        title: '电影详情页面'
    });

  }
  render() {
    return (

       <ScrollView>
      <View style={styles.container}>
          <View style={styles.oneRowStyle}>
              <View style={{flex:1}}>
                  <HHButton
                    showText={'Breaking'}
                    tag={'Breaking'}
                    backgroundColor={'#00a6ac'}
                    textColor={'white'}
                    height={HHConstants.DeviceHeight/5}
                    onClick={this.buttonOnClick.bind(this)}
                  >
                  </HHButton>
              </View>



          </View>

          <View style={styles.secondRowStyle}>


              <View style={{flex:1}}>

                  <HHButton
                    showText={'Locking'}
                    tag={'Locking'}
                    backgroundColor={'green'}
                    textColor={'white'}
                    height={HHConstants.DeviceHeight/8}
                    onClick={this.buttonOnClick}
                  >
                  </HHButton>
                  <HHButton
                    showText={'Jazz'}
                    tag={'Jazz'}
                    backgroundColor={'gray'}
                    textColor={'white'}
                    height={HHConstants.DeviceHeight/8}
                    onClick={this.buttonOnClick}
                  >
                  </HHButton>

              </View>


              <View style={{flex:1}}>
                    <HHButton
                      showText={'HipHop'}
                      tag={'HipHop'}
                      backgroundColor={'pink'}
                      textColor={'white'}
                      height={HHConstants.DeviceHeight/4}
                      onClick={this.buttonOnClick}
                    >
                    </HHButton>

              </View>
          </View>

          <View style={styles.thirdRowStyle}>

                <View style={{flex:1}}>

                    <HHButton
                      showText={'Poping'}
                      tag={'Poping'}
                      backgroundColor={'purple'}
                      textColor={'white'}
                      height={HHConstants.DeviceHeight/4}
                      onClick={this.buttonOnClick}
                    >
                    </HHButton>


                </View>


                <View style={{flex:1}}>
                      <HHButton
                        showText={'House'}
                        tag={'House'}
                        backgroundColor={'red'}
                        textColor={'white'}
                        height={HHConstants.DeviceHeight/8}
                        onClick={this.buttonOnClick}
                      >
                      </HHButton>


                      <HHButton
                        showText={'regge'}
                        tag={'regge'}
                        backgroundColor={'gray'}
                        textColor={'white'}
                        height={HHConstants.DeviceHeight/8}
                        onClick={this.buttonOnClick}
                      >
                      </HHButton>

                </View>

          </View>


          <View style={styles.fourthRowStyle}>

          </View>


      </View>

       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection:'column'
  },
  oneRowStyle:{
    width:HHConstants.DeviceWidth-20,
    height:HHConstants.DeviceHeight/5,
    marginTop:20,
    backgroundColor:'red',
    flexDirection:'row',
    justifyContent: 'flex-start',
  },

  secondRowStyle:{
    width:HHConstants.DeviceWidth-20,
    height:HHConstants.DeviceHeight/4,
    marginTop:10,
    backgroundColor:'red',
    flexDirection:'row',
    justifyContent: 'flex-start',
  },

  thirdRowStyle:{
    width:HHConstants.DeviceWidth-20,
    height:HHConstants.DeviceHeight/4,
    marginTop:10,
    backgroundColor:'red',
    flexDirection:'row',
    justifyContent: 'flex-start',
  },
  fourthRowStyle:{
    width:HHConstants.DeviceWidth-20,
    height:HHConstants.DeviceHeight/4,
    marginTop:10,
    backgroundColor:'red'
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
  buttonText: {
       textAlign:'center',
       color:'white',

  },
});
