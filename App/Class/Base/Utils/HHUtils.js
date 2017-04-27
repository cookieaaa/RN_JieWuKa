/**
 * NetUitl 网络请求的实现
 * @author lidong
 * @date 2016-03-17
 * https://github.com/facebook/react-native
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
import HHButton from './../Components/HHButton'
export default class HHUtils extends Component {



	 static NaviGoBack(navigator) {
			 if (navigator && navigator.getCurrentRoutes().length > 1) {
				 navigator.pop();
				 return true;
			 }
			 return false;
		 }

		 /**
 		  *route :路由栈
 		  *params:导航条对象
 		*/
		static renderScene(route, navigator) {
       let Component = route.component;
       return (
         <Component {...route.params} navigator={navigator} />
       );
    }

    static renderNavBar() {
      const styles = {
        title: {
          flex: 1, alignItems: 'center', justifyContent: 'center'
        },
        button: {
          flex: 1, width: 50, alignItems: 'center', justifyContent: 'center'
        },
        buttonText: {
          fontSize: 18, color: '#FFFFFF', fontWeight: '400'
        }
      }

      var routeMapper = {

        LeftButton(route, navigator, index, navState) {
          if(index > 0) {
            return (
              <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.button}>
                <Text style={styles.buttonText}>Back</Text>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.button}>
                <Text style={styles.buttonText}>Logo</Text>
              </TouchableOpacity>
            );
          }
        },
        RightButton(route, navigator, index, navState) {
          if(index > 0 && route.rightButton) {
            return (
              <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.button}>
                <Text style={styles.buttonText}></Text>
              </TouchableOpacity>
            );
          } else {
            return null
          }

        },
        Title(route, navigator, index, navState) {
          return (
            <View style={styles.title}>
              <Text style={styles.buttonText}>{route.title ? route.title : 'Splash'}</Text>
            </View>
          );
        }
      };

      return (

        <Navigator.NavigationBar
          style={{
            alignItems: 'center',
            backgroundColor: '#00a6ac',
            shadowOffset:{
                width: 1,
                height: 0.5,
            },

            shadowColor: '#55ACEE',
            shadowOpacity: 0.8,
            }}
          routeMapper={routeMapper}
        />
      );
   }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'green',
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
  centerTextStyle:{
    marginTop:27,
  },

  iconImg: {
      width: 30,
      height: 30,
  },
  showText: {
      fontSize: 16,
      color:'white'
  }
});
