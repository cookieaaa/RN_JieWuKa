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

import Icon from 'react-native-vector-icons/Ionicons';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'
export default class HHTabBar extends Component {


    static propTypes = {

        goToPage: React.PropTypes.func, //
	    	activeTab: React.PropTypes.number, //
		    tabs: React.PropTypes.array, //

		    tabNames: React.PropTypes.array, //
		    tabIconNames: React.PropTypes.array, //


    }  //
    constructor(props){
      super(props);


      this.state = {
        bottomBarHidden:false,

      };

    }


    render() {

      if (!this.state.bottomBarHidden) {
        return (
              <View style={styles.tabs}>
                    {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
              </View>
        );
      } else {
        return (
              <View/>
        );
      }

    }

    componentWillUnmount(){
        this.listener.remove();
    };
    componentDidMount() {

      if (!this.listener==null) {
           this.listener.remove();
      }


      this.listener = RCTDeviceEventEmitter.addListener('BAR_HIDDEN',(value)=>{
        // 接受到通知后的处理
        console.log('value==='+value);

         if (value) {
              this.setState({bottomBarHidden:true});
         } else {
              this.setState({bottomBarHidden:false});
         }
      });

	     this.props.scrollValue.addListener(this.setAnimationValue);
	}

    setAnimationValue({value}) {

	}


    renderTabOption(tab, i) {
		let color = this.props.activeTab == i ? "#00a6ac" : "#ADADAD"; // å¤æ­iæ¯å¦æ¯å½åéä¸­çtabï¼è®¾ç½®ä¸åçé¢è²
		return (
			<TouchableOpacity onPress={()=>this.props.goToPage(i)} style={styles.tab} key={tab}>
				<View style={styles.tabItem}>
					<Icon
						name={this.props.tabIconNames[i]} // å¾æ 
						size={30}
						color={color}/>
					<Text style={{color: color}}>
						{this.props.tabNames[i]}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}


}

const styles = StyleSheet.create({
    tabs: {
		flexDirection: 'row',
		height: 50,
	},

	tab: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	tabItem: {
		flexDirection: 'column',
		alignItems: 'center',
	},

});
