// obtained from react native tutorials

import React,{PixelRatio} from 'react-native';
import Dimensions from 'Dimensions';

const HHConstants = {
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),

  DeviceWidth: Dimensions.get('window').width,            //设备宽度
  DeviceHeight: Dimensions.get('window').height,           //设备高度
  MianColor:'#F5FCFF'

};

export default HHConstants;
