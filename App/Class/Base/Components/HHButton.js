/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component ,PropTypes} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet

} from 'react-native';

import Constants from '../Constants/HHConstants';

export default class HHButton extends Component {


  static propTypes = {

       showText: PropTypes.string,  // 显示标题\文字
       tag: PropTypes.string,  // Tag
       onClick: PropTypes.func, // 回调函数
       backgroundColor:PropTypes.string,
       borderRadius:PropTypes.number,
       height:PropTypes.number,
       width:PropTypes.number,
       textColor:PropTypes.string,
   };

   constructor(props) {
       super(props);
       this._onClick = this._onClick.bind(this);  // 需要在回调函数中使用this,必须使用bind(this)来绑定
   }

   _onClick() {
       if (this.props.onClick) {   // 在设置了回调函数的情况下
           this.props.onClick(this.props.tag);  // 回调Title和Tag
       }
   }

   render() {
       return (
           <TouchableOpacity style =
           {
             [

               styles.button,
              {backgroundColor:this.props.backgroundColor},
              {borderRadius:this.props.borderRadius},
              {height:this.props.height},
              {width:this.props.width}
              ]
            }

           onPress={this._onClick}
           >

                   <Text style={styles.buttonText}>{this.props.showText}</Text>

           </TouchableOpacity>
       );
   }



}

const styles =StyleSheet.create({

  button: {
      backgroundColor: '#d03b3e',
      justifyContent: 'center',
      alignItems: 'center',
  },
  buttonText: {
       textAlign:'center',
       color:'white',
  },
});
