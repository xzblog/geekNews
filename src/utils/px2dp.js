/*
 * px转dp
 * @Author: Miracle
 */

import { Dimensions } from 'react-native';
// 设备高度
const deviceHeightDp =  Dimensions.get('window').height;

// 设计图高度
const designHeightPx = 640;

export default function px2dp(px) {
    return px * deviceHeightDp / designHeightPx;
}
