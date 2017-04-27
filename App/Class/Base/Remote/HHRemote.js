/**
 * NetUitl 网络请求的实现
 * @author lidong
 * @date 2016-03-17 
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';

let URL = 'http://api.aiyep.com/';

class HHRemote extends Component {


//   //post请求
//   /**
//   *url :请求地址
//   *data:参数
//   *callback:回调函数
//   */
//   static  remoteByPost(url, data, callback) {

//       var fetchOptions = {
//         method: 'POST',
//         headers: {
      
//         },
//         url = 'http://www.baidu.com',
//       };

//       fetch(url, fetchOptions)
//       .then((response) => response.text())
//       .then((responseText) => {
//         callback(JSON.parse(responseText));
//       }).done();
//     }
//   /**
//   *url :请求地址
//   *data:参数(Json对象)
//   *callback:回调函数
//   */
// static postJson (url, data, callback) {
//     var fetchOptions = {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         //json形式
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     };

//   fetch(url, fetchOptions)
//     .then((response) => response.text())
//     .then((responseText) => {
//       callback(JSON.parse(responseText));
//     }).done();
//   }
//   //get请求
//   /**
//   *url :请求地址
//   *callback:回调函数
//   */
//   static  get(url, callback) {
//       fetch(url)
//       .then((response) => response.text())
//       .then((responseText) => {
//         callback(JSON.parse(responseText));
//       }).done();
//     }


/**
  *requestModules :请求模块地址
  *params:请求参数
*/
static getURL(requestModulesURL,params){

      URL = URL+requestModulesURL;

      if (params) {
        let paramsArray = []
        Object.keys(params).
        forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])))
        if (URL.search(/\?/) === -1) {
            URL += '?' + paramsArray.join('&')
        } else {
            URL += '&' + paramsArray.join('&')
        }
      }

      console.info('URL===='+URL);


    return URL;

  }

static doAction(url){
   
    return new Promise((resolve, reject)=> {

        let map = {method:'POST'};
        let headers = {
            'Access-Control-Request-Headers':'X-Custom-Header',
            'Content-Type': 'text/plain',
            'User-Agent':'Mozilla/5.0',
            'client':'iphone',
            'lnglat':'1212,1212',
            'dataType':'JSON',
            'rtime':'1111',
            'token':'64088',
 
        };
        map.headers = headers;
        map.follow =10;
        map.timeout = 8000;
        map.size = 0;
    

        console.info(JSON.stringify(map));
        fetch(url,map).then((response) => {
                if (response.ok) {
                    console.info(response.text());
                    return response.json();
                } else {
                    console.log('服务器繁忙，请稍后再试；\r\nCode:' + response.status);
                    console.info(JSON.stringify(response));
                }
            }).then((responseData) => {
                if (responseData && responseData.error_code == 200) {
                   resolve(responseData);//response.error_code 是与服务器端的约定，非0就是错误
                } else {
                    console.log('服务器繁忙，请稍后再试.......')//response.message也是与服务器端的约定，error_code !==0 就需要返回message
                }
            })
            .catch((err)=> {
                console.log('服务器异常');
            })
    })
   }
}

module.exports = HHRemote;
