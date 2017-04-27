/**
 * NetUitl 网络请求的实现
 * @author lidong
 * @date 2016-03-17
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';

import HHParseErrors from '../Constants/HHParseErrors';
class HHRemoteErrors extends Component {


/**
  *errorCode :服务器错误码
  *params:请求参数
*/
 static getErrorCodeWithMessage(errorCode){
  let codeMessage = '';
       for (let i = 0; i < HHParseErrors.parse.length; i++) {
            codeStr= HHParseErrors.parse[i].errorCode;
            if (HHParseErrors.parse[i].errorCode==errorCode) {
                codeMessage = HHParseErrors.parse[i].message;
            };

       };
    return codeMessage;
 }

}

module.exports = HHRemoteErrors;
