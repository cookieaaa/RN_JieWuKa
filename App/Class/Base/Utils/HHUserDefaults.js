/**
 * Created by chenyupeng on 16/6/9.
 */
import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';

let HHUserDefaults = {
  //保存数据
  setObject(key,object){
      AsyncStorage.setItem(key, JSON.stringify(object), () => {});
  },

  //获取数据
  getObject(key){


  let vaules =  AsyncStorage.getItem(key);
    //  console.log('Error:' +JSON.stringify(vaules));
      return vaules;

    },


    clearCachedObject: (key) => {
        return AsyncStorage.removeItem(key);
    },
}

export default HHUserDefaults;
