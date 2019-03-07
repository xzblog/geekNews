/*
 * 用户协议
 * @Author: Miracle
 */
import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Protocol extends Component{
    render(){
        return(
            <WebView source={{ html: "<p style='font-size: 30px'>用户协议，此处为写死的html， 如需改成动态的。 只需吧WebView的source参数改成 `source={{uri: 'https://xx.com'}}`即可， https://xx.com为你的用户协议线上地址</p>"}}/>
        )
    }
}
