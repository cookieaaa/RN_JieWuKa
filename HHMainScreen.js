/**
 * Created by yuanguozheng on 16/1/19.
 */
'use strict';

import React, { Component } from 'react';
import{
   AppRegistry,
   StyleSheet,
   Text,
   Navigator,
   Platform,
   View
} from 'react-native';

import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

import Icon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import HHTabBar from './App/Class/Base/Components/HHTabBar';
import HHCompetitionNavigation from './App/Class/Base/Navigation/HHCompetitionNavigation';
import HHMineNavigation from './App/Class/Base/Navigation/HHMineNavigation';
import HHVideoNavigation from './App/Class/Base/Navigation/HHVideoNavigation';
import HHFindNavigation from './App/Class/Base/Navigation/HHFindNavigation';
import HHOnlineNavigation from './App/Class/Base/Navigation/HHOnlineNavigation';



export default class HHMainScreen extends Component {

  constructor(props) {
  super(props);

      this.state = {
        tabNames: ['赛事','视频','', '发现', '我的'],
        tabIconNames: ['md-home', 'md-grid', 'md-time', 'md-cart', 'md-contact'],


      };
  }

// tabIconNames: ['ios-home', 'ios-grid', 'ios-time', 'ios-cart', 'ios-contact'],

render() {
  let tabNames = this.state.tabNames;
  let tabIconNames = this.state.tabIconNames;
  return (

    <ScrollableTabView
      // renderTabBar={() => <ScrollableTabBar/>}
      renderTabBar={() => <HHTabBar tabNames={tabNames} tabIconNames={tabIconNames}/>}

      tabBarPosition='bottom'

      onChangeTab={
        (obj) => {
          console.log('选择了第几' + obj.i);
        }
      }

      onScroll={
        (position) => {
          // console.log('滑动了第几页' + position);
        }
      }
      locked={true}
      initialPage={0}

      prerenderingSiblingsNumber={1}
      >


      <HHCompetitionNavigation tabLabel='HHCompetitionNavigation' style={styles.center} />

      <HHVideoNavigation tabLabel='HHVideoNavigation' style={styles.center}/>

       <HHOnlineNavigation tabLabel='HHOnlineNavigation' style={styles.center}/>

       <HHFindNavigation tabLabel='HHFindNavigation' style={styles.center}/>

       <HHMineNavigation tabLabel='HHMineNavigation' style={styles.center} bottomBarHiden={this.state.bottomBarHiden}/>


    </ScrollableTabView>
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
  center: {
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
});
